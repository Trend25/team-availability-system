# Team Availability System v7.0 - Secure Cloud Edition

Uluslararası takımlar için bulut tabanlı müsaitlik yönetim sistemi. GitHub API'yi ücretsiz bulut veritabanı olarak kullanır. **Token güvenliği için Netlify Functions kullanır.**

## Özellikler

- **Güvenli Token Yönetimi**: Token server-side'da saklanır (Netlify Environment Variables)
- **Cloud-Based Storage**: GitHub repository ücretsiz veritabanı
- **Global Team Support**: Farklı ülkelerden kullanıcılar aynı veriye erişir
- **Admin Panel**: Kullanıcı yönetimi, şifre sıfırlama
- **Availability Calendar**: Aylık müsaitlik takvimi
- **Meeting Planner**: Ortak müsait zamanları otomatik bulur
- **Google Calendar Integration**: Bulunan slotları direkt Google Meet'e aktar
- **No Setup Screen**: Kullanıcılar direkt login ekranına gelir
- **100% Free**: Netlify + GitHub kombinasyonu tamamen ücretsiz

## Teknoloji Stack

- Frontend: Pure HTML/JavaScript (ES6+)
- Backend: Netlify Serverless Functions
- Database: GitHub REST API v3
- Hosting: Netlify (veya Vercel)
- Auth: SHA-256 hashed passwords

## Hızlı Kurulum (30 dakika)

### Adım 1: GitHub Repository Oluştur

1. [github.com](https://github.com) → New repository
2. Repository adı: `team-availability-data`
3. Visibility: **Public** veya Private
4. Initialize with README: Evet
5. Create repository

### Adım 2: GitHub Personal Access Token Oluştur

**ÖNEMLİ: Fine-grained token kullanın (daha güvenli)**

1. GitHub Settings → Developer settings → Personal access tokens → **Fine-grained tokens**
2. Generate new token
3. Token name: `Team Availability System`
4. Expiration: 1 year (veya Custom)
5. Repository access: **Only select repositories** → `team-availability-data` seçin
6. Permissions:
   - **Contents**: Read and write
7. Generate token
8. **TOKEN'I KOPYALAYIN** - bir daha gösterilmeyecek

### Adım 3: Netlify'a Deploy

#### 3.1. Dosya Yapısını Hazırla

```
team-availability/
├── index.html
├── netlify/
│   └── functions/
│       └── github-proxy.js
└── netlify.toml (opsiyonel)
```

#### 3.2. Netlify'a Yükle

**Seçenek A: GitHub üzerinden (önerilen)**
1. Projeyi GitHub'a push et
2. [netlify.com](https://netlify.com) → New site from Git
3. GitHub repository'yi seç
4. Deploy settings default bırak → Deploy

**Seçenek B: Manuel deploy**
1. Netlify → Sites → Deploy manually
2. Klasörü sürükle-bırak

#### 3.3. Environment Variables Ekle

Netlify Dashboard'da:
1. Site settings → Environment variables → Add a variable
2. Şu 3 değişkeni ekle:

```
GITHUB_TOKEN = ghp_XXXXXXXXXXXXXXXX  (token'ınız)
GITHUB_USER = your-github-username
GITHUB_REPO = team-availability-data
```

3. **ÖNEMLİ**: Redeploy et (Deploys → Trigger deploy → Deploy site)

### Adım 4: İlk Admin Kullanıcısını Manuel Oluştur

Site deploy olduktan sonra hiç kullanıcı yok, login yapamıyorsunuz. İlk admin'i GitHub'da manuel oluşturmalısınız:

#### 4.1. Admin Şifresini Hash'le

Browser console'da (siteyi açıp F12):

```javascript
async function hashPassword(pwd) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pwd));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Örnek: "admin123" şifresini hash'le
hashPassword('admin123').then(hash => console.log(hash));
```

Çıktı: `240be5...` (64 karakterlik hash)

#### 4.2. GitHub'da data.json Oluştur

`team-availability-data` repository'nize gidin:

1. Add file → Create new file
2. Dosya adı: `data.json`
3. İçerik:

```json
{
  "users": {
    "admin_1727625600000": {
      "name": "Admin",
      "email": "admin@yourcompany.com",
      "pwd": "BURAYA_HASH_KOYUN",
      "role": "Administrator",
      "admin": true
    }
  },
  "availability": {}
}
```

4. `pwd` kısmına yukarıda hash'lediğiniz şifreyi yapıştırın
5. Commit changes

#### 4.3. İlk Login

Sitenize girin:
- Email: `admin@yourcompany.com`
- Password: `admin123` (veya seçtiğiniz şifre)

Başarılı! Artık admin panelinden kullanıcı ekleyebilirsiniz.

## Kullanım

### Admin Kullanımı

**Kullanıcı Ekle:**
1. Admin Panel → Add New User
2. Name, Email, Role gir
3. Sistem otomatik şifre üretir
4. Pop-up'taki şifreyi kopyala ve güvenli paylaş

**Kullanıcı Yönetimi:**
- Reset Password: Yeni şifre üretir
- Delete: Kullanıcıyı ve verilerini siler (admin dahil)

**Takım Takvimi:**
1. Team Calendar sekmesi
2. Ay seç → Load Calendar
3. Tüm kullanıcıların müsaitliğini gör

### Normal Kullanıcı Kullanımı

**Müsaitlik Girişi:**
1. My Availability sekmesi
2. Ay seç, takvim yüklenir
3. Günlere tıkla (mavi = seçili)
4. Saat aralığı belirle
5. Save for Selected Days

**Toplantı Planla:**
1. Plan Meeting sekmesi
2. Ay ve süre seç
3. Katılımcıları işaretle (min 2 kişi)
4. Find Available Times
5. Uygun slotlarda "Create Google Meet" butonuna bas

## Güvenlik

### Token Güvenliği

**v7.0'da Token Güvenli:**
- Token Netlify environment variable'da
- Frontend'den erişilemez
- Netlify Function proxy ile korunur

**GitHub Token İzinleri:**
- Sadece `team-availability-data` repo'su
- Sadece Contents: Read/Write
- Diğer repolara erişim YOK

### Şifre Güvenliği

**Mevcut:** SHA-256 hashing

**Production için öneriler:**
- bcrypt veya Argon2 kullanın
- 2FA ekleyin
- OAuth entegrasyonu düşünün

## Mimari

```
Browser (Istanbul)  →  Netlify Function  →  GitHub API  →  data.json
                            ↓
Browser (New York)  →  Netlify Function  →  GitHub API  →  data.json
```

Token her zaman Netlify'de kalır, browser'a gönderilmez.

## Veri Yapısı

```json
{
  "users": {
    "user_1727625600000": {
      "name": "John Doe",
      "email": "john@company.com",
      "pwd": "sha256-hashed-password",
      "role": "Developer",
      "admin": false
    }
  },
  "availability": {
    "user_1727625600000": {
      "2025-10-15": {
        "status": "yes",
        "start": "09:00",
        "end": "17:00"
      }
    }
  }
}
```

## Sınırlamalar ve Ölçeklenebilirlik

**GitHub API Limitleri:**
- 5,000 istek/saat (authenticated)
- Rate limit aşılırsa 1 saat bekle

**Önerilen Takım Boyutu:**
- 5-50 kullanıcı: Mükemmel
- 50-100 kullanıcı: İyi (caching ekleyin)
- 100+ kullanıcı: Özel backend düşünün

**Data.json Boyutu:**
- GitHub max dosya boyutu: 100MB
- Önerilen max: 10MB
- 100 kullanıcı × 12 ay = ~1MB

## Sorun Giderme

**"Connection Error" / Status: Red**
- Netlify environment variables kontrol et
- Token'ın expire olmadığını kontrol et
- Netlify Functions çalışıyor mu kontrol et: `yoursite.netlify.app/.netlify/functions/github-proxy`

**Katılımcılar görünmüyor**
- Meeting sekmesine geçince otomatik yüklenir
- Manuel yükle: console'da `loadParticipants()` çalıştır

**Google Meet açılmıyor**
- Pop-up blocker kapalı mı kontrol et
- Chrome/Firefox kullanın

**"Rate limit exceeded"**
- 1 saat bekleyin
- Caching implementasyonu yapın

## Netlify Function Debugging

Function loglarını görmek için:

```bash
netlify dev  # Local test
```

Veya Netlify Dashboard → Functions → Logs

## Yol Haritası

**v7.1 (Planlanan)**
- [ ] Email notifications (SendGrid)
- [ ] Slack integration
- [ ] CSV export
- [ ] Dark mode

**v8.0 (Gelecek)**
- [ ] Real-time updates (Pusher)
- [ ] Mobile responsive improvements
- [ ] Advanced timezone handling
- [ ] Recurring availability patterns

## Lisans

MIT License - ücretsiz kullanım

## Katkıda Bulunma

1. Fork et
2. Feature branch oluştur
3. Test et
4. Pull request aç

## Destek

Sorunlar için GitHub Issues kullanın.

---

**Yapımcı:** Uluslararası takımlar için pratik çözümler
**Versiyon:** 7.0
**Son Güncelleme:** 2025-01-02
