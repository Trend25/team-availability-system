harika — README’yi **İngilizce ve Türkçe** olarak güncelledim.
Yeni eklenenler: **Nomad Timezone Auto-Update**, UTC tabanlı hesaplama açıklaması, `startUTC` / `endUTC` / `tz` alanları, hızlı sorun giderme notları.
Aşağıyı doğrudan `README.md` olarak kaydedebilirsin.

---

# Team Availability System v7.0 – Secure Cloud Edition

**(EN) English** · **(TR) Türkçe** aşağıda

---

## 🇬🇧 English

### What is it?

A cloud-based availability planner for global teams. Uses the GitHub API as a zero-cost cloud database and **Netlify Functions** to keep the token secure.

### Key Features

* **Secure Token Management**: Token lives server-side (Netlify Environment Variables).
* **Cloud-Based Storage**: GitHub repository as a free database.
* **Global Team Support**: Everyone accesses the same data from any country.
* **Admin Panel**: Add users, reset passwords, delete users.
* **Availability Calendar**: Monthly availability input and display.
* **Meeting Planner**: Finds common availability automatically.
* **Google Calendar Integration**: One-click create Google Calendar event (Meet).
* **No Setup Screen**: Users land directly on Login.
* **100% Free**: Netlify + GitHub combo.
* **NEW: Nomad Timezone Auto-Update**
  When a user changes country, their timezone (`tz`) auto-updates on login/focus; calendars re-label times accordingly.
* **NEW: Robust DST Handling**
  Availability is calculated via **UTC ISO** (`startUTC`/`endUTC`), eliminating daylight-saving shifts.

### Tech Stack

* Frontend: Plain HTML + ES6 JavaScript
* Backend: Netlify Serverless Functions
* Database: GitHub REST API v3
* Hosting: Netlify (or Vercel)
* Auth: SHA-256 hashed passwords

---

## Quick Setup (≈30 min)

### 1) Create GitHub Repository

1. Go to GitHub → New repository
2. Name: `team-availability-data`
3. Visibility: Public or Private
4. Initialize with README: Yes
5. Create

### 2) Create a Fine-grained Personal Access Token

1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens**
2. Generate new
3. Name: `Team Availability System`
4. Expiration: 1 year (or custom)
5. Repository access: **Only select repositories** → select `team-availability-data`
6. Permissions: **Contents: Read and write**
7. Generate and **copy the token once**

### 3) Deploy to Netlify

**A) From Git (recommended)**

* Push your project to GitHub
* Netlify → New site from Git → choose repo → default settings → Deploy

**B) Manual deploy**

* Netlify → Sites → Deploy manually → drag & drop folder

**Environment Variables** (Netlify → Site settings → Environment variables)

```
GITHUB_TOKEN = ghp_XXXXXXXXXXXXXXXX
GITHUB_USER  = your-github-username
GITHUB_REPO  = team-availability-data
```

Redeploy after setting variables.

**File layout**

```
team-availability/
├── index.html
├── netlify/
│   └── functions/
│       └── github-proxy.js
└── netlify.toml (optional)
```

### 4) Create First Admin Manually

**Hash a password in Browser Console**

```js
async function hashPassword(pwd){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
hashPassword('admin123').then(console.log); // paste result below
```

**Create `data.json` in the repo**

```json
{
  "users": {
    "admin_1727625600000": {
      "name": "Admin",
      "email": "admin@yourcompany.com",
      "pwd": "PASTE_HASH_HERE",
      "role": "Administrator",
      "admin": true
    }
  },
  "availability": {}
}
```

Login with that email+password, then add users from Admin.

---

## How It Works (Timezone & Meetings)

### Availability Storage

* Users select local hours (`start`, `end` stay as text for display).
* System also stores **UTC** equivalents: `startUTC`, `endUTC`.
* User profile stores `tz` (IANA like `Europe/Istanbul`).

**Why?**

* Team view labels each person’s times in **their** timezone.
* Meeting Planner computes overlap using **UTC ISO** only → **no DST drift**.
* Google Calendar links are created with **UTC ISO** → everyone sees correct local times.

### Nomad Timezone Auto-Update

* On **login**, and whenever the tab **gains focus** (plus a 15-min interval), we read:

  ```js
  Intl.DateTimeFormat().resolvedOptions().timeZone // e.g. "America/Toronto"
  ```
* If different from `DB.users[ME.id].tz`, we update it and refresh calendars.

---

## Data Model

### Users

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "pwd": "sha256-hash",
  "role": "Developer",
  "admin": false,
  "tz": "Europe/Amsterdam"   // NEW (auto on login/focus)
}
```

### Availability

```json
{
  "2025-11-04": {
    "status": "yes",
    "start": "09:00",
    "end":   "17:00",
    "startUTC": "2025-11-04T08:00:00.000Z",  // NEW
    "endUTC":   "2025-11-04T16:00:00.000Z",  // NEW
    "tz": "Europe/Amsterdam"                 // NEW (who created this entry)
  }
}
```

> Day keys (e.g., `2025-11-04`) stay as before.

---

## Security

**Token Security**

* Lives in Netlify env variables, never exposed to the browser.
* Access limited to one repo with contents read/write.

**Password Security**

* SHA-256 hashing in this version.
* Production tip: consider bcrypt/Argon2, 2FA/OAuth.

---

## Limitations & Scale

* GitHub API rate: 5,000 requests/hour (authenticated).
* Recommended team size: 5–50 (great), 50–100 (add caching), 100+ (consider a custom backend).
* Keep `data.json` well under 10 MB (GitHub hard limit 100 MB).

---

## Troubleshooting

* **“Connection Error / Status: Red”**
  Check Netlify env vars, token expiration, and function logs.
* **Participants not visible**
  Open Meeting tab (auto loads) or run `loadParticipants()` in Console.
* **Google Meet window blocked**
  Disable popup blocker for the site.
* **Timezone looks wrong for a user**
  Ask them to log in (or refocus the tab) to auto-update; admin can also edit `tz` directly in `data.json`.
* **No available slots found**
  Ensure Meeting month matches the day keys and duration ≤ overlap.

---

## Roadmap

**v7.1 (Planned)**

* Email notifications (SendGrid)
* Slack integration
* CSV export
* Dark mode

**v8.0 (Future)**

* Real-time updates
* Mobile improvements
* Advanced recurring availability
* Admin-editable tz picker

---

## License

MIT

## Contributing

1. Fork
2. Create feature branch
3. Test
4. PR

## Support

Use GitHub Issues.

**Author:** Practical tools for global teams
**Version:** 7.0
**Last Updated:** 2025-10-18

---

## 🇹🇷 Türkçe

### Nedir?

Uluslararası ekipler için bulut tabanlı müsaitlik planlayıcı. GitHub API **ücretsiz veritabanı**, **Netlify Functions** ise token güvenliği sağlar.

### Öne Çıkan Özellikler

* **Güvenli Token Yönetimi**: Token Netlify ortam değişkenlerinde (server-side).
* **Bulut Depolama**: GitHub repository ücretsiz DB gibi çalışır.
* **Global Takım Desteği**: Herkes aynı veriye ülkeden bağımsız erişir.
* **Admin Panel**: Kullanıcı ekleme, şifre sıfırlama, silme.
* **Müsaitlik Takvimi**: Aylık giriş ve görüntüleme.
* **Toplantı Planlayıcı**: Ortak zamanları otomatik bulur.
* **Google Calendar Entegrasyonu**: Tek tıkla Meet etkinliği.
* **Kurulum Ekranı Yok**: Kullanıcılar direkt login’e gelir.
* **%100 Ücretsiz**: Netlify + GitHub.
* **YENİ: Nomad Timezone Auto-Update**
  Kullanıcı ülke değiştirirse, login/odak anında `tz` otomatik güncellenir; takvim etiketleri yeni TZ’ye göre görünür.
* **YENİ: Sağlam DST Yönetimi**
  Hesaplamalar **UTC ISO** ile yapılır; yaz/kış saati kaymaları yaşanmaz.

### Teknoloji

* Frontend: Düz HTML + ES6 JavaScript
* Backend: Netlify Serverless Functions
* Veritabanı: GitHub REST API v3
* Hosting: Netlify (veya Vercel)
* Kimlik Doğrulama: SHA-256 hash’li şifreler

---

## Hızlı Kurulum (≈30 dk)

### 1) GitHub Repo

* Yeni repo: `team-availability-data`
* Public/Private → README ile başlat → Create

### 2) İnce Ayarlı (Fine-grained) Token

* Yalnızca bu repo için yetki ver → **Contents: Read/Write** → Token’ı **kopyala**.

### 3) Netlify Deploy

* Git’ten bağla **veya** manuel sürükle-bırak.
* Ortam değişkenleri:

```
GITHUB_TOKEN = ghp_XXXXXXXXXXXXXXXX
GITHUB_USER  = github-kullanici-adiniz
GITHUB_REPO  = team-availability-data
```

* Değişkenleri ekledikten sonra redeploy et.

**Dosya yapısı**

```
team-availability/
├── index.html
├── netlify/
│   └── functions/
│       └── github-proxy.js
└── netlify.toml (opsiyonel)
```

### 4) İlk Admin’i Elle Oluştur

**Şifre hash’le (Browser Console)**

```js
async function hashPassword(pwd){
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
hashPassword('admin123').then(console.log);
```

**Repo’da `data.json` oluştur**

```json
{
  "users": {
    "admin_1727625600000": {
      "name": "Admin",
      "email": "admin@yourcompany.com",
      "pwd": "BURAYA_HASH",
      "role": "Administrator",
      "admin": true
    }
  },
  "availability": {}
}
```

Sonra siteye girip Admin ile kullanıcı ekleyebilirsin.

---

## Nasıl Çalışır (Zaman Dilimi & Toplantılar)

### Müsaitlik Kaydı

* Kullanıcı yerel saatle (`start`, `end`) giriş yapar.
* Sistem ayrıca **UTC** karşılıklarını da saklar: `startUTC`, `endUTC`.
* Kullanıcı profiline `tz` (ör. `Europe/Istanbul`) yazılır.

**Neden?**

* Team ekranında herkesin saatleri **kendi TZ’sine göre** etiketlenir.
* Meeting Planner **yalnız UTC ISO** ile kesişim alır → **DST kayması yok**.
* Google Calendar linkleri **UTC ISO** ile oluşturulur → herkes doğru yerel saati görür.

### Nomad Timezone Auto-Update

* **Login** anında ve sekme **odağa geldiğinde** (artı 15 dk’da bir) şu değer okunur:

  ```js
  Intl.DateTimeFormat().resolvedOptions().timeZone
  ```
* `DB.users[ME.id].tz` farklıysa güncellenir, takvimler yenilenir.

---

## Veri Modeli

### Kullanıcı

```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "pwd": "sha256-hash",
  "role": "Developer",
  "admin": false,
  "tz": "Europe/Istanbul"   // YENİ (login/odak ile otomatik)
}
```

### Müsaitlik

```json
{
  "2025-11-04": {
    "status": "yes",
    "start": "09:00",
    "end":   "17:00",
    "startUTC": "2025-11-04T06:00:00.000Z",  // YENİ
    "endUTC":   "2025-11-04T14:00:00.000Z",  // YENİ
    "tz": "Europe/Istanbul"                  // YENİ (kaydı girenin TZ bilgisi)
  }
}
```

> Gün anahtarları (örn. `2025-11-04`) eskisi gibi kalır.

---

## Güvenlik

**Token**

* Netlify ortamında saklanır, frontend’e çıkmaz.
* Sadece tek repo yetkisi, Contents Read/Write.

**Şifre**

* Bu sürümde SHA-256.
* Canlı ortamda bcrypt/Argon2 + 2FA/OAuth önerilir.

---

## Sınırlar & Ölçek

* GitHub API limiti: 5.000 istek/saat.
* Önerilen ekip boyutu: 5–50 (mükemmel), 50–100 (cache ekleyin), 100+ (özel backend düşünün).
* `data.json` mümkünse 10 MB altında.

---

## Sorun Giderme

* **“Connection Error / Status: Red”** → Netlify env değişkenleri, token süresi, function logları.
* **Katılımcılar görünmüyor** → Meeting sekmesine geç; olmadı `loadParticipants()` çağır.
* **Google Meet açılmıyor** → Pop-up engelleyiciyi kapat.
* **Zaman dilimi yanlış** → Kullanıcı login/odak yapsın; admin gerekirse `tz`’yi elle düzeltebilir.
* **Uygun slot bulunamadı** → Ay seçimi/gün anahtarları ve süreyi kontrol et.

---

## Yol Haritası

**v7.1 (Planlanan)**: E-posta bildirimleri, Slack entegrasyonu, CSV dışa aktarım, Karanlık tema
**v8.0 (Gelecek)**: Gerçek zamanlı güncellemeler, mobil iyileştirmeler, yinelenen kalıplar, admin TZ seçici

---

## Lisans

MIT

## Katkı

1. Fork
2. Branch
3. Test
4. PR

## Destek

GitHub Issues.

**Yapımcı / Author:** Uluslararası ekipler için pratik çözümler
**Sürüm / Version:** 7.0
**Son Güncelleme / Last Updated:** 2025-10-18
