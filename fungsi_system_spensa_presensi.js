/**
 * ==========================================================================
 * SPENSA PRESENSI - CORE FUNCTION LIBRARY (function.js)
 * Enterprise IT Engineering Architecture v2.5
 * ==========================================================================
 */

/**
 * Storage key constants used to synchronize data with localStorage.
 */
const STORAGE_KEYS = {
    USERS: 'spensa_users_db',
    ATTENDANCE: 'spensa_attendance_db',
    TICKETS: 'spensa_tickets_db',
    MAPEL_ATTENDANCE: 'spensa_mapel_db',
    INCIDENTS: 'spensa_incidents_db',
    SETTINGS: 'spensa_settings_db',
    SESSION: 'spensa_current_session'
};

/**
 * Default school operational settings and coordinates (Center point: Ternate/Halsel region).
 */
const defaultSchoolSettings = {
    jamMasuk: '07:15',
    jamPulang: '14:00',
    jumlahHariSekolah: 20,
    radiusMeter: 100,
    lat: -0.7893,
    lng: 127.3820,
    aktifHari: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
};

/**
 * Global variable for active camera stream tracking.
 */
let activeMediaStream = null;

/**
 * Calculates the geodesic distance between two points on Earth using the Haversine formula.
 * @param {number} lat1 - Latitude of point 1 (in degrees)
 * @param {number} lon1 - Longitude of point 1 (in degrees)
 * @param {number} lat2 - Latitude of point 2 (in degrees)
 * @param {number} lon2 - Longitude of point 2 (in degrees)
 * @returns {number} Distance in meters rounded to nearest integer
 */
function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const EARTH_RADIUS_METERS = 6371000; // Earth's mean radius in meters
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(EARTH_RADIUS_METERS * c);
}

/**
 * Verifies if user coordinates are within the defined school geofence radius.
 * @param {number} userLat - User current latitude
 * @param {number} userLng - User current longitude
 * @param {Object} schoolConfig - School location settings object
 * @returns {Object} Result object containing insideGeofence status, distance, and badge text
 */
function verifyGeofenceLocation(userLat, userLng, schoolConfig = defaultSchoolSettings) {
    const distance = calculateHaversineDistance(
        userLat, 
        userLng, 
        schoolConfig.lat, 
        schoolConfig.lng
    );

    const isInside = distance <= schoolConfig.radiusMeter;

    return {
        insideGeofence: isInside,
        distanceMeters: distance,
        allowedRadius: schoolConfig.radiusMeter,
        statusMessage: isInside 
            ? `✓ Dalam Radius (${distance}m)` 
            : `❌ Diluar Radius (${distance}m, Max: ${schoolConfig.radiusMeter}m)`
    };
}

/**
 * Requests and initializes user webcam media stream.
 * @param {string} videoElementId - Target <video> tag ID
 * @returns {Promise<MediaStream>} Stream promise
 */
async function startCameraStream(videoElementId) {
    const videoElement = document.getElementById(videoElementId);
    if (!videoElement) {
        throw new Error(`Element <video id="${videoElementId}"> tidak ditemukan.`);
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 1280 }, 
                height: { ideal: 720 }, 
                facingMode: "user" 
            }, 
            audio: false 
        });
        
        activeMediaStream = stream;
        videoElement.srcObject = stream;
        await videoElement.play();
        return stream;
    } catch (error) {
        console.warn("Camera stream initialisation failed:", error);
        throw new Error("Gagal mengaktifkan kamera. Pastikan izin kamera telah diberikan.");
    }
}

/**
 * Stops all active media tracks for video streams.
 */
function stopCameraStream() {
    if (activeMediaStream) {
        activeMediaStream.getTracks().forEach(track => track.stop());
        activeMediaStream = null;
    }
}

/**
 * Captures a single frame from video stream onto a canvas and returns Base64 PNG URL.
 * @param {string} videoId - Element ID of video stream
 * @param {string} canvasId - Element ID of hidden/target canvas
 * @returns {string} Data URL string (image/png)
 */
function captureWebcamFrame(videoId, canvasId) {
    const video = document.getElementById(videoId);
    const canvas = document.getElementById(canvasId);

    if (!video || !canvas) return null;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL('image/png');
}

/**
 * Validates user credentials against database records.
 * Rules:
 * - Admin: Username "Gacor" / Password "spensahalsel"
 * - Siswa: NIS is both Username and Password
 * - Guru: NIP is both Username and Password
 * - Tendik: Username & Password set during registration
 * 
 * @param {string} identifier - Username / NIS / NIP
 * @param {string} password - Input password
 * @param {Array} usersArray - List of registered user records
 * @returns {Object|null} Authenticated user record or null
 */
function authenticateCredentials(identifier, password, usersArray = []) {
    const cleanId = String(identifier).trim();
    const cleanPass = String(password).trim();

    // Check Hardcoded Admin
    if (cleanId === 'Gacor' && cleanPass === 'spensahalsel') {
        return {
            id: 'admin-001',
            nama: 'Administrator Utama',
            username: 'Gacor',
            role: 'Admin',
            foto: 'https://placehold.co/100x100/6366f1/ffffff?text=ADM'
        };
    }

    return usersArray.find(user => {
        const matchUsername = user.username === cleanId;
        const matchNIS = user.nis && user.nis === cleanId;
        const matchNIP = user.nip && user.nip === cleanId;

        return (matchUsername || matchNIS || matchNIP) && user.password === cleanPass;
    }) || null;
}

/**
 * Stores active user session in localStorage.
 * @param {Object} userObj - Authenticated user payload
 */
function saveUserSession(userObj) {
    try {
        localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(userObj));
    } catch (e) {
        console.error("Session save error:", e);
    }
}

/**
 * Retrieves logged-in user from active session.
 * @returns {Object|null} User session payload
 */
function getSavedSession() {
    try {
        const session = localStorage.getItem(STORAGE_KEYS.SESSION);
        return session ? JSON.parse(session) : null;
    } catch (e) {
        return null;
    }
}

/**
 * Clears active user session.
 */
function clearUserSession() {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
}

/**
 * Validates and constructs new user data structure based on specified role.
 * @param {string} role - 'Siswa', 'Guru', or 'Tendik'
 * @param {Object} formData - Form input key-value payload
 * @returns {Object} Processed user record
 */
function createUserDataRecord(role, formData) {
    const id = 'usr-' + Date.now();
    const defaultAvatar = `https://placehold.co/100x100/4f46e5/ffffff?text=${encodeURIComponent(role)}`;

    let baseRecord = {
        id,
        role,
        nama: formData.nama,
        foto: formData.foto || defaultAvatar,
        createdAt: new Date().toISOString()
    };

    if (role === 'Siswa') {
        baseRecord.username = formData.nis;
        baseRecord.password = formData.nis; // NIS is Username & Password
        baseRecord.nis = formData.nis;
        baseRecord.ttl = formData.ttl || '-';
        baseRecord.alamat = formData.alamat || '-';
        baseRecord.kelas = formData.kelas || '-';
        baseRecord.walikelas = formData.walikelas || '-';
    } else if (role === 'Guru') {
        baseRecord.username = formData.nip;
        baseRecord.password = formData.nip; // NIP is Username & Password
        baseRecord.nip = formData.nip;
        baseRecord.isWalikelas = Boolean(formData.isWalikelas);
        baseRecord.kelasWalikelas = formData.isWalikelas ? formData.kelasWalikelas : '-';
    } else if (role === 'Tendik') {
        baseRecord.username = formData.username;
        baseRecord.password = formData.password;
        baseRecord.jabatan = formData.jabatan || 'Tenaga Kependidikan';
    }

    return baseRecord;
}

/**
 * Processes and appends attendance check-in payload.
 * @param {Object} user - Active user
 * @param {string} selfieBase64 - Selfie photo
 * @param {Object} geofenceStatus - Location check result
 * @returns {Object} New attendance record
 */
function buildAttendanceEntry(user, selfieBase64, geofenceStatus = {}) {
    const now = new Date();
    const dateFormatted = now.toISOString().split('T')[0];
    const timeFormatted = now.toLocaleTimeString('id-ID', { hour12: false });

    return {
        id: 'att-' + Date.now(),
        userId: user.id,
        userName: user.nama,
        role: user.role,
        kelas: user.kelas || user.kelasWalikelas || '-',
        tanggal: dateFormatted,
        jam: timeFormatted,
        status: 'Hadir',
        foto: selfieBase64,
        insideGeofence: geofenceStatus.insideGeofence !== undefined ? geofenceStatus.insideGeofence : true,
        distanceMeters: geofenceStatus.distanceMeters || 0
    };
}

/**
 * Constructs new permission ticket request object.
 * @param {Object} user - Submitting user
 * @param {Object} ticketPayload - Form inputs
 * @returns {Object} Ticket record
 */
function createPermissionTicket(user, ticketPayload) {
    return {
        id: 'tkt-' + Date.now(),
        userId: user.id,
        userName: user.nama,
        userRole: user.role,
        kelas: user.kelas || user.kelasWalikelas || '-',
        jenis: ticketPayload.jenis, // 'Izin', 'Sakit', or 'Tugas'
        tanggalAwal: ticketPayload.tanggalAwal,
        tanggalAkhir: ticketPayload.tanggalAkhir,
        keterangan: ticketPayload.keterangan,
        lampiran: ticketPayload.lampiran || null,
        status: 'Pending',
        createdAt: new Date().toISOString()
    };
}

/**
 * Updates status of permission ticket (Approve / Reject).
 * @param {Array} ticketsArray - Reference tickets array
 * @param {string} ticketId - Target ticket ID
 * @param {string} newStatus - 'Approved' or 'Rejected'
 * @returns {boolean} Success status
 */
function updateTicketApprovalStatus(ticketsArray, ticketId, newStatus) {
    const targetIndex = ticketsArray.findIndex(t => t.id === ticketId);
    if (targetIndex !== -1) {
        ticketsArray[targetIndex].status = newStatus;
        ticketsArray[targetIndex].updatedAt = new Date().toISOString();
        return true;
    }
    return false;
}

/**
 * Generates subject attendance entries for students in a class session.
 * @param {string} subjectName - Course name (e.g. Matematika)
 * @param {string} className - Class identifier (e.g. VII-A)
 * @param {Object} teacherUser - Logged in teacher
 * @param {Array} studentStatusList - Array of { studentName, status }
 * @returns {Array} List of subject attendance records
 */
function generateSubjectAttendanceRecords(subjectName, className, teacherUser, studentStatusList) {
    const now = new Date();
    const timeStamp = `${now.toISOString().split('T')[0]} ${now.toLocaleTimeString('id-ID')}`;

    return studentStatusList.map(item => ({
        id: 'mapel-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        waktu: timeStamp,
        mapel: subjectName,
        kelas: className,
        guruName: teacherUser.nama,
        siswaName: item.studentName,
        status: item.status // 'Hadir', 'Izin', 'Sakit', 'Alpa'
    }));
}

/**
 * Creates a new student truant / incident report.
 * @param {Object} reporterUser - User making the report
 * @param {string} chronologyText - Detailed chronology description
 * @param {string} photoEvidenceBase64 - Camera evidence Base64
 * @returns {Object} Incident report record
 */
function buildIncidentReport(reporterUser, chronologyText, photoEvidenceBase64) {
    const now = new Date();
    const timeFormatted = `${now.toISOString().split('T')[0]} ${now.toLocaleTimeString('id-ID')}`;

    return {
        id: 'rep-' + Date.now(),
        pelaporName: reporterUser.nama,
        pelaporRole: reporterUser.role,
        kronologi: chronologyText,
        foto: photoEvidenceBase64,
        waktu: timeFormatted
    };
}

/**
 * Converts array of objects into CSV format and triggers browser file download.
 * @param {string} filename - Output filename (e.g., rekap_presensi.csv)
 * @param {Array<Object>} dataRows - Array of structured objects
 */
function downloadDataAsCSV(filename, dataRows) {
    if (!dataRows || !dataRows.length) {
        console.warn("Tidak ada data untuk diekspor ke CSV.");
        return;
    }

    const headers = Object.keys(dataRows[0]);
    let csvString = headers.join(',') + '\n';

    dataRows.forEach(row => {
        const line = headers.map(header => {
            let val = row[header] === null || row[header] === undefined ? '' : String(row[header]);
            val = val.replace(/"/g, '""'); // Escape double quotes
            return `"${val}"`;
        }).join(',');
        csvString += line + '\n';
    });

    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    
    downloadAnchor.setAttribute('href', url);
    downloadAnchor.setAttribute('download', filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(url);
}

/**
 * Formats JS Date object into standard Indonesian Long Date string.
 * @param {Date} date - JS Date instance
 * @returns {string} Formatted Indonesian date string
 */
function formatIndonesianFullDate(date = new Date()) {
    return date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
