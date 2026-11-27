# Hoppa Design Direction (`DESIGN.md`)

Dokumen ini menjadi sumber kebenaran (single source of truth) untuk identitas visual, sistem token, tipografi, komponen, motion, dan standar aksesibilitas proyek **Hoppa (UI/UX SEVENT X)**.

- **Figma File**: `Hoppa - UI UX SEVENT X` (`fileKey: yGgze90aHFtpCw9LunI4Cl`)
- **Target Platform**: Mobile App (iOS-first reference, `440x956` iPhone 16 Pro Max)
- **Audience**: Mahasiswa Indonesia (EdTech / peer learning & diagnostic roadmap)
- **Dial**: `ENERGY 2 / RHYTHM 2 / MOTION 2`

---

## 1. Identity, Mood & Visual Language

- **Personality**: Ramah, suportif, membumi, dan sedikit playful tanpa terasa kekanak-kanakan. Hoppa membantu mahasiswa menambal celah dasar materi kuliah langkah demi langkah ("Hop over the gap").
- **Identity Motif**:
  1. Maskot buaya biru Hoppa dengan ekspresi kontekstual (menyambut, menyemangati, empty state, dan kartu role).
  2. Bahasa **Tactile 3D Gamified** pada tombol utama, chip terpilih, dan kartu role (4px bottom lip + inner highlight halus) yang terasa nyaman ditekan.
- **Surface Strategy (Hybrid)**:
  - **Emotional Flows (Landing, Auth, Onboarding)**: Full-bleed playful gradient/wave dengan maskot ekspresif untuk membangun koneksi emosional sejak detik pertama.
  - **Daily Work Flows (Beranda, Sambung, Tanya, Profil)**: Permukaan bersih `#F7F9FA` (`surface/canvas`) + card putih `#FFFFFF` (`surface/card`) + aksen header brand agar mata tetap nyaman saat belajar.

---

## 2. Color System & WCAG AA Contrast

Prinsip: warna vibrant eksisting (`-500` / `-600`) dipertahankan untuk maskot, ilustrasi, header dekoratif, progress, dan aksen. Untuk seluruh tombol solid dan teks interaktif berlatar warna, gunakan skala `-700` (default), `-750` (hover), dan `-800` (pressed / 3D lip) agar lolos standar **WCAG AA (>= 4.5:1)**.

### Primitive Palette (`PrimitiveColors`)

| Family | `-50` (Subtle) | `-100` (Tint) | `-500` (Brand) | `-600` (Accent) | `-700` (CTA Default) | `-750` (CTA Hover) | `-800` (3D Lip / Pressed) |
|---|---|---|---|---|---|---|---|
| **Blue (Primary)** | `#E8F7FE` | `#C7ECFD` | `#29B6F6` | `#1CA1DB` | `#0277BD` (4.80:1 AA) | `#0369A1` (5.93:1 AA) | `#015C94` |
| **Green (Success / Action)** | `#F0FDE8` | `#D9FAC5` | `#64DD17` | `#52B813` | `#308510` (4.68:1 AA) | `#27720C` (6.00:1 AA) | `#226309` |
| **Purple (Token / Gamification)** | `#F8EEFF` | `#EED4FF` | `#CE82FF` | `#B561EB` | `#8E33D6` (5.84:1 AA) | `#8E33D6` | `#6B21A8` |
| **Red (Error / Destructive)** | `#FFF0F0` | `#FFD6D6` | `#FF5252` | `#E03E3E` | `#C62828` (5.62:1 AA) | `#B71C1C` (6.57:1 AA) | `#9B1C1C` |
| **Amber (Warning / Ragu)** | `#FEF3C7` | `#FEF3C7` | `#F59E0B` | `#F59E0B` | `#92400E` (6.37:1 di `#FEF3C7` AA) | `#92400E` | `#92400E` |

### Neutral Base (`PrimitiveColors`)

| Token | Hex | Role & Verified Contrast |
|---|---|---|
| `base/white` | `#FFFFFF` | Card surface & inverse text |
| `base/semi-white` | `#F7F9FA` | Screen canvas (`surface/canvas` / `bg-layar`) |
| `base/border` | `#E2E8F0` | Default border, divider, disabled surface |
| `base/gray-light` | `#CBD5E1` | Strong border, muted icon |
| `base/gray` | `#64748B` | Secondary text (4.76:1 di putih, 4.51:1 di `#F7F9FA` AA) |
| `base/semi-black` | `#1C2833` | Primary text (14.9:1 AAA) |
| `base/black` | `#000000` | High-emphasis system element |

### Semantic Token Groups (`SemanticColors`)
- **Surface**: `surface/canvas`, `surface/card`, `surface/muted`, `surface/brand-subtle`, `surface/success-subtle`, `surface/purple-subtle`, `surface/error-subtle`, `surface/disabled` (plus alias kompatibilitas `bg-layar`, `bg-primary`, `bg-primary-shadow`).
- **Accent**: `accent/blue`, `accent/green`, `accent/purple`, `accent/red`.
- **Text**: `text/primary`, `text/secondary`, `text/disabled`, `text/inverse`, `text/brand`, `text/success`, `text/purple`, `text/error`.
- **Border**: `border/default`, `border/strong`, `border/focus`, `border/brand`, `border/brand-subtle`, `border/success`, `border/error`.
- **Interactive CTA**: `cta/primary-bg|hover|shadow`, `cta/success-bg|hover|shadow`, `cta/purple-bg|shadow`, `cta/danger-bg|hover|shadow`.

---

## 3. Typography (`Nunito` & `Plus Jakarta Sans`)

- **Font Utama (`Nunito`)**: Ekspresif, bulat, ramah mahasiswa. Digunakan untuk Display, Heading, Button, Bottom Navigation, Chip, dan Badge.
- **Font Kedua (`Plus Jakarta Sans`)**: Geometris, tajam, dan nyaman dibaca di layar mobile. Digunakan untuk Body paragraf, Form Label, Form Input, Helper Text, dan Caption.
- **Aturan Keterbacaan**: Selalu rata kiri (`LEFT`) untuk paragraf (tidak pernah `JUSTIFIED`), tanpa font dekoratif liar di luar sistem.

| Text Style | Font Family | Weight | Size / Line Height | Tracking | Penggunaan |
|---|---|---|---|---|---|
| `Display / Hero` | Nunito | ExtraBold (800) | `32px / 40px` | `-0.5%` | Tagline Landing, layar perayaan |
| `Heading / H1` | Nunito | ExtraBold (800) | `28px / 35px` | `-0.5%` | Judul utama layar |
| `Heading / H2` | Nunito | Bold (700) | `22px / 28px` | `0%` | Judul section & modal |
| `Heading / H3` | Nunito | Bold (700) | `18px / 24px` | `0%` | Judul card |
| `UI / Button Lg` | Nunito | ExtraBold (800) | `16px / 22px` | `0.5%` | Tombol utama (`48px`) |
| `UI / Button Sm` | Nunito | ExtraBold (800) | `14px / 20px` | `0.5%` | Tombol kecil (`44px`) |
| `UI / Nav Label` | Nunito | Bold (700) | `14px / 18px` | `0%` | Label aktif Bottom Navigation |
| `UI / Chip` | Nunito | Bold (700) | `14px / 18px` | `0%` | Chip pilihan mata kuliah / filter |
| `UI / Badge` | Nunito | ExtraBold (800) | `12px / 16px` | `1%` | Badge Token & status |
| `Body / Large` | Plus Jakarta Sans | Regular (400) | `16px / 24px` | `0%` | Subheadline & teks Onboarding |
| `Body / Medium` | Plus Jakarta Sans | Regular (400) | `14px / 21px` | `0%` | Isi card & teks deskriptif |
| `Body / Medium SemiBold` | Plus Jakarta Sans | SemiBold (600) | `14px / 21px` | `0%` | Penekanan inline & opsi terpilih |
| `Form / Label` | Plus Jakarta Sans | Bold (700) | `14px / 20px` | `0%` | Label di atas field |
| `Form / Input` | Plus Jakarta Sans | Medium (500) | `16px / 24px` | `0%` | Nilai input & placeholder |
| `Caption / Helper` | Plus Jakarta Sans | Medium (500) | `12px / 18px` | `0%` | Helper text, error, metadata |

---

## 4. Layout, Spacing, Radius & Mobile Grid

- **Viewport Standar**: `440x956` (iPhone 16 Pro Max), frame layar menggunakan sudut `48px` dengan iOS squircle smoothing `60%` (`cornerSmoothing: 0.6`) agar konsisten siap presentasi di kanvas.
- **Grid & Margin**: Horizontal margin `24px` kiri dan kanan (lebar kolom konten `392px`), 4 kolom, gutter `16px`.
- **Safe Area**: `iOS Status Bar` atas `54px` (Dynamic Island presisi di `x = 160`), `iOS Home Indicator` bawah `34px`.
- **Auto Layout Layar (Standar Wajib Seluruh Section)**:
  - **Root Screen Frame (`440x956`)**: Wajib menggunakan **`Auto Layout Vertical`** (`FIXED 440x956`, `gap: 0`, `padding: 0`, `clipsContent: true`).
  - **Urutan Flow Vertikal**: (1) `iOS Status Bar` (`FILL` x `54px`), (2) `Main Body` / `Scroll Area` (`FILL` x `FILL`, padding horizontal `24px`) sebagai ruang konten elastis di tengah, (3) `Bottom CTA Bar` / `Keyboard Dock` (`FILL` x `HUG`/`FIXED`, bila ada), dan (4) `iOS Home Indicator` (`FILL` x `34px`).
  - **Elemen Overlay & Dekoratif (`Absolute Position / Ignore Auto Layout`)**: Maskot mengintip di bawah (`constraints: STRETCH / MAX`), modal popup + scrim, floating dropdown menu, dan floating `Bottom Navigation` wajib menggunakan `Absolute Position` agar tetap sticky/melayang rapi tanpa bergeser saat elemen isi ditambah atau dikurangi.
- **Scroll Architecture**: Frame layar terluar tidak di-scroll (`overflowDirection: NONE`); untuk layar panjang, konten diletakkan di dalam `Main Body / Scroll Area` (`FILL` vertikal) dengan padding bawah minimal `140px` + `Bottom Scrim` agar konten tidak pernah tertutup `Bottom Navigation`.
- **Spacing Tokens (`Spacing & Radius`)**: Skala 4/8pt (`space/4`, `8`, `12`, `16`, `20`, `24`, `32`, `40`, `48`).
- **Corner Radius Tokens**:
  - `radius/sm` (`8px`): Tag mikro & elemen kecil
  - `radius/md` (`12px`): Button, Text Field, OTP Input, Dropdown
  - `radius/lg` (`16px`): Card konten & Role Card
  - `radius/xl` (`24px`): Modal dan bottom sheet
  - `radius/full` (`999px`): Chip, Badge Token, Floating Bottom Navigation
- **Tap Target Minimum**: `48px` untuk CTA utama, input, dan slot tab; `44px` minimum untuk Small Button, Chip, dan Dropdown Item.

---

## 5. Elevation & Motion System

### Elevation & Tactile 3D Effect Styles (Strict Zero-Blur)
- **Aturan Mutlak**: **NOL shadow buram (`radius: 0`)**, **NOL glow/halo pucat**, **NOL garis putus-putus (*dashed border*)**, **NOL *glassmorphism***, dan **NOL *pastel pill soup***.
- `elevation/tactile-card`: Border solid `2px` (`INSIDE`) `#CBD5E1` + hard bottom lip `0 4px 0 #CBD5E1` (`radius: 0, spread: 0`) untuk kartu permukaan putih.
- `elevation/tactile-small`: Border solid `2px` (`INSIDE`) + hard bottom lip `0 3px 0` untuk tombol kecil (`Back Button`, `Terima`, `Token Pill`, chip, ikon keycap).
- `elevation/tactile-primary|success|purple|danger`: Border solid `2px` (`INSIDE`) + hard bottom lip `0 4px 0` (warna `-800`) untuk tombol utama, kartu highlight, dan launcher.
- `elevation/tactile-modal`: Border solid `2px` (`INSIDE`) + hard bottom lip `0 6px 0` untuk modal overlay dan kartu perayaan.
- `elevation/tactile-recessed`: `INNER_SHADOW` (`offset: 0, 2`, `radius: 0`, `#E2E8F0` atau `#460F75`) untuk input kosong, *search bar*, dan track *segmented switcher*.
- `elevation/tactile-pressed`: Hard bottom lip `0 1px 0` untuk umpan balik tombol tertekan.
- **Anti-Crop Rule**: Selalu set `clipsContent = false` pada container kartu/baris taktil (atau bungkus lip di dalam kotak transparan dengan `paddingBottom: 3` seperti `Back Button` `1049:5557`) agar bottom lip 3D tidak pernah terpotong datar.

### Motion Curves (`Snappy Tactile Spring`)
Seluruh transisi komponen menggunakan Figma `SMART_ANIMATE` dengan `CUSTOM_SPRING` (`mass: 1`):
- **Micro-Press (`140ms`)**: `stiffness: 420, damping: 30` (Button Pressed).
- **Micro-Hover & Tap (`200-220ms`)**: `stiffness: 340-360, damping: 26-28` (Button Hover, Chip Toggle, Text Field, OTP Input, Dropdown Item Hover).
- **Expand / Collapse (`260ms`)**: `stiffness: 300, damping: 26` (Dropdown Closed, Open, Selected + rotasi Chevron 180 derajat).
- **Spatial Glide & Swipe Deck (`360-400ms`)**: `stiffness: 240-260, damping: 22-24` (Bottom Navigation sliding `Active Pill` dan Role Card stacked swipe-up deck).

---

## 6. Component Inventory (Halaman `Komponen` `5:22`)

| Komponen | Node ID | Varian & Interaksi |
|---|---|---|
| `Button` | `443:1240` | 40 varian (5 Variants x 2 Sizes `48px/44px` x 4 States). `While Hovering -> Hover`, `While Pressing -> Pressed`. |
| `Text Field` | `443:1286` | 6 state (`Default`, `Focused`, `Filled`, `Error` + Alert icon, `Success` + Check icon, `Disabled`). 3-step `On Click`. |
| `OTP Input` | `443:1298` | 4 state (`Empty`, `Active`, `Filled`, `Error`), ukuran `56x64px`. 3-step `On Click`. |
| `Chip` | `443:1310` | 6 varian (`Blue/Green` x `Unselected/Selected/Disabled`), tinggi `44px`. Toggle `On Click` (Disabled non-interaktif untuk batas maksimal). |
| `Bottom Navigation` | `450:1149` | 4 tab (`Beranda`, `Sambung`, `Tanya`, `Profil`), `392x64px`, dock putih dengan bibir taktil biru es (`#BAE6FD`) & `Active Pill` 3D taktil biru (`elevation/tactile-primary`) meluncur via `On Click`. |
| `Dropdown Item` | `444:1127` | 3 state (`Default`, `Hover`, `Selected`), tinggi `44px`. `While Hovering -> Hover`. |
| `Dropdown` | `450:1251` | 3 state (`Closed`, `Open`, `Selected`), chevron 180 derajat + floating `Options List`. `On Click`. |
| `iOS Status Bar` | `444:1177` | 2 tema (`Dark`, `Light`), `440x54px`, Dynamic Island center di `x = 160`. |
| `iOS Home Indicator` | `444:1182` | 2 tema (`Dark`, `Light`), `440x34px`. |
| `Role Card` | `450:1322` | 2 state (`Seeker`, `Volunteer`), stacked deck `392x196px`. `On Drag` + fallback `On Click`. |
| `Diagnostic Swipe Card` | `551:2954` | 4 varian (`Idle`, `Swiped Up`, `Swiped Right`, `Swiped Left`), 3 zona `On Drag` Smart Animate Spring + rotasi `±14°` + stempel warna + 6 properti teks. |
| `Token Pill Badge` | `618:3024` | 4 varian (`Default` ungu, `Cost` amber `-1 Token`, `Reward` hijau `+1 Token`, `Empty` merah `0 Token`), properti teks `Label`. |
| `Star Rating Input` | `618:3057` | 2 varian (`Empty`, `Rated` 5 bintang kuning amber), interaktif `On Click` Smart Animate Spring untuk ulasan pasca-panggilan Seeker. |
| `Call Control Dock` | `618:3114` | 2 varian (`Mode=Audio`, `Mode=Sharing`), tersusun dari 5 tombol aksi independen (`Call Button: Mute` `741:4053` merah saat mute, `Speaker` `741:4069` biru aktif, `Samarkan` `741:4082`, `Layar` `741:4093`, `Akhiri` `741:4094`). |
| `Report Action Button` | `741:4042` | 2 varian (`Default`, `Active`), tombol laporan reusable `40x40px` untuk sesi Call & halaman lainnya. |
| `Report Reason Selector` | `825:4354` | 4 varian interaktif (`Harassment`, `Danger`, `Privacy`, `Spam`), pemilih alasan pelanggaran radio merah via `On Click`. |
| `Report Violation Modal` | `825:4367` | Komponen kartu modal pelanggaran reusable (memuat `Report Reason Selector` + CTA merah `Kirim Laporan & Akhiri Sesi` + `Batal`). |
| `Leaderboard Subject Board` | `835:4738` | 5 varian interaktif (2 mode cakupan `Kampusku (IT PLN)` vs `Nasional` + dropdown `Mata Kuliah` searchable untuk 48+ matkul: `UI/UX Design`, `Picker Open`, `Basis Data`), panggung ungu penuh + podium 3D bermahkota `#1` + bottom sheet putih dengan baris pengguna ungu solid (ref `image 16`). |
| `Leaderboard Course Dropdown` | `839:4521` | 10 varian interaktif (`Closed`/`Open` x 5 mata kuliah: `UI/UX Design`, `Basis Data`, `PBO`, `APS`, `Kalkulus`), kapsul transparan di panggung ungu + popover pencarian `Cari dari 48+ mata kuliah...` & scrim penutup (40 reaksi `On Click` Smart Animate Spring). |
| `Celebration Sunburst Backdrop` | `851:4324` | 4 fase loop rotasi tak terbatas (`0° -> 10° -> 20° -> 30°` `Linear 0.9s` + snap instan simetris 12 sinar) dengan cahaya pusat lembut & 4 bintang berkilau ungu, terpasang di layar perayaan `15. Post-Call Volunteer`. |
| `Celebration Sunburst Backdrop (Green)` | `889:4147` | Varian hijau Hoppa (`#246A0A` + sinar `#52B813`) dengan 4 fase loop rotasi 30° simetris & bintang berkilau, terpasang di `11a. Post-Call Seeker: Rating & Ulasan (PBO)`. |
| `Tanya Boost Button` | `927:4847` | 2 varian interaktif (`Active=Off` <-> `Active=On` biru lembut + angka naik `+1`) untuk mendorong pertanyaan di Modul 3 `Tanya` secara gratis. |
| `Tanya Helpful Vote Button` | `927:4858` | 2 varian interaktif (`Active=Off` <-> `Active=On` hati merah lembut + angka naik `+1`) pada komentar/jawaban di Detail Pertanyaan `Tanya`. |
| `Tanya Reply Composer` | `927:4873` | 2 varian interaktif (`State=Empty` <-> `State=Filled`) untuk kolom balas cepat ala X/Threads di Detail Pertanyaan `Tanya`. |
| `Voice Mode Selector` | `741:4153` | 3 varian interaktif (`Soft`, `Neutral`, `Chill`) untuk memilih karakter suara anonim (`Hangat / Soft`, `Androgini / Gender-neutral`, `Calm / Chill`). |
| `Review Tag Chip` | `778:4136` | 2 varian (`Off`, `On` biru taktil), chip apresiasi pasca-panggilan interaktif `On Click`. |
| `Review Note Input` | `778:4145` | 2 varian (`Empty`, `Filled`), kolom catatan apresiasi pasca-panggilan interaktif `On Click`. |
| `Leaderboard Row` | `618:3131` | 2 varian (`Highlight=False`, `True` untuk posisi pengguna), 4 properti teks (`Rank`, `Name`, `Campus`, `Stats`). |
| `Live Seeker Card` | `618:3180` | 2 varian (`Match=Highlighted` border biru + chip hobi, `Default`), 5 properti teks (`Alias`, `Subject`, `Title`, `IceBreaker`, `Timer`) + CTA `+1 Token`. |
| `Question Composer Input` | `692:3856` | 2 varian (`Empty`, `Filled`), klik untuk mengisi Judul & Penjelasan pertanyaan secara mandiri via `Change To` Smart Animate. |
| `Subject Picker Chip` | `692:3894` | 3 varian (`Empty`, `Open` dengan floating dropdown 4 bidang keahlian, `Selected` `PBO (OOP)` + tombol reset `×`), interaktif `On Click`. |
| `Attachment Picker Chip` | `692:3941` | 3 varian (`Empty`, `Open` dengan floating picker Kamera/Galeri/Dokumen, `Attached` `Nilai.java` + tombol hapus `×`), interaktif `On Click`. |
| `Hobby Match Toggle` | `699:3845` | 2 varian (`Off` netral, `On` ungu pastel + tombol knob geser `Smart Animate Spring`), interaktif `On Click`. |
| `Help Mode Selector` | `710:3923` | 3 varian (`Selected=None`, `Call`, `Tanya`), layout 2 kolom sejajar dengan radio checkmark iOS + indikator biaya bersih, interaktif `On Click`. |
| `Live Radar Pulse` | `725:4139` | 4 fase loop kontinyu (`After Delay 0.55s` Smart Animate Ease Out, tanpa blur): 3 gelombang sonar biru mengembang & memudar mulus + bintang kilau + maskot Hoppa mengambang. |
| `Loading Screen` | `485:1691` | `440x956` Figma Native Motion (`2.4s`): lirik mata + kedip + alis + lompatan "Hop" + bayangan + progress bar (`Title`/`Subtitle` TEXT props). |
| `Prototype Playground` | `451:1121` | Flow Starting Point `Hoppa Component Playground` (`440x956`) untuk uji coba seluruh komponen. |

---

## 7. Copywriting & Content Principles

- **Bahasa**: Bahasa Indonesia kasual yang hangat dan langsung ke inti, cocok untuk percakapan antar-mahasiswa (contoh: "Halo, Raka!", "Mau mendalami materi apa hari ini?", "Mulai Diagnosa").
- **CTA Spesifik**: Hindari label generik ("Mulai", "Klik di sini"). Gunakan aksi konkret sesuai konteks layar ("Kirim Kode OTP", "Mulai Diagnosa", "Cari Volunteer").
- **Tanda Baca & Gaya**: Hindari tanda em dash dan buzzword marketing kosong ("AI Powered", "Revolusioner", "Seamless").
- **State Jujur & Lengkap**: Setiap layar data wajib menyiapkan Empty State (sebab + aksi berikutnya), Loading State (apa yang sedang dimuat), dan Error State (apa yang gagal + cara memperbaiki), tanpa angka atau testimoni fiktif.

---

## 8. Design Decisions Rationale

- **Mengapa warna `-700/-750/-800` untuk tombol?** Agar teks putih di tombol biru, hijau, ungu, dan merah lolos kontras WCAG AA (>= 4.5:1) sambil tetap mempertahankan nuansa ceria khas Hoppa melalui warna `-500` pada maskot dan aksen.
- **Mengapa Nunito + Plus Jakarta Sans?** Nunito memberi karakter playful pada judul dan aksi utama, sementara Plus Jakarta Sans menjaga keterbacaan optimal untuk form, soal, dan penjelasan panjang di layar kecil.
- **Mengapa Tactile 3D Lip + Snappy Spring?** Menciptakan kesan gamified yang memotivasi mahasiswa belajar konsisten tanpa membuat animasi terasa lambat.
- **Mengapa Hybrid Surface?** Layar Auth/Onboarding membangun ikatan emosional lewat maskot & warna, sedangkan layar harian (Beranda, Sambung, Tanya, Profil) fokus pada kejernihan informasi agar mata tidak cepat lelah.
- **Mengapa `Scroll Area` terpisah dari `Bottom Navigation`?** Menjamin navigasi bawah tetap stabil saat scrolling dan bebas dari pergeseran posisi animasi di prototype mobile.

---

## 9. Hoppa Playful Tactile 3D Restyle Playbook (Memori Standar Modul)

Bagian ini adalah panduan wajib saat melakukan *restyle* modul lain (**Beranda / Modul 1**, **Tanya / Modul 3**, **Profil / Modul 4**, **Auth & Onboarding**) agar seluruh aplikasi terasa **satu keluarga — playful, ceria, gamified ala Duolingo, namun tetap bersih, rapi, dan tidak norak**.

### A. Palet Resmi Wajib (Jangan Geser ke Warna Generic/Tailwind)
- **Hoppa Blue**: `#0277BD` (Header & CTA utama), `#015C94` (3D lip & pita gelap), `#29B6F6` / `#38BDF8` (aksen langit playful), `#E0F2FE` / `#BAE6FD` (stage pastel & border cerah).
- **Hoppa Green (Seeker / Action)**: `#308510` / `#2E7D32` (utama), `#226309` / `#1B5E20` (3D lip), `#F0FDF4` / `#DCFCE7` (permukaan kartu hangat & motif lengkung).
- **Hoppa Purple (Volunteer / Leaderboard — RESMI, BUKAN `#7C3AED`!)**:
  - Hero Screen Background: `#7C22C7`
  - Card / Highlight / CTA: `#8E33D6`
  - 3D Lip / Podium Block / Dropdown Trigger: `#6B21A8`
  - Recessed Track / Deep Shadow: `#5A1694` / `#460F75` / `#4C127D`
  - Hordeng Teater 2-Tone: `#5E1799` (utama) + `#430D70` (bayangan lipatan) + tali emas `#FBBF24` / `#B45309`
  - Permukaan Kartu Lavender: `#FAF5FF` / `#F3E8FF` / `#E9D5FF`
- **Hoppa Medal & Sparkle**: Emas `#FBBF24` / `#FDE047` (lip `#B45309`), Perak `#E2E8F0` / `#CBD5E1` (lip `#475569`), Perunggu `#E08E45` / `#FDBA74` (lip `#9A3412`).
- **Hoppa Red (Destructive / Error)**: `#DC2626` / `#C62828` (lip `#B91C1C` / `#9B1C1C`).

### B. Resep Playful-Yet-Tidy (Standar Visual Setara Leaderboard & Sambung)
1. **Header Tidak Boleh Polos**:
   - Gunakan live instance **`Dashboard Header Backdrop` (`1111:5853`)** (`440x176`, pita diagonal 2-tone komik, gelembung geometris halus, 3 sparkle bintang di ruang kosong, rim bawah 3D) pada header biru dashboard.
2. **Kartu Hero & Aksi Utama**:
   - Hindari kotak putih steril untuk kartu aksi utama/teaser. Gunakan tint hangat lembut (`#F0FDF4`, `#FAF5FF`, `#F0F9FF`) + border `2px` + lip `4px` + aksen geometris lengkung 2-tone & 2 sparkle mini di sisi yang bebas teks.
   - Kartu peran / hero (`Role Card` `450:1322`) memakai pita diagonal 2-tone, lingkaran sorot lembut di belakang maskot, sparkle mini, dan kapsul gelap tipis (`rgba(0,0,0,0.16)`) untuk hint interaktif.
3. **Empty State Ceria**:
   - Jangan gunakan ikon kecil dalam lingkaran polos + tombol outline kosong.
   - Pasang **panggung lingkaran pastel (`#E0F2FE` + border `#BAE6FD`) + bayangan lantai + 2–3 sparkle** dengan **maskot buaya berdiri ekspresif**, serta CTA **solid Tactile 3D** (mis. biru `#0277BD` + lip `4px #015C94` + teks putih).
4. **Tipografi Editorial Inline (Zero Pastel Pill Soup)**:
   - Metadata di dalam kartu riwayat/antrean/thread (`#PBO`, `#UI/UX`, `#Basis Data`, `★ 5.0`, `22 menit`, `✓ Terjawab`) ditulis langsung sebagai **teks inline berwarna** (Hoppa Blue `#0277BD` / Amber `#D97706` / Slate `#64748B`), **BUKAN** dibungkus kotak pill pastel.
5. **Komponen Wajib & Aset Reusable Terkini**:
   - **`Back Button`** (`1049:5557`, `Komponen`): 4 varian (`Light`/`OnColor` x `Default`/`Pressed`), lip `3px` aman di dalam box `44x44` (`paddingBottom: 3`).
   - **`Toggle Switch`** (`996:5205`, `Komponen`): Duolingo Tactile 3D biru (`52x32`).
   - **`Dashboard Header Backdrop`** (`1111:5853`, `Komponen`): Header biru playful 2-tone `440x176`.
   - **`Leaderboard Stage Curtains`** (`1100:6101`, `Komponen`): Hordeng teater ungu 2-tone + tali emas `440x600`.
   - **`Leaderboard Stage Spotlight`** (`1100:6121`, `Komponen`): Sorotan lampu panggung + floor pool + 4 sparkle `440x600`.
   - **`Role Card`** (`450:1322`, `Komponen`): Varian `Seeker` & `Volunteer` dengan pola komik 2-tone & kapsul swipe.
   - **Maskot Berdiri (`Maskot` `23:2`)**: `Telepon Berdiri` (`1021:5029`), `Tulis Pertanyaan Berdiri` (`1032:5261`), `Ketawa Medali Emas` (`1094:5373`), `Ketawa Medali Perak` (`1094:5441`), `Ketawa Medali Perunggu` (`1094:5509`).
6. **Pola Figma Native Motion (`2.4s` Seamless Loop)**:
   - Gunakan `applyManualKeyframeTrack` pada timeline top-level frame (`2.4s`, titik `t=0` = `t=2.4`).
   - **Catatan API**: Sublayer di dalam `INSTANCE` tidak bisa diberi keyframe langsung — *detach* hanya jika sublayer (seperti pupil `Vector 19`/`Vector 20`, medali, atau 4 sparkle) perlu dianimasikan terpisah pada timeline layar.
   - Gerakan khas Hoppa: loncat + *squash & stretch* (`TRANSLATION_Y` + `SCALE_XY`) dengan *follow-through* mahkota; lirik mata kanan-kiri (`TRANSLATION_X ±3.2px` pada pupil); goyang santai (`ROTATION ±6.5°` + mini bob); sapuan sorot lampu & kerlip sparkle bergantian (*staggered*).
