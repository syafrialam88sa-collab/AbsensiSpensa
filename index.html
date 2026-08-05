<!DOCTYPE html>
<html lang="id" class="h-full bg-slate-900 text-slate-100 antialiased">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPENSA PRESENSI - Modern Integrated School Attendance</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Pro/Free Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <!-- Leaflet JS & CSS for Geofencing Maps -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <!-- Google Fonts Inter & JetBrains Mono -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700;800&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        mono: ['JetBrains Mono', 'monospace'],
                    },
                    colors: {
                        brand: {
                            50: '#eef2ff',
                            100: '#e0e7ff',
                            400: '#818cf8',
                            500: '#6366f1',
                            600: '#4f46e5',
                            700: '#4338ca',
                            800: '#3730a3',
                            900: '#312e81',
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        'scan': 'scan 2s linear infinite',
                    },
                    keyframes: {
                        scan: {
                            '0%, 100%': { top: '0%' },
                            '50%': { top: '100%' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #0f172a;
        }
        ::-webkit-scrollbar-thumb {
            background: #334155;
            border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569;
        }
        .glass-panel {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .glass-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glow-indigo {
            box-shadow: 0 0 25px -5px rgba(99, 102, 241, 0.3);
        }
        .glow-emerald {
            box-shadow: 0 0 25px -5px rgba(16, 185, 129, 0.3);
        }
        #map { 
            height: 320px; 
            width: 100%; 
            border-radius: 1rem; 
            z-index: 10;
        }
        .leaflet-container {
            background: #0f172a !important;
        }

        /* Light Mode Overrides */
        body.light-mode {
            background-color: #f1f5f9 !important;
            color: #0f172a !important;
        }
        body.light-mode .glass-panel {
            background: rgba(255, 255, 255, 0.88) !important;
            backdrop-filter: blur(16px) !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08) !important;
        }
        body.light-mode .glass-card {
            background: rgba(241, 245, 249, 0.95) !important;
            border: 1px solid rgba(0, 0, 0, 0.1) !important;
        }
        body.light-mode input, 
        body.light-mode select, 
        body.light-mode textarea {
            background-color: #ffffff !important;
            color: #0f172a !important;
            border-color: #cbd5e1 !important;
        }
        body.light-mode input::placeholder, 
        body.light-mode textarea::placeholder {
            color: #94a3b8 !important;
        }
        body.light-mode .text-white {
            color: #0f172a !important;
        }
        body.light-mode .text-slate-400, 
        body.light-mode .text-slate-300 {
            color: #475569 !important;
        }
        body.light-mode .text-slate-100, 
        body.light-mode .text-slate-200 {
            color: #1e293b !important;
        }
        body.light-mode .bg-slate-900, 
        body.light-mode .bg-slate-950 {
            background-color: #e2e8f0 !important;
        }
        body.light-mode thead {
            background-color: #cbd5e1 !important;
            color: #0f172a !important;
        }
        body.light-mode .border-slate-800, 
        body.light-mode .border-slate-700 {
            border-color: #cbd5e1 !important;
        }
    </style>
</head>
<body class="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">

<div id="notificationToast" class="fixed top-5 right-5 z-50 transform transition-all duration-300 translate-x-full opacity-0 max-w-md w-full glass-panel border-l-4 shadow-2xl rounded-r-2xl p-4 flex items-center space-x-3 pointer-events-none">
    <div id="toastIcon" class="text-2xl"></div>
    <div class="flex-1">
        <h4 id="toastTitle" class="font-bold text-sm text-white">Notifikasi</h4>
        <p id="toastMessage" class="text-xs text-slate-300">Pesan notifikasi sistem.</p>
    </div>
</div>

<div id="app" class="min-h-screen flex flex-col">
    <header class="glass-panel sticky top-0 z-40 border-b border-slate-800/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div class="flex items-center space-x-3.5">
                <div class="relative">
                    <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                        <i class="fa-solid fa-graduation-cap text-white text-xl"></i>
                    </div>
                    <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse"></span>
                </div>
                <div>
                    <h1 class="font-black text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-slate-400">
                        SPENSA PRESENSI
                    </h1>
                    <p class="text-[11px] text-indigo-400 font-medium">Sistem Absensi Digital Terpadu v2.5</p>
                </div>
            </div>
            
            <div class="flex items-center space-x-3">
                <button onclick="toggleTheme()" id="themeToggleBtn" class="p-2.5 bg-slate-800/80 hover:bg-slate-700 text-amber-400 rounded-2xl border border-slate-700/60 transition group flex items-center justify-center" title="Ganti Mode Siang / Malam">
                    <i id="themeIcon" class="fa-solid fa-sun text-lg group-hover:rotate-45 transition transform duration-300"></i>
                </button>

                <div id="userInfoHeader" class="hidden flex items-center space-x-4">
                    <div class="text-right hidden sm:block">
                        <span id="headerUserName" class="block font-semibold text-sm text-slate-100">Nama User</span>
                        <span id="headerUserRole" class="inline-block px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full">ROLE</span>
                    </div>
                    <div class="relative">
                        <img id="headerUserAvatar" src="https://placehold.co/100x100/3b82f6/ffffff?text=U" class="w-11 h-11 rounded-2xl border-2 border-indigo-500/50 object-cover shadow-lg" alt="User Avatar">
                    </div>
                    <button onclick="logout()" class="p-2.5 bg-slate-800/80 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 rounded-2xl border border-slate-700/60 transition group" title="Keluar / Logout">
                        <i class="fa-solid fa-right-from-bracket text-lg group-hover:scale-110 transition"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <section id="loginSection" class="max-w-md mx-auto my-10 glass-panel p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            <div class="absolute -right-20 -top-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div class="absolute -left-20 -bottom-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="text-center mb-8 relative z-10">
                <div class="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <i class="fa-solid fa-user-shield text-3xl text-indigo-400"></i>
                </div>
                <h2 class="text-2xl font-black text-white tracking-tight">Portal Akses Masuk</h2>
                <p class="text-xs text-slate-400 mt-1">Masuk dengan akun terdaftar di bawah ini</p>
            </div>

            <form id="loginForm" onsubmit="handleLogin(event)" class="space-y-4 relative z-10">
                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Username / NIS / NIP</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <i class="fa-solid fa-id-card"></i>
                        </span>
                        <input type="text" id="loginUsername" required class="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-white placeholder-slate-500 transition" placeholder="Masukkan ID / NIS / NIP">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Password</label>
                    <div class="relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-500">
                            <i class="fa-solid fa-lock"></i>
                        </span>
                        <input type="password" id="loginPassword" required class="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-white placeholder-slate-500 transition" placeholder="Masukkan Password">
                    </div>
                </div>

                <button type="submit" class="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/30 transition transform active:scale-95 flex items-center justify-center space-x-2">
                    <span>Masuk Ke Sistem</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </form>
        </section>

        <section id="adminView" class="hidden space-y-6">
            <div class="flex flex-wrap gap-2 p-2 glass-panel rounded-2xl shadow-sm">
                <button onclick="switchAdminTab('dashboard')" id="tabBtn-dashboard" class="adminTabBtn px-5 py-3 rounded-xl font-bold text-xs transition flex items-center space-x-2 bg-indigo-600 text-white shadow-md">
                    <i class="fa-solid fa-chart-pie"></i>
                    <span>Dashboard</span>
                </button>
                <button onclick="switchAdminTab('registrasi')" id="tabBtn-registrasi" class="adminTabBtn px-5 py-3 rounded-xl font-bold text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition flex items-center space-x-2">
                    <i class="fa-solid fa-user-plus"></i>
                    <span>Registrasi User</span>
                </button>
                <button onclick="switchAdminTab('pengaturan')" id="tabBtn-pengaturan" class="adminTabBtn px-5 py-3 rounded-xl font-bold text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition flex items-center space-x-2">
                    <i class="fa-solid fa-sliders"></i>
                    <span>Pengaturan</span>
                </button>
                <button onclick="switchAdminTab('laporan')" id="tabBtn-laporan" class="adminTabBtn px-5 py-3 rounded-xl font-bold text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition flex items-center space-x-2">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span>Laporan Bolos</span>
                </button>
            </div>

            <!-- Admin Subtab: Dashboard -->
            <div id="adminTab-dashboard" class="space-y-6">
                <div>
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3 flex items-center">
                        <i class="fa-solid fa-user-graduate text-indigo-500 mr-2"></i> Ringkasan Kehadiran Siswa
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-slate-500">
                            <p class="text-[11px] font-bold text-slate-400">Total Siswa</p>
                            <p id="statTotalSiswa" class="text-3xl font-black text-white mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5">
                            <p class="text-[11px] font-bold text-emerald-400">Kehadiran Siswa</p>
                            <p id="statHadirSiswa" class="text-3xl font-black text-emerald-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-amber-500 bg-amber-500/5">
                            <p class="text-[11px] font-bold text-amber-400">Siswa Izin</p>
                            <p id="statIzinSiswa" class="text-3xl font-black text-amber-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-cyan-500 bg-cyan-500/5">
                            <p class="text-[11px] font-bold text-cyan-400">Siswa Sakit</p>
                            <p id="statSakitSiswa" class="text-3xl font-black text-cyan-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5 col-span-2 md:col-span-1">
                            <p class="text-[11px] font-bold text-rose-400">Selisih Kehadiran (Alpa)</p>
                            <p id="statSelisihSiswa" class="text-3xl font-black text-rose-400 mt-1">0</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 class="text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-3 flex items-center">
                        <i class="fa-solid fa-chalkboard-user text-indigo-500 mr-2"></i> Ringkasan Kehadiran Guru
                    </h3>
                    <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-slate-500">
                            <p class="text-[11px] font-bold text-slate-400">Total Guru</p>
                            <p id="statTotalGuru" class="text-3xl font-black text-white mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5">
                            <p class="text-[11px] font-bold text-emerald-400">Kehadiran Guru</p>
                            <p id="statHadirGuru" class="text-3xl font-black text-emerald-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-amber-500 bg-amber-500/5">
                            <p class="text-[11px] font-bold text-amber-400">Guru Izin</p>
                            <p id="statIzinGuru" class="text-3xl font-black text-amber-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-cyan-500 bg-cyan-500/5">
                            <p class="text-[11px] font-bold text-cyan-400">Guru Sakit</p>
                            <p id="statSakitGuru" class="text-3xl font-black text-cyan-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-purple-500 bg-purple-500/5">
                            <p class="text-[11px] font-bold text-purple-400">Tugas Luar</p>
                            <p id="statTugasGuru" class="text-3xl font-black text-purple-400 mt-1">0</p>
                        </div>
                        <div class="glass-panel p-5 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5">
                            <p class="text-[11px] font-bold text-rose-400">Selisih Kehadiran</p>
                            <p id="statSelisihGuru" class="text-3xl font-black text-rose-400 mt-1">0</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="glass-panel p-6 rounded-3xl">
                        <h3 class="text-sm font-bold text-white mb-4 flex items-center">
                            <i class="fa-solid fa-school text-indigo-400 mr-2"></i> Status Aktivitas Kelas
                        </h3>
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
                                <span class="text-[10px] text-slate-400 block font-bold uppercase">Total Kelas</span>
                                <span id="statTotalKelas" class="text-2xl font-black text-white mt-1 block">0</span>
                            </div>
                            <div class="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                                <span class="text-[10px] text-emerald-400 block font-bold uppercase">Kelas KBM</span>
                                <span id="statKelasKBM" class="text-2xl font-black text-emerald-400 mt-1 block">0</span>
                            </div>
                            <div class="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                                <span class="text-[10px] text-rose-400 block font-bold uppercase">Tidak KBM</span>
                                <span id="statKelasNonKBM" class="text-2xl font-black text-rose-400 mt-1 block">0</span>
                            </div>
                        </div>
                    </div>

                    <div class="glass-panel p-6 rounded-3xl">
                        <h3 class="text-sm font-bold text-white mb-4 flex items-center">
                            <i class="fa-solid fa-user-ninja text-indigo-400 mr-2"></i> Nama Guru Jaga / Piket Hari Ini
                        </h3>
                        <div id="guruPiketList" class="flex flex-wrap gap-2.5">
                            <span class="px-3.5 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-xl text-xs font-semibold flex items-center space-x-2">
                                <i class="fa-solid fa-user-check text-emerald-400"></i> <span>Drs. Ahmad Dahlan, M.Pd</span>
                            </span>
                            <span class="px-3.5 py-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-xl text-xs font-semibold flex items-center space-x-2">
                                <i class="fa-solid fa-user-check text-emerald-400"></i> <span>Siti Nurhaliza, S.Pd</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Admin Subtab: Registrasi -->
            <div id="adminTab-registrasi" class="hidden space-y-6">
                <div class="glass-panel p-6 rounded-3xl space-y-6">
                    <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                        <div>
                            <h3 class="text-lg font-black text-white">Form Registrasi User Baru</h3>
                            <p class="text-xs text-slate-400">Pilih role untuk membuka formulir pendataan akun</p>
                        </div>
                    </div>

                    <div>
                        <label class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pilih Role User</label>
                        <select id="regRoleSelect" onchange="renderRegForm()" class="w-full md:w-1/3 p-3 bg-slate-900 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-indigo-500 text-sm font-bold text-white">
                            <option value="Siswa">Siswa</option>
                            <option value="Guru">Guru</option>
                            <option value="Tendik">Tendik</option>
                        </select>
                    </div>

                    <form id="regForm" onsubmit="handleUserRegistration(event)" class="space-y-4">
                        <div id="regFormContainer" class="space-y-4"></div>
                        <div class="pt-4 border-t border-slate-800 flex justify-end">
                            <button type="submit" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-2xl shadow-lg shadow-indigo-600/30 transition flex items-center space-x-2">
                                <i class="fa-solid fa-floppy-disk"></i>
                                <span>Simpan Data Akun</span>
                            </button>
                        </div>
                    </form>
                </div>

                <div class="glass-panel p-6 rounded-3xl">
                    <h3 class="text-base font-bold text-white mb-4">Daftar Hasil Penginputan Akun</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300">
                            <thead class="bg-slate-900/90 text-slate-400 uppercase tracking-wider font-bold">
                                <tr>
                                    <th class="p-3.5 rounded-l-xl">Foto</th>
                                    <th class="p-3.5">Nama Lengkap</th>
                                    <th class="p-3.5">Role</th>
                                    <th class="p-3.5">ID / Username / NIS / NIP</th>
                                    <th class="p-3.5">Detail Tambahan</th>
                                    <th class="p-3.5 text-center rounded-r-xl">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="registeredUsersTable" class="divide-y divide-slate-800/60"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Admin Subtab: Pengaturan -->
            <div id="adminTab-pengaturan" class="hidden space-y-6">
                <div class="flex border-b border-slate-800 gap-2">
                    <button onclick="switchSettingsSubtab('jamHari')" id="subtabBtn-jamHari" class="settingSubTabBtn px-5 py-2.5 border-b-2 border-indigo-500 font-bold text-xs text-indigo-400">Jam & Hari Sekolah</button>
                    <button onclick="switchSettingsSubtab('catatan')" id="subtabBtn-catatan" class="settingSubTabBtn px-5 py-2.5 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white">Catatan Presensi</button>
                    <button onclick="switchSettingsSubtab('presensiMapel')" id="subtabBtn-presensiMapel" class="settingSubTabBtn px-5 py-2.5 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white">Presensi Mapel</button>
                    <button onclick="switchSettingsSubtab('lokasi')" id="subtabBtn-lokasi" class="settingSubTabBtn px-5 py-2.5 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white">Lokasi & Radius</button>
                </div>

                <div id="settingSub-jamHari" class="glass-panel p-6 rounded-3xl space-y-4">
                    <h3 class="text-base font-bold text-white">Pengaturan Waktu Operasional Sekolah</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Jam Masuk Sekolah</label>
                            <input type="time" id="settingJamMasuk" value="07:15" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Jam Pulang Sekolah</label>
                            <input type="time" id="settingJamPulang" value="14:00" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-2">Jumlah Waktu Sekolah Aktif (Hari)</label>
                            <input type="number" id="settingJumlahHariSekolah" value="20" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Contoh: 20">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Hari Libur (Pilih Tanggal Kalender)</label>
                            <input type="date" id="settingHariLibur" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white">
                        </div>
                    </div>
                    <button onclick="saveJamHariSettings()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-2xl shadow">Simpan Pengaturan Waktu</button>
                </div>

                <div id="settingSub-catatan" class="hidden glass-panel p-6 rounded-3xl space-y-4">
                    <h3 class="text-base font-bold text-white">Rekapan Presensi Kehadiran (Siswa & Guru)</h3>
                    <div class="flex flex-wrap gap-3 items-center">
                        <select id="filterCatatanKelas" class="p-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-semibold text-white">
                            <option value="Semua">Semua Kelas</option>
                            <option value="VII-A">VII-A</option>
                            <option value="VII-B">VII-B</option>
                            <option value="VIII-A">VIII-A</option>
                        </select>
                        <input type="month" id="filterCatatanBulan" class="p-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-semibold text-white">
                        <button onclick="renderCatatanPresensi()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl text-xs font-bold shadow">Filter Data</button>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300">
                            <thead class="bg-slate-900 text-slate-400 font-bold uppercase">
                                <tr>
                                    <th class="p-3">Tanggal/Waktu</th>
                                    <th class="p-3">Nama User</th>
                                    <th class="p-3">Role</th>
                                    <th class="p-3">Kelas / NIP</th>
                                    <th class="p-3">Status Kehadiran</th>
                                    <th class="p-3">Bukti Foto / Lampiran</th>
                                    <th class="p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="catatanPresensiTable" class="divide-y divide-slate-800"></tbody>
                        </table>
                    </div>
                </div>

                <div id="settingSub-presensiMapel" class="hidden glass-panel p-6 rounded-3xl space-y-4">
                    <div class="flex items-center justify-between">
                        <h3 class="text-base font-bold text-white">Data Presensi Siswa Mata Pelajaran</h3>
                        <button onclick="downloadPresensiMapelCSV()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-2xl shadow flex items-center space-x-2">
                            <i class="fa-solid fa-file-excel"></i>
                            <span>Download CSV/Excel</span>
                        </button>
                    </div>

                    <div class="flex flex-wrap gap-4 items-center">
                        <div>
                            <label class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Filter Kelas</label>
                            <select id="filterMapelKelas" onchange="renderPresensiMapelAdmin()" class="p-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-semibold text-white">
                                <option value="Semua">Semua Kelas</option>
                                <option value="VII-A">VII-A</option>
                                <option value="VII-B">VII-B</option>
                                <option value="VIII-A">VIII-A</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[10px] uppercase font-bold text-slate-400 mb-1">Filter Mata Pelajaran</label>
                            <select id="filterMapelNama" onchange="renderPresensiMapelAdmin()" class="p-2.5 bg-slate-900 border border-slate-700 rounded-2xl text-xs font-semibold text-white">
                                <option value="Semua">Semua Mapel</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                                <option value="IPA Terpadu">IPA Terpadu</option>
                                <option value="Bahasa Inggris">Bahasa Inggris</option>
                            </select>
                        </div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300">
                            <thead class="bg-slate-900 text-slate-400 font-bold uppercase">
                                <tr>
                                    <th class="p-3">Tanggal & Jam</th>
                                    <th class="p-3">Mata Pelajaran</th>
                                    <th class="p-3">Kelas</th>
                                    <th class="p-3">Guru Pengampu</th>
                                    <th class="p-3">Siswa</th>
                                    <th class="p-3">Status Absen</th>
                                    <th class="p-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody id="presensiMapelAdminTable" class="divide-y divide-slate-800"></tbody>
                        </table>
                    </div>
                </div>

                <div id="settingSub-lokasi" class="hidden glass-panel p-6 rounded-3xl space-y-4">
                    <h3 class="text-base font-bold text-white">Pengaturan Radius Absen Sekolah (Geofencing GPS)</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Radius Yang Ditetapkan (Meter)</label>
                            <input type="number" id="settingRadiusMeter" value="100" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Contoh: 100">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Latitude Pusat Sekolah</label>
                            <input type="text" id="settingLat" value="-0.7893" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white">
                        </div>
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Longitude Pusat Sekolah</label>
                            <input type="text" id="settingLng" value="127.3820" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white">
                        </div>
                    </div>
                    
                    <div id="map" class="mt-4 border border-slate-700 shadow-xl overflow-hidden"></div>
                    <button onclick="saveLocationSettings()" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-2xl shadow">Update Koordinat Radius</button>
                </div>
            </div>

            <div id="adminTab-laporan" class="hidden space-y-6">
                <div class="glass-panel p-6 rounded-3xl">
                    <h3 class="text-base font-bold text-white mb-4">Data Laporan Kejadian & Siswa Bolos</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-xs text-slate-300">
                            <thead class="bg-slate-900 text-slate-400 font-bold uppercase">
                                <tr>
                                    <th class="p-3">Waktu Laporan</th>
                                    <th class="p-3">Pelapor</th>
                                    <th class="p-3">Role Pelapor</th>
                                    <th class="p-3">Kronologi Kejadian</th>
                                    <th class="p-3">Foto Bukti</th>
                                </tr>
                            </thead>
                            <tbody id="laporanAdminTable" class="divide-y divide-slate-800"></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <section id="userDashboardView" class="hidden space-y-8">
            <div class="relative overflow-hidden glass-panel rounded-3xl p-6 sm:p-10 border border-indigo-500/20 shadow-2xl glow-indigo">
                <div class="absolute -right-12 -bottom-12 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div class="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold mb-3">
                            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            <span>Sistem Absensi Online Aktif</span>
                        </div>
                        <h2 class="text-2xl sm:text-4xl font-black tracking-tight text-white">
                            Selamat Datang, <span id="userGreetingName" class="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">Nama User</span>!
                        </h2>
                        <p id="userDateDisplay" class="text-sm sm:text-base text-slate-400 mt-2 font-medium flex items-center">
                            <i class="fa-regular fa-calendar-days mr-2 text-indigo-400"></i> -
                        </p>
                    </div>

                    <div class="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-center md:text-right shadow-inner min-w-[240px]">
                        <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Waktu Server WIT</span>
                        <div class="flex items-baseline justify-center md:justify-end space-x-2">
                            <span id="userRealtimeClock" class="text-4xl sm:text-5xl font-black tracking-widest font-mono text-white">00:00:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
                <div class="glass-panel p-5 rounded-2xl border-l-4 border-slate-500 text-center">
                    <span class="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Jumlah Hari Sekolah</span>
                    <span id="userStatHari" class="text-3xl font-black text-white mt-1 block">20</span>
                </div>
                <div class="glass-panel p-5 rounded-2xl border-l-4 border-emerald-500 bg-emerald-500/5 text-center">
                    <span class="text-[10px] font-extrabold uppercase text-emerald-400 block tracking-wider">Hadir</span>
                    <span id="userStatHadir" class="text-3xl font-black text-emerald-400 mt-1 block">0</span>
                </div>
                <div class="glass-panel p-5 rounded-2xl border-l-4 border-amber-500 bg-amber-500/5 text-center">
                    <span class="text-[10px] font-extrabold uppercase text-amber-400 block tracking-wider">Izin</span>
                    <span id="userStatIzin" class="text-3xl font-black text-amber-400 mt-1 block">0</span>
                </div>
                <div class="glass-panel p-5 rounded-2xl border-l-4 border-rose-500 bg-rose-500/5 text-center">
                    <span class="text-[10px] font-extrabold uppercase text-rose-400 block tracking-wider">Alpa</span>
                    <span id="userStatAlpa" class="text-3xl font-black text-rose-400 mt-1 block">0</span>
                </div>
                <div class="glass-panel p-5 rounded-2xl border-l-4 border-cyan-500 bg-cyan-500/5 text-center col-span-2 sm:col-span-1">
                    <span class="text-[10px] font-extrabold uppercase text-cyan-400 block tracking-wider">Sakit</span>
                    <span id="userStatSakit" class="text-3xl font-black text-cyan-400 mt-1 block">0</span>
                </div>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                <button onclick="openAbsenModal()" class="p-5 bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-emerald-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-camera text-2xl text-emerald-200"></i>
                    </div>
                    <span class="font-extrabold text-xs tracking-wider uppercase">Ambil Absen</span>
                </button>

                <button onclick="openTiketModal()" class="p-5 bg-gradient-to-br from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-amber-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-ticket text-2xl text-amber-200"></i>
                    </div>
                    <span class="font-extrabold text-xs tracking-wider uppercase">Pengajuan Tiket</span>
                </button>

                <button onclick="openRiwayatModal()" class="p-5 bg-gradient-to-br from-indigo-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-indigo-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-clock-rotate-left text-2xl text-indigo-200"></i>
                    </div>
                    <span class="font-extrabold text-xs tracking-wider uppercase">Riwayat Presensi</span>
                </button>

                <button id="btnApproveWalikelas" onclick="openApproveModal()" class="hidden p-5 bg-gradient-to-br from-purple-600 to-fuchsia-700 hover:from-purple-500 hover:to-fuchsia-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-purple-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-file-circle-check text-2xl text-purple-200"></i>
                    </div>
                    <span class="font-extrabold text-xs tracking-wider uppercase">Approve Izin</span>
                </button>

                <button id="btnPresensiMapelGuru" onclick="openPresensiMapelModal()" class="hidden p-5 bg-gradient-to-br from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-cyan-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-list-check text-2xl text-cyan-200"></i>
                    </div>
                    <span class="font-extrabold text-xs tracking-wider uppercase">Presensi Mapel</span>
                </button>

                <button id="btnLaporModal" onclick="openLaporModal()" class="p-5 bg-gradient-to-br from-rose-600 to-pink-700 hover:from-rose-500 hover:to-pink-600 text-white rounded-3xl shadow-xl transition transform hover:-translate-y-1 active:scale-95 flex flex-col items-center justify-center space-y-3 group border border-rose-400/20">
                    <div class="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition shadow-inner">
                        <i class="fa-solid fa-bullhorn text-2xl text-rose-200"></i>
                    </div>
                    <span id="btnLaporModalText" class="font-extrabold text-xs tracking-wider uppercase">Menu Laporan</span>
                </button>
            </div>
        </section>

        <!-- 1. MODAL ABSEN (CAMERA + GEOFENCE DETAIL) -->
        <div id="modalAbsen" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-700 space-y-5 p-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-camera-retro text-emerald-400 mr-2"></i> Presensi Kehadiran Face Cam
                    </h3>
                    <button onclick="closeModal('modalAbsen')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="relative bg-slate-950 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border-2 border-slate-800 shadow-inner group">
                    <video id="webcamVideo" autoplay playsinline class="w-full h-full object-cover"></video>
                    <canvas id="webcamCanvas" class="hidden"></canvas>
                    <img id="capturedImagePreview" class="hidden w-full h-full object-cover">
                    
                    <div class="absolute inset-0 border-2 border-emerald-500/30 rounded-2xl pointer-events-none"></div>
                    <div class="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan pointer-events-none"></div>

                    <div id="cameraOverlayText" class="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-xl text-[10px] text-emerald-400 font-mono font-bold flex items-center space-x-1">
                        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        <span>LIVE FACE DETECT</span>
                    </div>
                </div>

                <div class="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs space-y-2 font-medium">
                    <div class="flex justify-between">
                        <span class="text-slate-400">Tanggal:</span>
                        <span id="absenInfoTanggal" class="font-bold text-white">-</span>
                    </div>
                    <div class="flex justify-between">
                        <span class="text-slate-400">Jam Presensi:</span>
                        <span id="absenInfoJam" class="font-bold text-white">-</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-slate-400">Radius Poin Sekolah:</span>
                        <span id="absenInfoRadius" class="px-2.5 py-1 rounded-lg font-bold text-xs text-emerald-300 bg-emerald-500/20 border border-emerald-500/30">✓ Dalam Radius (25m)</span>
                    </div>
                </div>

                <div class="flex gap-2">
                    <button id="btnCaptureCam" onclick="captureSelfie()" class="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-2xl shadow-lg transition flex items-center justify-center space-x-2">
                        <i class="fa-solid fa-camera"></i>
                        <span>Ambil Foto & Absen Masuk</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- 2. MODAL TIKET -->
        <div id="modalTiket" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-5">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-ticket text-amber-400 mr-2"></i> Pengajuan Tiket Permohonan Izin
                    </h3>
                    <button onclick="closeModal('modalTiket')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="bg-amber-500/5 p-5 rounded-2xl border border-amber-500/20 space-y-3">
                    <h4 class="text-xs font-bold uppercase text-amber-400 tracking-wider">Form Pengajuan Izin</h4>
                    <form id="formTiketIzin" onsubmit="handleTiketSubmission(event)" class="space-y-3">
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 mb-1">Jenis Tiket</label>
                            <select id="tiketJenis" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white"></select>
                        </div>

                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Waktu Awal</label>
                                <input type="date" id="tiketAwal" required class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white">
                            </div>
                            <div>
                                <label class="block text-xs font-semibold text-slate-300 mb-1">Waktu Akhir</label>
                                <input type="date" id="tiketAkhir" required class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white">
                            </div>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-300 mb-1">Keterangan Izin</label>
                            <textarea id="tiketKeterangan" required rows="2" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500" placeholder="Alasan berhalangan hadir..."></textarea>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-300 mb-1">Lampiran Foto Bukti</label>
                            <div class="flex items-center space-x-3 mb-2">
                                <button type="button" onclick="startAttachmentCamera('tiketCamContainer', 'tiketVideo', 'tiketPhotoContainer', 'tiketPhotoPreview', 'tiketPhotoStatus')" class="px-3.5 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 text-xs font-bold rounded-xl flex items-center space-x-2 transition">
                                    <i class="fa-solid fa-camera"></i> <span>Buka Kamera Foto</span>
                                </button>
                                <span id="tiketPhotoStatus" class="text-[10px] text-slate-400">Belum ada foto</span>
                            </div>

                            <div id="tiketCamContainer" class="hidden relative bg-slate-950 rounded-2xl overflow-hidden aspect-video border-2 border-amber-500/40 mb-3 group shadow-inner">
                                <video id="tiketVideo" autoplay playsinline class="w-full h-full object-cover"></video>
                                <canvas id="tiketCanvas" class="hidden"></canvas>
                                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-20">
                                    <button type="button" onclick="snapAttachmentPhoto('tiketVideo', 'tiketCanvas', 'tiketCamContainer', 'tiketPhotoContainer', 'tiketPhotoPreview', 'tiketPhotoStatus')" class="flex-1 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center space-x-2">
                                        <i class="fa-solid fa-circle-dot text-sm animate-pulse"></i> <span>Jepret Foto Lampiran</span>
                                    </button>
                                    <button type="button" onclick="closeAttachmentCamera('tiketCamContainer', 'tiketVideo')" class="px-3 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl transition">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>

                            <div id="tiketPhotoContainer" class="hidden mt-2">
                                <img id="tiketPhotoPreview" class="w-24 h-24 object-cover rounded-xl border border-slate-700 shadow-md">
                            </div>
                        </div>

                        <button type="submit" class="w-full py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs rounded-xl shadow-lg transition">
                            Ajukan Permohonan Tiket
                        </button>
                    </form>
                </div>

                <div>
                    <h4 class="text-xs font-bold uppercase text-slate-400 mb-3">Riwayat Pengajuan Tiket Anda</h4>
                    <div id="userTicketsList" class="space-y-2"></div>
                </div>
            </div>
        </div>

        <!-- 3. MODAL RIWAYAT -->
        <div id="modalRiwayat" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl p-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-clock-rotate-left text-indigo-400 mr-2"></i> Riwayat Kehadiran Terekam
                    </h3>
                    <button onclick="closeModal('modalRiwayat')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="flex flex-wrap gap-2 mb-4">
                    <input type="date" id="filterRiwayatTanggal" class="p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white">
                    <button onclick="filterRiwayatUser()" class="px-4 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-xl">Cari Data</button>
                    <button onclick="resetFilterRiwayatUser()" class="px-4 py-2.5 bg-slate-800 text-slate-300 text-xs font-bold rounded-xl">Reset</button>
                </div>

                <div class="flex-1 overflow-y-auto">
                    <table class="w-full text-left text-xs text-slate-300">
                        <thead class="bg-slate-900 text-slate-400 font-bold sticky top-0">
                            <tr>
                                <th class="p-3">Tanggal/Jam</th>
                                <th class="p-3">Status</th>
                                <th class="p-3">Bukti Selfie</th>
                            </tr>
                        </thead>
                        <tbody id="userRiwayatTable" class="divide-y divide-slate-800"></tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 4. MODAL APPROVE -->
        <div id="modalApprove" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl p-6">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-file-circle-check text-purple-400 mr-2"></i> Approve Permohonan Izin Siswa Kelas
                    </h3>
                    <button onclick="closeModal('modalApprove')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="flex-1 overflow-y-auto">
                    <table class="w-full text-left text-xs text-slate-300">
                        <thead class="bg-slate-900 text-slate-400 font-bold sticky top-0">
                            <tr>
                                <th class="p-3">Siswa</th>
                                <th class="p-3">Jenis & Periode</th>
                                <th class="p-3">Keterangan</th>
                                <th class="p-3">Bukti Foto</th>
                                <th class="p-3 text-center">Aksi Walikelas</th>
                            </tr>
                        </thead>
                        <tbody id="approveWalikelasTable" class="divide-y divide-slate-800"></tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 5. MODAL PRESENSI MAPEL -->
        <div id="modalPresensiMapel" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl p-6 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-list-check text-cyan-400 mr-2"></i> Input Presensi Siswa Per Mata Pelajaran
                    </h3>
                    <button onclick="closeModal('modalPresensiMapel')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800">
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Mata Pelajaran</label>
                        <input type="text" id="presensiMapelNama" value="Matematika" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white">
                    </div>
                    <div>
                        <label class="block text-[10px] font-bold text-slate-400 uppercase mb-1">Pilih Kelas</label>
                        <select id="presensiMapelKelas" onchange="renderPresensiMapelStudentList()" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs font-semibold text-white">
                            <option value="VII-A">VII-A</option>
                            <option value="VII-B">VII-B</option>
                            <option value="VIII-A">VIII-A</option>
                        </select>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto">
                    <table class="w-full text-left text-xs text-slate-300">
                        <thead class="bg-slate-900 text-slate-400 font-bold sticky top-0">
                            <tr>
                                <th class="p-3">NIS</th>
                                <th class="p-3">Nama Siswa</th>
                                <th class="p-3">Status Realtime Walikelas</th>
                                <th class="p-3">Status Absen Mapel</th>
                            </tr>
                        </thead>
                        <tbody id="presensiMapelStudentTable" class="divide-y divide-slate-800"></tbody>
                    </table>
                </div>

                <div class="pt-3 border-t border-slate-800 flex justify-end">
                    <button onclick="savePresensiMapel()" class="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg">
                        Simpan Presensi Mapel Realtime
                    </button>
                </div>
            </div>
        </div>

        <!-- 6. MODAL LAPOR -->
        <div id="modalLapor" class="hidden fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
            <div class="glass-panel rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-4">
                <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 class="text-base font-bold text-white flex items-center">
                        <i class="fa-solid fa-bullhorn text-rose-400 mr-2"></i> Menu Laporan Kejadian & Siswa Bolos
                    </h3>
                    <button onclick="closeModal('modalLapor')" class="text-slate-400 hover:text-white p-1"><i class="fa-solid fa-xmark text-xl"></i></button>
                </div>

                <div class="flex border-b border-slate-800 gap-2">
                    <button onclick="switchLaporSubtab('daftar')" id="laporSubtabBtn-daftar" class="laporSubtabBtn px-4 py-2 border-b-2 border-rose-500 font-bold text-xs text-rose-400">Data Laporan</button>
                    <button onclick="switchLaporSubtab('form')" id="laporSubtabBtn-form" class="laporSubtabBtn px-4 py-2 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white">+ Buat Laporan Baru</button>
                </div>

                <div id="laporSection-daftar" class="space-y-3">
                    <div id="reportsListContainer" class="space-y-3 max-h-[50vh] overflow-y-auto"></div>
                </div>

                <div id="laporSection-form" class="hidden space-y-3">
                    <form id="formPelaporan" onsubmit="handleReportSubmission(event)" class="space-y-3">
                        <div>
                            <label class="block text-xs font-semibold text-slate-300 mb-1">Kronologi Kejadian</label>
                            <textarea id="laporKronologi" required rows="3" class="w-full p-2.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500" placeholder="Ceritakan kronologi kejadian secara mendetail..."></textarea>
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-300 mb-1">Dokumentasi Foto Kejadian</label>
                            <div class="flex items-center space-x-3 mb-2">
                                <button type="button" onclick="startAttachmentCamera('laporCamContainer', 'laporVideo', 'laporPhotoContainer', 'laporPhotoPreview', 'laporPhotoStatus')" class="px-3.5 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-bold rounded-xl flex items-center space-x-2 transition">
                                    <i class="fa-solid fa-camera"></i> <span>Aktifkan Kamera Lapangan</span>
                                </button>
                                <span id="laporPhotoStatus" class="text-[10px] text-slate-400">Foto belum diambil</span>
                            </div>

                            <div id="laporCamContainer" class="hidden relative bg-slate-950 rounded-2xl overflow-hidden aspect-video border-2 border-rose-500/40 mb-3 group shadow-inner">
                                <video id="laporVideo" autoplay playsinline class="w-full h-full object-cover"></video>
                                <canvas id="laporCanvas" class="hidden"></canvas>
                                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-20">
                                    <button type="button" onclick="snapAttachmentPhoto('laporVideo', 'laporCanvas', 'laporCamContainer', 'laporPhotoContainer', 'laporPhotoPreview', 'laporPhotoStatus')" class="flex-1 py-2.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xs rounded-xl shadow-lg transition flex items-center justify-center space-x-2">
                                        <i class="fa-solid fa-circle-dot text-sm animate-pulse"></i> <span>Jepret Foto Kejadian</span>
                                    </button>
                                    <button type="button" onclick="closeAttachmentCamera('laporCamContainer', 'laporVideo')" class="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </div>

                            <div id="laporPhotoContainer" class="hidden mt-2">
                                <img id="laporPhotoPreview" class="w-full h-32 object-cover rounded-xl border border-slate-700 shadow-md">
                            </div>
                        </div>

                        <button type="submit" class="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs rounded-xl shadow-lg transition">
                            Kirim Laporan Ke Guru & Admin
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </main>

    <footer class="glass-panel border-t border-slate-800/80 py-4 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
            &copy; 2026 SPENSA Presensi Digital &bull; IT Engineering Professional Architecture
        </div>
    </footer>
</div>

<script>
/**
 * Global App State & Database Initialization
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

let usersDB = [];
let attendanceDB = [];
let ticketsDB = [];
let mapelDB = [];
let incidentsDB = [];
let settingsDB = {
    jamMasuk: '07:15',
    jamPulang: '14:00',
    jumlahHariSekolah: 20,
    radiusMeter: 100,
    lat: -0.7893,
    lng: 127.3820
};
let currentUser = null;
let activeMediaStream = null;
let attachmentMediaStream = null;
let leafletMap = null;
let leafletMarker = null;
let leafletCircle = null;

/* Initial Seed Data */
function seedInitialData() {
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const seedUsers = [
            {
                id: 'admin-001',
                nama: 'Administrator Utama',
                username: 'Gacor',
                password: 'spensahalsel',
                role: 'Admin',
                foto: 'https://placehold.co/100x100/6366f1/ffffff?text=ADM'
            },
            {
                id: 'usr-siswa-1001',
                nama: 'Ahmad Fauzi',
                username: '1001',
                password: '1001',
                role: 'Siswa',
                nis: '1001',
                kelas: 'VII-A',
                walikelas: 'Drs. Ahmad Dahlan, M.Pd',
                foto: 'https://placehold.co/100x100/3b82f6/ffffff?text=AF'
            },
            {
                id: 'usr-guru-1985',
                nama: 'Drs. Ahmad Dahlan, M.Pd',
                username: '19850101',
                password: '19850101',
                role: 'Guru',
                nip: '19850101',
                isWalikelas: true,
                kelasWalikelas: 'VII-A',
                foto: 'https://placehold.co/100x100/10b981/ffffff?text=AD'
            },
            {
                id: 'usr-tendik-01',
                nama: 'Budi Santoso',
                username: 'Tendik',
                password: 'tendik123',
                role: 'Tendik',
                jabatan: 'Staf TU',
                foto: 'https://placehold.co/100x100/f59e0b/ffffff?text=BS'
            }
        ];
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(seedUsers));
    }

    if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsDB));
    }

    usersDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
    attendanceDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.ATTENDANCE)) || [];
    ticketsDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.TICKETS)) || [];
    mapelDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.MAPEL_ATTENDANCE)) || [];
    incidentsDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.INCIDENTS)) || [];
    settingsDB = JSON.parse(localStorage.getItem(STORAGE_KEYS.SETTINGS)) || settingsDB;
}

/* UI Notification Toast & Helper Functions */
function showToast(message, type = 'info') {
    const toast = document.getElementById('notificationToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = document.getElementById('toastIcon');

    if (!toast || !toastTitle || !toastMessage || !toastIcon) return;

    toastMessage.textContent = message;

    if (type === 'success') {
        toastTitle.textContent = 'Berhasil';
        toastIcon.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
        toast.className = 'fixed top-5 right-5 z-50 transform transition-all duration-300 max-w-md w-full glass-panel border-l-4 border-emerald-500 shadow-2xl rounded-r-2xl p-4 flex items-center space-x-3 translate-x-0 opacity-100';
    } else if (type === 'error') {
        toastTitle.textContent = 'Gagal / Peringatan';
        toastIcon.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-400"></i>';
        toast.className = 'fixed top-5 right-5 z-50 transform transition-all duration-300 max-w-md w-full glass-panel border-l-4 border-rose-500 shadow-2xl rounded-r-2xl p-4 flex items-center space-x-3 translate-x-0 opacity-100';
    } else {
        toastTitle.textContent = 'Informasi';
        toastIcon.innerHTML = '<i class="fa-solid fa-circle-info text-indigo-400"></i>';
        toast.className = 'fixed top-5 right-5 z-50 transform transition-all duration-300 max-w-md w-full glass-panel border-l-4 border-indigo-500 shadow-2xl rounded-r-2xl p-4 flex items-center space-x-3 translate-x-0 opacity-100';
    }

    setTimeout(() => {
        toast.className = 'fixed top-5 right-5 z-50 transform transition-all duration-300 translate-x-full opacity-0 max-w-md w-full glass-panel border-l-4 shadow-2xl rounded-r-2xl p-4 flex items-center space-x-3 pointer-events-none';
    }, 3500);
}

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        icon.className = 'fa-solid fa-moon text-lg group-hover:rotate-45 transition transform duration-300';
    } else {
        icon.className = 'fa-solid fa-sun text-lg group-hover:rotate-45 transition transform duration-300';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
    stopWebcam();
    if (attachmentMediaStream) {
        attachmentMediaStream.getTracks().forEach(t => t.stop());
        attachmentMediaStream = null;
    }
}

function startAttachmentCamera(containerId, videoId, previewContainerId, previewImgId, statusId) {
    const container = document.getElementById(containerId);
    const video = document.getElementById(videoId);
    if (!container || !video) return;

    container.classList.remove('hidden');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
            .then(stream => {
                attachmentMediaStream = stream;
                video.srcObject = stream;
            })
            .catch(err => {
                showToast('Gagal membuka kamera lampiran.', 'error');
            });
    }
}

function snapAttachmentPhoto(videoId, canvasId, containerId, previewContainerId, previewImgId, statusId) {
    const video = document.getElementById(videoId);
    const canvas = document.getElementById(canvasId);
    const previewContainer = document.getElementById(previewContainerId);
    const previewImg = document.getElementById(previewImgId);
    const statusElem = document.getElementById(statusId);

    if (!video || !canvas) return;

    canvas.width = 640;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 640, 480);

    const imgData = canvas.toDataURL('image/png');
    if (previewImg) previewImg.src = imgData;
    if (previewContainer) previewContainer.classList.remove('hidden');
    if (statusElem) statusElem.textContent = 'Foto berhasil diambil ✓';

    closeAttachmentCamera(containerId, videoId);
}

function closeAttachmentCamera(containerId, videoId) {
    const container = document.getElementById(containerId);
    if (container) container.classList.add('hidden');
    if (attachmentMediaStream) {
        attachmentMediaStream.getTracks().forEach(t => t.stop());
        attachmentMediaStream = null;
    }
}

/* Initialization on window load */
window.onload = function() {
    seedInitialData();
    updateClock();
    setInterval(updateClock, 1000);

    const savedSession = localStorage.getItem(STORAGE_KEYS.SESSION);
    if (savedSession) {
        currentUser = JSON.parse(savedSession);
        setupUserSessionUI();
    } else {
        switchView('loginSection');
    }

    renderRegForm();
    renderRegisteredUsersTable();
    updateAdminDashboardStats();
    initMap();
};

/* Realtime Clock & Date Display */
function updateClock() {
    const now = new Date();
    const clockElem = document.getElementById('userRealtimeClock');
    const dateElem = document.getElementById('userDateDisplay');

    if (clockElem) {
        clockElem.textContent = now.toLocaleTimeString('id-ID', { hour12: false });
    }

    if (dateElem) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateElem.innerHTML = `<i class="fa-regular fa-calendar-days mr-2 text-indigo-400"></i> ${now.toLocaleDateString('id-ID', options)}`;
    }
}

/* Auth Functions */
function handleLogin(event) {
    event.preventDefault();
    const idInput = document.getElementById('loginUsername').value.trim();
    const passInput = document.getElementById('loginPassword').value.trim();

    let matchedUser = null;

    if (idInput === 'Gacor' && passInput === 'spensahalsel') {
        matchedUser = {
            id: 'admin-001',
            nama: 'Administrator Utama',
            username: 'Gacor',
            role: 'Admin',
            foto: 'https://placehold.co/100x100/6366f1/ffffff?text=ADM'
        };
    } else {
        matchedUser = usersDB.find(u => {
            const matchUser = u.username === idInput;
            const matchNIS = u.nis && u.nis === idInput;
            const matchNIP = u.nip && u.nip === idInput;
            return (matchUser || matchNIS || matchNIP) && u.password === passInput;
        });
    }

    if (matchedUser) {
        currentUser = matchedUser;
        localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(currentUser));
        document.getElementById('loginForm').reset();
        setupUserSessionUI();
        showToast(`Selamat datang, ${currentUser.nama}!`, 'success');
    } else {
        showToast('Username / Password tidak valid!', 'error');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    document.getElementById('userInfoHeader').classList.add('hidden');
    switchView('loginSection');
    showToast('Anda telah keluar dari sistem.', 'info');
}

function setupUserSessionUI() {
    if (!currentUser) return;

    document.getElementById('userInfoHeader').classList.remove('hidden');
    document.getElementById('headerUserName').textContent = currentUser.nama;
    document.getElementById('headerUserRole').textContent = currentUser.role;
    document.getElementById('headerUserAvatar').src = currentUser.foto || 'https://placehold.co/100x100/3b82f6/ffffff?text=U';

    if (currentUser.role === 'Admin') {
        switchView('adminView');
        switchAdminTab('dashboard');
        updateAdminDashboardStats();
    } else {
        switchView('userDashboardView');
        document.getElementById('userGreetingName').textContent = currentUser.nama;
        document.getElementById('userStatHari').textContent = settingsDB.jumlahHariSekolah || 20;

        // Role-Specific Action Buttons Setup
        const btnApprove = document.getElementById('btnApproveWalikelas');
        const btnMapel = document.getElementById('btnPresensiMapelGuru');
        const btnLapor = document.getElementById('btnLaporModal');

        if (currentUser.role === 'Guru') {
            btnMapel.classList.remove('hidden');
            btnLapor.classList.remove('hidden');
            if (currentUser.isWalikelas) {
                btnApprove.classList.remove('hidden');
            } else {
                btnApprove.classList.add('hidden');
            }
        } else if (currentUser.role === 'Siswa') {
            btnApprove.classList.add('hidden');
            btnMapel.classList.add('hidden');
            btnLapor.classList.remove('hidden');
        } else if (currentUser.role === 'Tendik') {
            btnApprove.classList.add('hidden');
            btnMapel.classList.add('hidden');
            btnLapor.classList.add('hidden'); // Tendik -> Hide Lapor button
        }

        updateUserStats();
    }
}

function switchView(viewId) {
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('adminView').classList.add('hidden');
    document.getElementById('userDashboardView').classList.add('hidden');
    document.getElementById(viewId).classList.remove('hidden');
}

/* Admin Dashboard Stats Calculation */
function updateAdminDashboardStats() {
    const totalSiswa = usersDB.filter(u => u.role === 'Siswa').length;
    const totalGuru = usersDB.filter(u => u.role === 'Guru').length;

    // Calculate unique classes registered
    const classSet = new Set();
    usersDB.forEach(u => {
        if (u.role === 'Siswa' && u.kelas && u.kelas !== '-') classSet.add(u.kelas);
        if (u.role === 'Guru' && u.isWalikelas && u.kelasWalikelas) classSet.add(u.kelasWalikelas);
    });
    const totalKelas = classSet.size || 12;

    document.getElementById('statTotalSiswa').textContent = totalSiswa;
    document.getElementById('statTotalGuru').textContent = totalGuru;
    document.getElementById('statTotalKelas').textContent = totalKelas;
    document.getElementById('statKelasKBM').textContent = Math.max(0, totalKelas - 2);
    document.getElementById('statKelasNonKBM').textContent = 2;

    // Attendance stats
    const today = new Date().toISOString().split('T')[0];
    const todayAtt = attendanceDB.filter(a => a.tanggal === today);

    const hadirSiswa = todayAtt.filter(a => a.role === 'Siswa' && a.status === 'Hadir').length;
    const hadirGuru = todayAtt.filter(a => a.role === 'Guru' && a.status === 'Hadir').length;

    document.getElementById('statHadirSiswa').textContent = hadirSiswa;
    document.getElementById('statHadirGuru').textContent = hadirGuru;
    document.getElementById('statSelisihSiswa').textContent = Math.max(0, totalSiswa - hadirSiswa);
    document.getElementById('statSelisihGuru').textContent = Math.max(0, totalGuru - hadirGuru);
}

/* Admin Subtabs Navigation */
function switchAdminTab(tabName) {
    const tabs = ['dashboard', 'registrasi', 'pengaturan', 'laporan'];
    tabs.forEach(t => {
        document.getElementById(`adminTab-${t}`).classList.add('hidden');
        const btn = document.getElementById(`tabBtn-${t}`);
        if (btn) {
            btn.className = "adminTabBtn px-5 py-3 rounded-xl font-bold text-xs text-slate-400 hover:text-white hover:bg-slate-800/60 transition flex items-center space-x-2";
        }
    });

    document.getElementById(`adminTab-${tabName}`).classList.remove('hidden');
    const activeBtn = document.getElementById(`tabBtn-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "adminTabBtn px-5 py-3 rounded-xl font-bold text-xs transition flex items-center space-x-2 bg-indigo-600 text-white shadow-md";
    }

    if (tabName === 'pengaturan') switchSettingsSubtab('jamHari');
    if (tabName === 'laporan') renderReportsAdmin();
}

/* Registration Form Logic */
function renderRegForm() {
    const role = document.getElementById('regRoleSelect').value;
    const container = document.getElementById('regFormContainer');

    if (role === 'Siswa') {
        container.innerHTML = `
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-400 mb-1">Foto Profile Siswa</label>
                    <input type="file" id="regFoto" accept="image/*" class="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-500/20 file:text-indigo-300 hover:file:bg-indigo-500/30">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap Siswa</label>
                        <input type="text" id="regNama" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Nama Lengkap">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">NIS (Nomor Induk Siswa)</label>
                        <input type="text" id="regNIS" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="NIS">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Tempat, Tanggal Lahir</label>
                        <input type="text" id="regTTL" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Ternate, 12 Mei 2010">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Alamat Tempat Tinggal</label>
                        <input type="text" id="regAlamat" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Alamat Lengkap">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Kelas (Input Bebas)</label>
                        <input type="text" id="regKelas" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Contoh: VII-A, VIII-B, IX-C">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Nama Walikelas</label>
                        <input type="text" id="regWalikelas" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Drs. Ahmad Dahlan, M.Pd">
                    </div>
                </div>
            </div>
        `;
    } else if (role === 'Guru') {
        container.innerHTML = `
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-400 mb-1">Foto Profile Guru</label>
                    <input type="file" id="regFoto" accept="image/*" class="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-500/20 file:text-indigo-300 hover:file:bg-indigo-500/30">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap Guru (dengan Gelar)</label>
                        <input type="text" id="regNama" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Nama Guru">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">NIP Guru</label>
                        <input type="text" id="regNIP" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="NIP Guru">
                    </div>
                </div>
                <div class="p-4 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-3">
                    <div class="flex items-center space-x-3">
                        <input type="checkbox" id="regIsWalikelas" onchange="document.getElementById('regKelasWaliContainer').classList.toggle('hidden')" class="w-4 h-4 text-indigo-600 bg-slate-800 border-slate-700 rounded">
                        <label for="regIsWalikelas" class="text-xs font-bold text-indigo-300">Aktifkan Sebagai Guru Walikelas</label>
                    </div>
                    <div id="regKelasWaliContainer" class="hidden">
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Walikelas Untuk Kelas Mana?</label>
                        <input type="text" id="regKelasWalikelas" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Contoh: VII-A">
                    </div>
                </div>
            </div>
        `;
    } else if (role === 'Tendik') {
        container.innerHTML = `
            <div class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-400 mb-1">Foto Profile Tendik</label>
                    <input type="file" id="regFoto" accept="image/*" class="w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-indigo-500/20 file:text-indigo-300 hover:file:bg-indigo-500/30">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Nama Lengkap Pegawai</label>
                        <input type="text" id="regNama" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Nama Tendik">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Jabatan / Unit Kerja</label>
                        <input type="text" id="regJabatan" class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Staf TU / Perpustakaan">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Username Login</label>
                        <input type="text" id="regUsername" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Username">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Password Login</label>
                        <input type="password" id="regPassword" required class="w-full p-3 bg-slate-900 border border-slate-700 rounded-2xl text-sm text-white" placeholder="Password">
                    </div>
                </div>
            </div>
        `;
    }
}

function handleUserRegistration(event) {
    event.preventDefault();
    const role = document.getElementById('regRoleSelect').value;
    const fileInput = document.getElementById('regFoto');
    let fotoUrl = `https://placehold.co/100x100/6366f1/ffffff?text=${encodeURIComponent(role)}`;

    const processSave = (photoData) => {
        const newUser = {
            id: 'usr-' + Date.now(),
            role,
            nama: document.getElementById('regNama').value.trim(),
            foto: photoData || fotoUrl
        };

        if (role === 'Siswa') {
            const nis = document.getElementById('regNIS').value.trim();
            newUser.username = nis;
            newUser.password = nis;
            newUser.nis = nis;
            newUser.ttl = document.getElementById('regTTL').value || '-';
            newUser.alamat = document.getElementById('regAlamat').value || '-';
            newUser.kelas = document.getElementById('regKelas').value || '-';
            newUser.walikelas = document.getElementById('regWalikelas').value || '-';
        } else if (role === 'Guru') {
            const nip = document.getElementById('regNIP').value.trim();
            newUser.username = nip;
            newUser.password = nip;
            newUser.nip = nip;
            newUser.isWalikelas = document.getElementById('regIsWalikelas').checked;
            newUser.kelasWalikelas = newUser.isWalikelas ? (document.getElementById('regKelasWalikelas').value || '-') : '-';
        } else if (role === 'Tendik') {
            newUser.username = document.getElementById('regUsername').value.trim();
            newUser.password = document.getElementById('regPassword').value.trim();
            newUser.jabatan = document.getElementById('regJabatan').value || 'Tenaga Kependidikan';
        }

        usersDB.push(newUser);
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(usersDB));
        renderRegisteredUsersTable();
        updateAdminDashboardStats();
        document.getElementById('regForm').reset();
        showToast(`Akun ${role} (${newUser.nama}) berhasil didaftarkan!`, 'success');
    };

    if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => processSave(e.target.result);
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        processSave(fotoUrl);
    }
}

function renderRegisteredUsersTable() {
    const tbody = document.getElementById('registeredUsersTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    usersDB.forEach(u => {
        let detail = '-';
        if (u.role === 'Siswa') detail = `Kelas: ${u.kelas} | Wali: ${u.walikelas}`;
        else if (u.role === 'Guru') detail = u.isWalikelas ? `Walikelas: ${u.kelasWalikelas}` : 'Guru Mapel';
        else if (u.role === 'Tendik') detail = `Jabatan: ${u.jabatan || '-'}`;

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3.5"><img src="${u.foto}" class="w-9 h-9 rounded-xl object-cover border border-slate-700"></td>
            <td class="p-3.5 font-bold text-white">${u.nama}</td>
            <td class="p-3.5"><span class="px-2 py-0.5 text-[10px] uppercase font-bold rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">${u.role}</span></td>
            <td class="p-3.5 font-mono text-slate-300">${u.username || u.nis || u.nip}</td>
            <td class="p-3.5 text-slate-400 text-[11px]">${detail}</td>
            <td class="p-3.5 text-center">
                <button onclick="deleteUser('${u.id}')" class="p-1.5 text-rose-400 hover:text-rose-300 hover:bg-rose-500/20 rounded-lg transition" title="Hapus User"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deleteUser(id) {
    usersDB = usersDB.filter(u => u.id !== id);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(usersDB));
    renderRegisteredUsersTable();
    updateAdminDashboardStats();
    showToast('Data user berhasil dihapus!', 'info');
}

/* Settings Subtabs Logic */
function switchSettingsSubtab(subName) {
    const subs = ['jamHari', 'catatan', 'presensiMapel', 'lokasi'];
    subs.forEach(s => {
        document.getElementById(`settingSub-${s}`).classList.add('hidden');
        const btn = document.getElementById(`subtabBtn-${s}`);
        if (btn) btn.className = "settingSubTabBtn px-5 py-2.5 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white";
    });

    document.getElementById(`settingSub-${subName}`).classList.remove('hidden');
    const activeBtn = document.getElementById(`subtabBtn-${subName}`);
    if (activeBtn) activeBtn.className = "settingSubTabBtn px-5 py-2.5 border-b-2 border-indigo-500 font-bold text-xs text-indigo-400";

    if (subName === 'catatan') renderCatatanPresensi();
    if (subName === 'presensiMapel') renderPresensiMapelAdmin();
    if (subName === 'lokasi' && leafletMap) setTimeout(() => leafletMap.invalidateSize(), 300);
}

function saveJamHariSettings() {
    settingsDB.jamMasuk = document.getElementById('settingJamMasuk').value;
    settingsDB.jamPulang = document.getElementById('settingJamPulang').value;
    settingsDB.jumlahHariSekolah = parseInt(document.getElementById('settingJumlahHariSekolah').value) || 20;
    
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsDB));
    showToast('Pengaturan jam & jumlah hari sekolah berhasil disimpan!', 'success');
}

function renderCatatanPresensi() {
    const tbody = document.getElementById('catatanPresensiTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    attendanceDB.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-mono">${item.tanggal} ${item.jam}</td>
            <td class="p-3 font-bold text-white">${item.userName}</td>
            <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-slate-800 text-slate-300 border border-slate-700">${item.role}</span></td>
            <td class="p-3 text-slate-400">${item.kelas || '-'}</td>
            <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${item.status}</span></td>
            <td class="p-3"><img src="${item.foto}" class="w-10 h-10 object-cover rounded-xl border border-slate-700"></td>
            <td class="p-3 text-center flex items-center justify-center space-x-2">
                <select onchange="savePresensiStatus('${item.id}', this)" class="p-1 bg-slate-900 border border-slate-700 rounded text-[11px] text-white">
                    <option value="Hadir" ${item.status === 'Hadir' ? 'selected' : ''}>Setujui</option>
                    <option value="Ditolak" ${item.status === 'Ditolak' ? 'selected' : ''}>Tidak</option>
                </select>
                <button onclick="deleteCatatanPresensi('${item.id}')" class="p-1.5 text-rose-400 hover:text-rose-300 rounded"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function savePresensiStatus(id, selectElem) {
    const idx = attendanceDB.findIndex(a => a.id === id);
    if (idx !== -1) {
        attendanceDB[idx].status = selectElem.value;
        localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDB));
        showToast('Status presensi diperbarui!', 'success');
    }
}

function deleteCatatanPresensi(id) {
    attendanceDB = attendanceDB.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDB));
    renderCatatanPresensi();
    showToast('Catatan presensi dihapus!', 'info');
}

function renderPresensiMapelAdmin() {
    const tbody = document.getElementById('presensiMapelAdminTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    mapelDB.forEach(m => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-mono">${m.waktu}</td>
            <td class="p-3 font-bold text-white">${m.mapel}</td>
            <td class="p-3 text-slate-300">${m.kelas}</td>
            <td class="p-3 text-indigo-300">${m.guruName}</td>
            <td class="p-3 font-medium text-white">${m.siswaName}</td>
            <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">${m.status}</span></td>
            <td class="p-3 text-center">
                <button onclick="deletePresensiMapel('${m.id}')" class="p-1.5 text-rose-400 hover:text-rose-300"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function deletePresensiMapel(id) {
    mapelDB = mapelDB.filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEYS.MAPEL_ATTENDANCE, JSON.stringify(mapelDB));
    renderPresensiMapelAdmin();
    showToast('Data presensi mapel dihapus!', 'info');
}

function downloadPresensiMapelCSV() {
    if (!mapelDB.length) {
        showToast('Tidak ada data presensi mapel untuk diunduh.', 'error');
        return;
    }
    let csv = "Waktu,Mata Pelajaran,Kelas,Guru Pengampu,Nama Siswa,Status\n";
    mapelDB.forEach(m => {
        csv += `"${m.waktu}","${m.mapel}","${m.kelas}","${m.guruName}","${m.siswaName}","${m.status}"\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Rekap_Presensi_Mapel_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    showToast('File CSV berhasil diunduh!', 'success');
}

/* Leaflet Geofence Map */
function initMap() {
    const mapElem = document.getElementById('map');
    if (!mapElem) return;

    leafletMap = L.map('map').setView([settingsDB.lat, settingsDB.lng], 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(leafletMap);

    leafletMarker = L.marker([settingsDB.lat, settingsDB.lng]).addTo(leafletMap)
        .bindPopup('<b>Pusat Lokasi Sekolah</b>').openPopup();

    leafletCircle = L.circle([settingsDB.lat, settingsDB.lng], {
        color: '#6366f1',
        fillColor: '#818cf8',
        fillOpacity: 0.25,
        radius: settingsDB.radiusMeter
    }).addTo(leafletMap);
}

function saveLocationSettings() {
    const lat = parseFloat(document.getElementById('settingLat').value) || settingsDB.lat;
    const lng = parseFloat(document.getElementById('settingLng').value) || settingsDB.lng;
    const rad = parseInt(document.getElementById('settingRadiusMeter').value) || 100;

    settingsDB.lat = lat;
    settingsDB.lng = lng;
    settingsDB.radiusMeter = rad;

    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settingsDB));

    if (leafletMap && leafletMarker && leafletCircle) {
        leafletMap.setView([lat, lng], 16);
        leafletMarker.setLatLng([lat, lng]);
        leafletCircle.setLatLng([lat, lng]);
        leafletCircle.setRadius(rad);
    }

    showToast('Koordinat radius & geofence berhasil diperbarui!', 'success');
}

/* User Dashboard Modals & Actions */
function updateUserStats() {
    if (!currentUser) return;
    const userAtt = attendanceDB.filter(a => a.userId === currentUser.id);

    const hadir = userAtt.filter(a => a.status === 'Hadir').length;
    const izin = userAtt.filter(a => a.status === 'Izin').length;
    const sakit = userAtt.filter(a => a.status === 'Sakit').length;
    const alpa = userAtt.filter(a => a.status === 'Alpa').length;

    document.getElementById('userStatHadir').textContent = hadir;
    document.getElementById('userStatIzin').textContent = izin;
    document.getElementById('userStatSakit').textContent = sakit;
    document.getElementById('userStatAlpa').textContent = alpa;
}

function openAbsenModal() {
    document.getElementById('modalAbsen').classList.remove('hidden');
    const now = new Date();
    document.getElementById('absenInfoTanggal').textContent = now.toLocaleDateString('id-ID');
    document.getElementById('absenInfoJam').textContent = now.toLocaleTimeString('id-ID');

    startWebcam();
}

function startWebcam() {
    const video = document.getElementById('webcamVideo');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                activeMediaStream = stream;
                video.srcObject = stream;
            })
            .catch(err => {
                showToast('Gagal mengakses kamera.', 'error');
            });
    }
}

function stopWebcam() {
    if (activeMediaStream) {
        activeMediaStream.getTracks().forEach(t => t.stop());
        activeMediaStream = null;
    }
}

function captureSelfie() {
    const video = document.getElementById('webcamVideo');
    const canvas = document.getElementById('webcamCanvas');
    canvas.width = 320;
    canvas.height = 240;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, 320, 240);

    const selfieBase64 = canvas.toDataURL('image/png');

    const now = new Date();
    const newEntry = {
        id: 'att-' + Date.now(),
        userId: currentUser.id,
        userName: currentUser.nama,
        role: currentUser.role,
        kelas: currentUser.kelas || currentUser.kelasWalikelas || '-',
        tanggal: now.toISOString().split('T')[0],
        jam: now.toLocaleTimeString('id-ID'),
        status: 'Hadir',
        foto: selfieBase64
    };

    attendanceDB.push(newEntry);
    localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDB));

    // Update avatar in top right header
    currentUser.foto = selfieBase64;
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(currentUser));
    document.getElementById('headerUserAvatar').src = selfieBase64;

    closeModal('modalAbsen');
    updateUserStats();
    showToast('Presensi berhasil dicatat & foto avatar diperbarui!', 'success');
}

/* Ticket Modal Logic */
function openTiketModal() {
    document.getElementById('modalTiket').classList.remove('hidden');
    const select = document.getElementById('tiketJenis');
    select.innerHTML = '';

    if (currentUser.role === 'Siswa') {
        select.innerHTML = `<option value="Izin">Izin</option><option value="Sakit">Sakit</option>`;
    } else {
        select.innerHTML = `<option value="Izin">Izin</option><option value="Sakit">Sakit</option><option value="Tugas">Tugas Luar / Dinas</option>`;
    }

    renderUserTicketsList();
}

function handleTiketSubmission(event) {
    event.preventDefault();
    const previewImg = document.getElementById('tiketPhotoPreview');

    const newTicket = {
        id: 'tkt-' + Date.now(),
        userId: currentUser.id,
        userName: currentUser.nama,
        userRole: currentUser.role,
        kelas: currentUser.kelas || currentUser.kelasWalikelas || '-',
        jenis: document.getElementById('tiketJenis').value,
        tanggalAwal: document.getElementById('tiketAwal').value,
        tanggalAkhir: document.getElementById('tiketAkhir').value,
        keterangan: document.getElementById('tiketKeterangan').value,
        lampiran: previewImg ? previewImg.src : null,
        status: 'Pending'
    };

    ticketsDB.push(newTicket);
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(ticketsDB));
    document.getElementById('formTiketIzin').reset();
    document.getElementById('tiketPhotoContainer').classList.add('hidden');

    renderUserTicketsList();
    showToast('Pengajuan tiket izin berhasil terkirim!', 'success');
}

function renderUserTicketsList() {
    const container = document.getElementById('userTicketsList');
    if (!container) return;

    container.innerHTML = '';
    const myTickets = ticketsDB.filter(t => t.userId === currentUser.id);

    if (!myTickets.length) {
        container.innerHTML = `<p class="text-xs text-slate-500 italic">Belum ada pengajuan tiket.</p>`;
        return;
    }

    myTickets.forEach(t => {
        const div = document.createElement('div');
        div.className = "p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs flex items-center justify-between";
        div.innerHTML = `
            <div>
                <span class="font-bold text-white">${t.jenis} (${t.tanggalAwal} s/d ${t.tanggalAkhir})</span>
                <p class="text-[11px] text-slate-400 mt-0.5">${t.keterangan}</p>
            </div>
            <span class="px-2 py-1 rounded-lg text-[10px] font-bold ${t.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}">${t.status}</span>
        `;
        container.appendChild(div);
    });
}

/* User Attendance History Modal */
function openRiwayatModal() {
    document.getElementById('modalRiwayat').classList.remove('hidden');
    renderUserRiwayatTable();
}

function renderUserRiwayatTable(filteredList = null) {
    const tbody = document.getElementById('userRiwayatTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    const list = filteredList || attendanceDB.filter(a => a.userId === currentUser.id);

    list.forEach(a => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-mono text-slate-300">${a.tanggal} ${a.jam}</td>
            <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">${a.status}</span></td>
            <td class="p-3"><img src="${a.foto}" class="w-9 h-9 object-cover rounded-xl border border-slate-700"></td>
        `;
        tbody.appendChild(tr);
    });
}

function filterRiwayatUser() {
    const dateVal = document.getElementById('filterRiwayatTanggal').value;
    if (!dateVal) return;

    const filtered = attendanceDB.filter(a => a.userId === currentUser.id && a.tanggal === dateVal);
    renderUserRiwayatTable(filtered);
}

function resetFilterRiwayatUser() {
    document.getElementById('filterRiwayatTanggal').value = '';
    renderUserRiwayatTable();
}

/* Walikelas Approval Modal */
function openApproveModal() {
    document.getElementById('modalApprove').classList.remove('hidden');
    renderApproveWalikelasTable();
}

function renderApproveWalikelasTable() {
    const tbody = document.getElementById('approveWalikelasTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    // Filter tickets submitted by students of this walikelas' class
    const pendingTickets = ticketsDB.filter(t => t.userRole === 'Siswa' && t.kelas === currentUser.kelasWalikelas);

    pendingTickets.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-bold text-white">${t.userName} <span class="block text-[10px] text-slate-400 font-normal">Kelas ${t.kelas}</span></td>
            <td class="p-3 text-amber-300 font-semibold">${t.jenis}<br><span class="text-[10px] text-slate-400">${t.tanggalAwal} s/d ${t.tanggalAkhir}</span></td>
            <td class="p-3 text-slate-300">${t.keterangan}</td>
            <td class="p-3">${t.lampiran ? `<img src="${t.lampiran}" class="w-10 h-10 object-cover rounded-xl border border-slate-700">` : '-'}</td>
            <td class="p-3 text-center space-x-2">
                <button onclick="approveTicket('${t.id}')" class="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[10px] font-bold">Setujui</button>
                <button onclick="rejectTicket('${t.id}')" class="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[10px] font-bold">Tolak</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function approveTicket(id) {
    const idx = ticketsDB.findIndex(t => t.id === id);
    if (idx !== -1) {
        ticketsDB[idx].status = 'Approved';
        localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(ticketsDB));

        // Auto-add attendance entry for approved student ticket
        attendanceDB.push({
            id: 'att-' + Date.now(),
            userId: ticketsDB[idx].userId,
            userName: ticketsDB[idx].userName,
            role: ticketsDB[idx].userRole,
            kelas: ticketsDB[idx].kelas,
            tanggal: new Date().toISOString().split('T')[0],
            jam: new Date().toLocaleTimeString('id-ID'),
            status: ticketsDB[idx].jenis,
            foto: ticketsDB[idx].lampiran || 'https://placehold.co/100x100/f59e0b/ffffff?text=IZIN'
        });
        localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendanceDB));

        renderApproveWalikelasTable();
        showToast('Tiket izin disetujui secara otomatis terhubung ke mapel!', 'success');
    }
}

function rejectTicket(id) {
    const idx = ticketsDB.findIndex(t => t.id === id);
    if (idx !== -1) {
        ticketsDB[idx].status = 'Rejected';
        localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(ticketsDB));
        renderApproveWalikelasTable();
        showToast('Tiket izin ditolak.', 'info');
    }
}

/* Presensi Mapel Modal (Guru Only) */
function openPresensiMapelModal() {
    document.getElementById('modalPresensiMapel').classList.remove('hidden');
    renderPresensiMapelStudentList();
}

function renderPresensiMapelStudentList() {
    const tbody = document.getElementById('presensiMapelStudentTable');
    if (!tbody) return;

    const targetKelas = document.getElementById('presensiMapelKelas').value;
    const students = usersDB.filter(u => u.role === 'Siswa' && u.kelas === targetKelas);

    tbody.innerHTML = '';
    students.forEach(s => {
        // Check if student has approved walikelas ticket for today
        const approvedTicket = ticketsDB.find(t => t.userId === s.id && t.status === 'Approved');
        const defaultStatus = approvedTicket ? approvedTicket.jenis : 'Hadir';

        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-mono">${s.nis || '-'}</td>
            <td class="p-3 font-bold text-white">${s.nama}</td>
            <td class="p-3"><span class="px-2 py-0.5 text-[10px] font-bold rounded-full ${approvedTicket ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'}">${approvedTicket ? 'Izin Walikelas (' + approvedTicket.jenis + ')' : 'Normal'}</span></td>
            <td class="p-3">
                <select data-student-id="${s.id}" data-student-name="${s.nama}" class="mapelStudentSelect p-1.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white">
                    <option value="Hadir" ${defaultStatus === 'Hadir' ? 'selected' : ''}>Hadir</option>
                    <option value="Izin" ${defaultStatus === 'Izin' ? 'selected' : ''}>Izin</option>
                    <option value="Sakit" ${defaultStatus === 'Sakit' ? 'selected' : ''}>Sakit</option>
                    <option value="Alpa" ${defaultStatus === 'Alpa' ? 'selected' : ''}>Alpa</option>
                </select>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function savePresensiMapel() {
    const mapel = document.getElementById('presensiMapelNama').value;
    const kelas = document.getElementById('presensiMapelKelas').value;
    const selects = document.querySelectorAll('.mapelStudentSelect');

    const timeStamp = `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString('id-ID')}`;

    selects.forEach(sel => {
        const studentId = sel.getAttribute('data-student-id');
        const studentName = sel.getAttribute('data-student-name');
        const status = sel.value;

        mapelDB.push({
            id: 'mapel-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            waktu: timeStamp,
            mapel,
            kelas,
            guruName: currentUser.nama,
            siswaName: studentName,
            status
        });
    });

    localStorage.setItem(STORAGE_KEYS.MAPEL_ATTENDANCE, JSON.stringify(mapelDB));
    closeModal('modalPresensiMapel');
    showToast('Presensi mapel berhasil disimpan secara realtime!', 'success');
}

/* Laporan Modal Logic */
function openLaporModal() {
    document.getElementById('modalLapor').classList.remove('hidden');
    switchLaporSubtab('daftar');
}

function switchLaporSubtab(subTab) {
    if (subTab === 'daftar') {
        document.getElementById('laporSection-daftar').classList.remove('hidden');
        document.getElementById('laporSection-form').classList.add('hidden');
        document.getElementById('laporSubtabBtn-daftar').className = "laporSubtabBtn px-4 py-2 border-b-2 border-rose-500 font-bold text-xs text-rose-400";
        document.getElementById('laporSubtabBtn-form').className = "laporSubtabBtn px-4 py-2 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white";
        renderUserReports();
    } else {
        document.getElementById('laporSection-daftar').classList.add('hidden');
        document.getElementById('laporSection-form').classList.remove('hidden');
        document.getElementById('laporSubtabBtn-form').className = "laporSubtabBtn px-4 py-2 border-b-2 border-rose-500 font-bold text-xs text-rose-400";
        document.getElementById('laporSubtabBtn-daftar').className = "laporSubtabBtn px-4 py-2 border-b-2 border-transparent font-medium text-xs text-slate-400 hover:text-white";
    }
}

function handleReportSubmission(event) {
    event.preventDefault();
    const kronologi = document.getElementById('laporKronologi').value;
    const previewImg = document.getElementById('laporPhotoPreview');

    const newReport = {
        id: 'rep-' + Date.now(),
        pelaporName: currentUser.nama,
        pelaporRole: currentUser.role,
        kronologi,
        foto: previewImg ? previewImg.src : null,
        waktu: `${new Date().toISOString().split('T')[0]} ${new Date().toLocaleTimeString('id-ID')}`
    };

    incidentsDB.push(newReport);
    localStorage.setItem(STORAGE_KEYS.INCIDENTS, JSON.stringify(incidentsDB));

    document.getElementById('formPelaporan').reset();
    document.getElementById('laporPhotoContainer').classList.add('hidden');
    switchLaporSubtab('daftar');
    showToast('Laporan kejadian terkirim ke Guru & Admin!', 'success');
}

function renderUserReports() {
    const container = document.getElementById('reportsListContainer');
    if (!container) return;

    container.innerHTML = '';
    incidentsDB.forEach(r => {
        const div = document.createElement('div');
        div.className = "p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-2 text-xs";
        div.innerHTML = `
            <div class="flex items-center justify-between border-b border-slate-800 pb-2">
                <span class="font-bold text-rose-400"><i class="fa-solid fa-user-shield mr-1"></i> Pelapor: ${r.pelaporName} (${r.pelaporRole})</span>
                <span class="text-[10px] text-slate-500 font-mono">${r.waktu}</span>
            </div>
            <p class="text-slate-300 font-medium"><strong>Kronologi:</strong> ${r.kronologi}</p>
            ${r.foto ? `<img src="${r.foto}" class="w-full h-32 object-cover rounded-xl border border-slate-800 mt-2">` : ''}
        `;
        container.appendChild(div);
    });
}

function renderReportsAdmin() {
    const tbody = document.getElementById('laporanAdminTable');
    if (!tbody) return;

    tbody.innerHTML = '';
    incidentsDB.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-slate-800/40 transition";
        tr.innerHTML = `
            <td class="p-3 font-mono">${r.waktu}</td>
            <td class="p-3 font-bold text-white">${r.pelaporName}</td>
            <td class="p-3 text-indigo-300">${r.pelaporRole}</td>
            <td class="p-3 text-slate-300">${r.kronologi}</td>
            <td class="p-3">${r.foto ? `<img src="${r.foto}" class="w-12 h-12 object-cover rounded-xl border border-slate-700">` : '-'}</td>
        `;
        tbody.appendChild(tr);
    });
}
</script>
</body>
</html>
