# Team Availability System - Cloud Edition

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/yourusername/team-availability-system)
[![Cloud](https://img.shields.io/badge/storage-GitHub%20API-181717.svg)](https://docs.github.com/en/rest)

Uluslararası takımlar için bulut tabanlı müsaitlik yönetim sistemi. GitHub API'yi ücretsiz bulut veritabanı olarak kullanır.

[🇹🇷 Türkçe](#türkçe) | [🇬🇧 English](#english)

---

## English

### 🌟 Key Features

- **Cloud-Based Storage**: Uses GitHub repository as free cloud database
- **Global Team Support**: Team members from different countries access same data
- **Admin Panel**: Create users, distribute credentials, manage availability
- **Secure Authentication**: SHA-256 password hashing
- **Availability Calendar**: Monthly weekday availability tracking
- **Timezone Support**: Multiple timezone options for international teams
- **No Backend Required**: Pure HTML/JavaScript application
- **100% Free**: No hosting or database costs

### 🚀 Quick Start (25 minutes setup)

#### Step 1: Create GitHub Data Repository (5 min)

1. Go to [github.com](https://github.com) and login
2. Click "New repository"
3. Repository name: `team-availability-data`
4. Choose "Public" (or "Private" for sensitive data)
5. Check "Add a README file"
6. Click "Create repository"

#### Step 2: Generate GitHub Personal Access Token (3 min)

1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token" (classic)
3. Note: "Team Availability System"
4. Expiration: "No expiration" or "1 year"
5. Scopes: Check **"repo"** (full control of private repositories)
6. Click "Generate token"
7. **COPY THE TOKEN** - You won't see it again!

#### Step 3: Deploy to Netlify (5 min)

1. Go to [netlify.com](https://netlify.com) and login
2. Drag & drop your `index.html` file
3. Get your URL (e.g., `yourapp.netlify.app`)

Alternative: Use any static hosting (GitHub Pages, Vercel, Surge.sh)

#### Step 4: Initial System Setup (5 min)

1. Open your deployed URL
2. Go to "Setup" tab
3. Enter:
   - Your GitHub username
   - Repository name: `team-availability-data`
   - Paste your Personal Access Token
4. Click "Test GitHub Connection"
5. Create first admin account

#### Step 5: Add Users and Test (7 min)

1. Login with admin credentials
2. Go to "Admin" tab
3. Add team members (generates auto-password)
4. Share credentials securely
5. Test login in new browser tab

### ⚠️ Important Security Notes

#### GitHub Token Security

**CURRENT LIMITATION**: GitHub token is stored in browser. This is acceptable for:
- Internal team tools
- Trusted team members only
- Non-sensitive data

**NOT RECOMMENDED FOR**:
- Public-facing applications
- Untrusted users
- Highly sensitive data

**Production Solution**: Use Netlify Functions or similar backend to hide token:

```javascript
// netlify/functions/github-proxy.js
exports.handler = async (event) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Stored securely
  // Proxy requests to GitHub API
}
```

#### Password Security

Passwords are hashed with SHA-256. For production use, consider:
- bcrypt or Argon2 for better security
- Token-based authentication
- OAuth integration

### 📋 Usage Guide

#### For Administrators

**Adding Team Members:**
1. Login to admin panel
2. Enter: Name, Email, Role, Country, Timezone
3. System generates secure password
4. Share credentials securely (email, Slack, etc.)

**Managing Users:**
- View all users and their credentials
- Reset passwords when needed
- Delete users (cannot delete admins)

**Viewing Team Availability:**
- All availability data synced via GitHub
- Real-time updates when users save changes

#### For Team Members

**First Login:**
1. Receive email and password from admin
2. Login via "Login" tab
3. Go to "Availability" tab

**Setting Availability:**
1. Select month
2. Click dates to mark availability
3. Click "Save" - data syncs to GitHub
4. Other team members see updates

### 🛠️ Technical Details

**Architecture:**
```
User (Turkey)     →  GitHub API  →  team-data.json
                        ↓
User (USA)        →  GitHub API  →  team-data.json (reads same data)
```

**Technology Stack:**
- Pure JavaScript (ES6+)
- GitHub REST API v3
- SHA-256 Web Crypto API
- Responsive CSS3

**Browser Support:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

**GitHub API Limits:**
- 5,000 requests/hour (authenticated)
- Recommend caching data for 1-2 minutes

**Data Structure:**
```json
{
  "config": {
    "company": "Your Company",
    "initialized": true,
    "createdAt": "2025-09-29T..."
  },
  "users": {
    "1727625600000": {
      "name": "John Doe",
      "email": "john@company.com",
      "password": "hashed-sha256",
      "role": "Developer",
      "country": "US",
      "timezone": "America/New_York",
      "isAdmin": false
    }
  },
  "availability": {
    "user_id": {
      "2025-10": [1, 2, 5, 8, 9, ...]
    }
  }
}
```

### 📁 Project Structure

```
team-availability-system/
├── index.html              # Main application (3500+ lines)
├── setup.html             # Initial configuration helper
├── tests.html             # Test suite
├── README.md              # This file
├── LICENSE                # MIT License
└── .gitignore            # Git ignore rules
```

### 🔄 Data Flow

1. **User Action** → JavaScript function
2. **JavaScript** → GitHub API call (PUT/GET)
3. **GitHub** → Updates `team-data.json` in repository
4. **Other Users** → Fetch updated data on next load

### 🚦 System Status Indicators

- **Green dot**: Connected to GitHub
- **Yellow dot**: Loading/Connecting
- **Red dot**: Connection error

### 📊 Scalability

**Current Capacity:**
- Users: Unlimited
- API Calls: 5,000/hour
- Data Size: GitHub repo limit (recommended < 100MB)

**Recommended Team Size:** 5-50 users
**For Larger Teams:** Consider dedicated backend solution

### 🔍 Troubleshooting

**"GitHub API Error: 401"**
- Token expired or invalid
- Regenerate token with "repo" scope

**"GitHub API Error: 404"**
- Repository name incorrect
- Repository doesn't exist
- Check username/repo spelling

**"Connection failed"**
- Internet connection issue
- GitHub API down (rare)
- Browser blocking requests (check CORS)

**"Rate limit exceeded"**
- Exceeded 5,000 requests/hour
- Wait 1 hour or implement caching

### 🎯 Roadmap

**Version 2.1 (Planned)**
- [ ] Availability calendar visualization
- [ ] Smart meeting time finder
- [ ] Timezone converter tool
- [ ] Email notifications
- [ ] Export to CSV

**Version 3.0 (Future)**
- [ ] Backend API (Netlify Functions)
- [ ] Real-time updates (webhooks)
- [ ] Mobile app
- [ ] Google Calendar integration
- [ ] Slack integration

### 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

### 📝 License

MIT License - free for personal and commercial use

---

## Türkçe

### 🌟 Temel Özellikler

- **Bulut Tabanlı Depolama**: GitHub repository'sini ücretsiz bulut veritabanı olarak kullanır
- **Global Takım Desteği**: Farklı ülkelerden takım üyeleri aynı veriye erişir
- **Yönetici Paneli**: Kullanıcı oluştur, kimlik bilgisi dağıt, müsaitlik yönet
- **Güvenli Kimlik Doğrulama**: SHA-256 şifre hashleme
- **Müsaitlik Takvimi**: Aylık hafta içi müsaitlik takibi
- **Saat Dilimi Desteği**: Uluslararası takımlar için çoklu saat dilimi
- **Backend Gerektirmez**: Pure HTML/JavaScript uygulaması
- **%100 Ücretsiz**: Hosting veya veritabanı maliyeti yok

### 🚀 Hızlı Başlangıç (25 dakika kurulum)

#### Adım 1: GitHub Veri Repository Oluştur (5 dk)

1. [github.com](https://github.com) adresine git ve giriş yap
2. "New repository" butonuna tıkla
3. Repository adı: `team-availability-data`
4. "Public" seç (hassas veriler için "Private")
5. "Add a README file" işaretle
6. "Create repository" tıkla

#### Adım 2: GitHub Personal Access Token Oluştur (3 dk)

1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" (classic) tıkla
3. Note: "Team Availability System"
4. Expiration: "No expiration" veya "1 year"
5. Scopes: **"repo"** işaretle (private repository'lere tam kontrol)
6. "Generate token" tıkla
7. **TOKEN'I KOPYALA** - Bir daha gösterilmeyecek!

#### Adım 3: Netlify'a Deploy Et (5 dk)

1. [netlify.com](https://netlify.com) adresine git ve giriş yap
2. `index.html` dosyasını sürükle-bırak
3. URL'ni al (örn: `yourapp.netlify.app`)

Alternatif: Herhangi bir statik hosting (GitHub Pages, Vercel, Surge.sh)

#### Adım 4: İlk Sistem Kurulumu (5 dk)

1. Deploy ettiğin URL'yi aç
2. "Kurulum" sekmesine git
3. Bilgileri gir:
   - GitHub kullanıcı adın
   - Repository adı: `team-availability-data`
   - Personal Access Token'ı yapıştır
4. "GitHub Bağlantısını Test Et" tıkla
5. İlk admin hesabını oluştur

#### Adım 5: Kullanıcı Ekle ve Test Et (7 dk)

1. Admin kimlik bilgileriyle giriş yap
2. "Admin" sekmesine git
3. Takım üyelerini ekle (otomatik şifre üretilir)
4. Kimlik bilgilerini güvenli şekilde paylaş
5. Yeni tarayıcı sekmesinde giriş testi yap

### ⚠️ Önemli Güvenlik Notları

#### GitHub Token Güvenliği

**MEVCUT KISITLAMA**: GitHub token tarayıcıda saklanıyor. Bu kabul edilebilir:
- Dahili takım araçları için
- Sadece güvenilir takım üyeleri için
- Hassas olmayan veriler için

**ÖNERİLMEZ**:
- Halka açık uygulamalar
- Güvenilmeyen kullanıcılar
- Çok hassas veriler

**Production Çözümü**: Token'ı gizlemek için Netlify Functions kullanın

#### Şifre Güvenliği

Şifreler SHA-256 ile hashlenmiş. Production için düşünün:
- bcrypt veya Argon2 (daha güvenli)
- Token tabanlı kimlik doğrulama
- OAuth entegrasyonu

### 🛠️ Teknik Detaylar

**Mimari:**
```
Kullanıcı (Türkiye)  →  GitHub API  →  team-data.json
                            ↓
Kullanıcı (ABD)      →  GitHub API  →  team-data.json (aynı veriyi okur)
```

**GitHub API Limitleri:**
- 5,000 istek/saat (authenticated)
- 1-2 dakika cache önerilir

### 📊 Ölçeklenebilirlik

**Mevcut Kapasite:**
- Kullanıcı sayısı: Sınırsız
- API Çağrıları: 5,000/saat
- Veri Boyutu: GitHub repo limiti (< 100MB önerilir)

**Önerilen Takım Boyutu:** 5-50 kullanıcı

### 🔍 Sorun Giderme

**"GitHub API Error: 401"**
- Token süresi dolmuş veya geçersiz
- "repo" yetkisiyle yeni token oluştur

**"Bağlantı başarısız"**
- İnternet bağlantısı problemi
- GitHub API down (nadir)
- Tarayıcı istekleri engelliyor (CORS kontrol et)

**"Rate limit exceeded"**
- 5,000 istek/saat limiti aşıldı
- 1 saat bekle veya cache implement et

### 🎯 Yol Haritası

**Versiyon 2.1 (Planlanıyor)**
- Müsaitlik takvimi görselleştirme
- Akıllı toplantı zamanı bulucu
- Saat dilimi dönüştürücü
- Email bildirimleri

**Versiyon 3.0 (Gelecek)**
- Backend API (Netlify Functions)
- Gerçek zamanlı güncellemeler
- Mobil uygulama
- Google Calendar entegrasyonu

### 📝 Lisans

MIT License - kişisel ve ticari kullanım için ücretsiz

---

**Made with ❤️ for global teams | Global takımlar için ❤️ ile yapıldı**
