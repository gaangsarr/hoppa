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
- **Scroll Architecture**: Frame layar terluar tidak di-scroll (`overflowDirection: NONE`); konten diletakkan di dalam `Scroll Area` vertikal dengan padding bawah minimal `140px` + `Bottom Scrim` agar konten tidak pernah tertutup `Bottom Navigation`.
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

### Elevation & Tactile 3D Effect Styles
- `elevation/card`: Soft shadow `0 4px 16px rgba(28, 40, 51, 0.06)` untuk kartu permukaan putih.
- `elevation/floating`: Elevated shadow `0 8px 24px rgba(28, 40, 51, 0.12)` untuk Floating Bottom Navigation & Dropdown Menu.
- `elevation/tactile-primary|success|danger|neutral`: Hard bottom shadow `0 4px 0` (warna `-800` atau `blue-100`) + inner highlight atas putih `22%` untuk efek tombol 3D.
- `elevation/tactile-pressed`: Hard bottom shadow `0 1px 0` untuk umpan balik tombol tertekan.
- `shadow-putih`: Inner highlight eksisting yang tetap dipertahankan untuk elemen glossy tertentu.

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
| `Bottom Navigation` | `450:1149` | 4 tab (`Beranda`, `Sambung`, `Tanya`, `Profil`), `392x64px`. Sliding `Active Pill` via `On Click`. |
| `Dropdown Item` | `444:1127` | 3 state (`Default`, `Hover`, `Selected`), tinggi `44px`. `While Hovering -> Hover`. |
| `Dropdown` | `450:1251` | 3 state (`Closed`, `Open`, `Selected`), chevron 180 derajat + floating `Options List`. `On Click`. |
| `iOS Status Bar` | `444:1177` | 2 tema (`Dark`, `Light`), `440x54px`, Dynamic Island center di `x = 160`. |
| `iOS Home Indicator` | `444:1182` | 2 tema (`Dark`, `Light`), `440x34px`. |
| `Role Card` | `450:1322` | 2 state (`Seeker`, `Volunteer`), stacked deck `392x196px`. `On Drag` + fallback `On Click`. |
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
