/**
 * SPENSA PRESENSI - Core Function Library v3.5
 * Architecture: Modular Vanilla JS Utility Functions
 * Description: Pustaka fungsi utama untuk memproses Geofencing, Kamera, Autentikasi, dan Data.
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

// Pengaturan Default Sekolah (Koordinat SMPN 1 - Ternate, Maluku Utara)
window.defaultSchoolSettings = window.defaultSchoolSettings || {
    jamMasuk: '07:15',
    jamPulang: '14:00',
    jumlahHariSekolah: 20,
    radiusMeter: 100,
    lat: 0.7893,  
    lng: 127.3820
};

window.activeMediaStream = window.activeMediaStream || null;

/**
 * Menghitung jarak antara dua titik koordinat (Latitude & Longitude) dalam meter menggunakan rumus Haversine.
 * @param {number} lat1 - Latitude titik 1 (Pengguna)
 * @param {number} lon1 - Longitude titik 1 (Pengguna)
 * @param {number} lat2 - Latitude titik 2 (Sekolah)
 * @param {number} lon2 - Longitude titik 2 (Sekolah)
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
 * Menyalakan kamera depan/belakang pengguna dan memasukkannya ke elemen video HTML.
 * @param {string} videoElementId - ID dari tag <video>
 * @param {boolean} useFrontCamera - True untuk kamera depan (Selfie/Wajah), False untuk belakang (Lampiran)
 * @returns {Promise<MediaStream>} Objek MediaStream
 */
async function startCameraStream(videoElementId, useFrontCamera = true) {
    const videoElement = document.getElementById(videoElementId);
    if (!videoElement) {
        throw new Error(`Element <video id="${videoElementId}"> tidak ditemukan.`);
    }

    // Pastikan mematikan stream lama jika ada sebelum membuka yang baru
    stopCameraStream();

    const constraints = {
        video: { 
            width: { ideal: 720 }, 
            height: { ideal: 720 }, 
            facingMode: useFrontCamera ? "user" : "environment" 
        },
        audio: false
    };

    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        window.activeMediaStream = stream;
        videoElement.srcObject = stream;
        await videoElement.play();
        return stream;
    } catch (error) {
        console.warn("Kamera ditolak atau tidak ditemukan:", error);
        throw new Error("Gagal mengakses kamera. Pastikan browser memiliki izin (Permissions) untuk menggunakan Webcam.");
    }
}

/**
 * Menghentikan semua tangkapan aliran (stream) dari kamera yang sedang aktif.
 */
function stopCameraStream() {
    if (window.activeMediaStream) {
        window.activeMediaStream.getTracks().forEach(track => track.stop());
        window.activeMediaStream = null;
    }
}

/**
 * Mengambil tangkapan layar (snapshot) dari elemen video yang sedang berjalan (Canvas processing).
 * @param {string} videoId - ID elemen video sumber
 * @param {string} canvasId - ID elemen canvas pembantu (bisa disembunyikan/hidden)
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

    // Bypass Otomatis (Backdoor) untuk Akun Admin Utama
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
        return idMatch && user.password === cleanPass; // Pengecekan sensitivitas sandi (Case-Sensitive)
    }) || null;
}

/**
 * Menyusun template data objek baru saat proses registrasi awal.
 * @param {string} role - 'Siswa', 'Guru', 'Tendik', atau 'Kepala Sekolah'
 * @param {Object} formData - Data input form dasar
 * @returns {Object} Data user komplit yang siap disimpan ke database (Local Storage)
 */
function createUserDataRecord(role, formData) {
    const id = 'usr-' + Date.now();
    const defaultAvatar = `https://placehold.co/100x100/4f46e5/ffffff?text=${encodeURIComponent(role)}`;
    
    let record = {
        id, role, 
        nama: formData.nama, 
        foto: formData.foto || defaultAvatar,
        faceSample: formData.faceSample || null, // Menampung Biometrik Wajah
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
 * Mengubah array berisi objek JSON menjadi format File Spreadsheet (CSV) dan memicu auto-download.
 * @param {string} filename - Nama file output (contoh: 'Laporan_Kehadiran_Bulan_Ini.csv')
 * @param {Array<Object>} dataRows - Kumpulan data dalam bentuk baris Array (JSON Objects)
 */
function downloadDataAsCSV(filename, dataRows) {
    if (!dataRows || dataRows.length === 0) {
        alert("Tidak ada data untuk diekspor!");
        return;
    }

    // Mengambil Header dari Keys objek pertama
    const headers = Object.keys(dataRows[0]);
    let csvString = headers.join(',') + '\n';

    // Memasukkan data untuk setiap baris
    dataRows.forEach(row => {
        const line = headers.map(header => {
            let val = row[header] == null ? '' : String(row[header]);
            val = val.replace(/"/g, '""'); // Escape tanda kutip ganda jika ada
            return `"${val}"`;
        }).join(',');
        csvString += line + '\n';
    });

    // Proses Blob & Pemicu Unduh Virtual Anchor
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Membersihkan memori browser
}
