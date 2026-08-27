/**
 * SPENSA PRESENSI - Core Function Library v3.0
 * Architecture: Modular Vanilla JS Utility Functions
 */

window.STORAGE_KEYS = window.STORAGE_KEYS || {
    USERS: 'spensa_users_db',
    ATTENDANCE: 'spensa_attendance_db',
    TICKETS: 'spensa_tickets_db',
    MAPEL_ATTENDANCE: 'spensa_mapel_db',
    INCIDENTS: 'spensa_incidents_db',
    SETTINGS: 'spensa_settings_db',
    PIKET: 'spensa_piket_db',
    KELAS_LIST: 'spensa_kelas_list',
    MAPEL_LIST: 'spensa_mapel_list',
    SESSION: 'spensa_current_session',
    THEME: 'spensa_theme_pref'
};

window.defaultSchoolSettings = window.defaultSchoolSettings || {
    jamMasuk: '07:15',
    jamPulang: '14:00',
    jumlahHariSekolah: 20,
    radiusMeter: 100,
    lat: 0.7893,  // Koordinat Default (Contoh: Ternate)
    lng: 127.3820
};

window.activeMediaStream = window.activeMediaStream || null;

/**
 * Menghitung jarak antara dua titik koordinat (Latitude & Longitude) dalam meter menggunakan rumus Haversine.
 * @param {number} lat1 - Latitude titik 1
 * @param {number} lon1 - Longitude titik 1
 * @param {number} lat2 - Latitude titik 2
 * @param {number} lon2 - Longitude titik 2
 * @returns {number} Jarak dalam satuan meter (dibulatkan)
 */
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius bumi dalam meter
    const phi1 = (lat1 * Math.PI) / 180;
    const phi2 = (lat2 * Math.PI) / 180;
    const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;

    const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
              Math.cos(phi1) * Math.cos(phi2) * 
              Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return Math.round(R * c);
}

/**
 * Memverifikasi apakah lokasi pengguna saat ini berada dalam radius Geofence sekolah.
 * @param {number} userLat - Latitude pengguna
 * @param {number} userLng - Longitude pengguna
 * @param {Object} schoolConfig - Pengaturan lokasi dan radius sekolah
 * @returns {Object} Status dalam geofence, jarak, dan pesan
 */
function verifyGeofenceLocation(userLat, userLng, schoolConfig = window.defaultSchoolSettings) {
    const distance = calculateHaversineDistance(
        userLat, userLng, schoolConfig.lat, schoolConfig.lng
    );

    const isInside = distance <= schoolConfig.radiusMeter;

    return {
        insideGeofence: isInside,
        distanceMeters: distance,
        allowedRadius: schoolConfig.radiusMeter,
        statusMessage: isInside
            ? `✓ Dalam Radius (${distance}m)`
            : `❌ Diluar Radius (${distance}m / Max: ${schoolConfig.radiusMeter}m)`
    };
}

/**
 * Menyalakan kamera depan pengguna dan memasukkannya ke elemen video HTML.
 * @param {string} videoElementId - ID dari tag <video>
 * @returns {Promise<MediaStream>} Objek MediaStream
 */
async function startCameraStream(videoElementId) {
    const videoElement = document.getElementById(videoElementId);
    if (!videoElement) {
        throw new Error(`Element <video id="${videoElementId}"> tidak ditemukan.`);
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: { ideal: 720 }, height: { ideal: 720 }, facingMode: "user" },
            audio: false
        });
        window.activeMediaStream = stream;
        videoElement.srcObject = stream;
        await videoElement.play();
        return stream;
    } catch (error) {
        console.warn("Kamera ditolak atau tidak ditemukan:", error);
        throw new Error("Gagal mengakses kamera. Periksa izin browser Anda.");
    }
}

/**
 * Menghentikan semua tangkapan aliran (stream) dari kamera aktif.
 */
function stopCameraStream() {
    if (window.activeMediaStream) {
        window.activeMediaStream.getTracks().forEach(track => track.stop());
        window.activeMediaStream = null;
    }
}

/**
 * Mengambil tangkapan layar (snapshot) dari elemen video yang sedang berjalan.
 * @param {string} videoId - ID elemen video sumber
 * @param {string} canvasId - ID elemen canvas untuk merender gambar (bisa disembunyikan)
 * @returns {string|null} Format Base64 gambar (image/png)
 */
function captureWebcamFrame(videoId, canvasId) {
    const video = document.getElementById(videoId);
    const canvas = document.getElementById(canvasId);

    if (!video || !canvas) return null;

    canvas.width = video.videoWidth || 400;
    canvas.height = video.videoHeight || 400;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/png');
}

/**
 * Memvalidasi input pengguna dengan data di LocalStorage.
 * @param {string} identifier - ID, NIS, NIP, atau Username
 * @param {string} password - Kata sandi
 * @returns {Object|null} Mengembalikan data akun jika cocok, atau null
 */
function authenticateCredentials(identifier, password) {
    const cleanId = String(identifier).trim();
    const cleanPass = String(password).trim();

    // Bypass Akun Admin Utama
    if (cleanId === 'Gacor' && cleanPass === 'spensahalsel') {
        return {
            id: 'admin-001', role: 'Admin', nama: 'Administrator Utama',
            username: 'Gacor', password: 'spensahalsel', 
            foto: 'https://placehold.co/100x100/6366f1/ffffff?text=ADM'
        };
    }

    const users = JSON.parse(localStorage.getItem(window.STORAGE_KEYS.USERS)) || [];
    return users.find(user => {
        const idMatch = user.username === cleanId || user.nis === cleanId || user.nip === cleanId;
        return idMatch && user.password === cleanPass;
    }) || null;
}

/**
 * Menyusun data baru saat proses registrasi.
 * @param {string} role - 'Siswa', 'Guru', 'Tendik', atau 'Kepala Sekolah'
 * @param {Object} formData - Data input form
 * @returns {Object} Data user yang siap disimpan
 */
function createUserDataRecord(role, formData) {
    const id = 'usr-' + Date.now();
    const defaultAvatar = `https://placehold.co/100x100/4f46e5/ffffff?text=${encodeURIComponent(role)}`;
    
    let record = {
        id, role, 
        nama: formData.nama, 
        foto: formData.foto || defaultAvatar,
        faceSample: formData.faceSample || null,
        createdAt: new Date().toISOString()
    };

    if (role === 'Siswa') {
        record.username = formData.nis;
        record.password = formData.nis;
        record.nis = formData.nis;
        record.kelas = formData.kelas;
        record.walikelas = formData.walikelas;
    } else if (role === 'Guru') {
        record.username = formData.nip;
        record.password = formData.nip;
        record.nip = formData.nip;
        record.mapel = formData.mapel;
    } else if (role === 'Tendik' || role === 'Kepala Sekolah') {
        record.username = formData.nip;
        record.password = formData.nip;
        record.nip = formData.nip;
        record.jabatan = formData.jabatan || role;
    }

    return record;
}

/**
 * Mengubah array berisi objek menjadi format File CSV untuk diunduh.
 * @param {string} filename - Nama file (contoh: 'laporan.csv')
 * @param {Array<Object>} dataRows - Kumpulan data baris
 */
function downloadDataAsCSV(filename, dataRows) {
    if (!dataRows || dataRows.length === 0) {
        alert("Tidak ada data untuk diekspor!");
        return;
    }

    const headers = Object.keys(dataRows[0]);
    let csvString = headers.join(',') + '\n';

    dataRows.forEach(row => {
        const line = headers.map(header => {
            let val = row[header] == null ? '' : String(row[header]);
            val = val.replace(/"/g, '""'); // Escape quote
            return `"${val}"`;
        }).join(',');
        csvString += line + '\n';
    });

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
