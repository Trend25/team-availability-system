# Team Availability System / Takım Müsaitlik Sistemi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Trend25/team-availability-system)
[![Language Support](https://img.shields.io/badge/languages-TR%20%7C%20EN-green.svg)]()
[![Browser Support](https://img.shields.io/badge/browser-Chrome%20%7C%20Firefox%20%7C%20Safari%20%7C%20Edge-orange.svg)]()

Takım üyelerinin hafta içi müsaitlik durumlarını takip eden ve akıllı toplantı planlama özelliği sunan modern web uygulaması. Sunucu gerektirmeden, tamamen tarayıcı tabanlı çalışır.

A comprehensive team availability management and smart meeting planning system with bilingual support (TR/EN). Works entirely in the browser without requiring a backend server.

## ✨ Özellikler / Features

### 🌍 Çok Dilli Destek / Multi-language Support
- **Tam Türkçe ve İngilizce arayüz** / Full Turkish and English interface
- **Dinamik dil değiştirme** / Dynamic language switching
- **Yerelleştirilmiş tarih formatları** / Localized date formats

### 👥 Takım Yönetimi / Team Management
- **Benzersiz erişim kodları** ile takım üyelerini ekleyin / Add team members with unique access codes
- **Güvenli şifre koruması** / Secure password protection
- **E-posta doğrulaması** / Email validation
- **Otomatik kod üretimi** / Automatic code generation

### 📅 Müsaitlik Takibi / Availability Tracking
- **Hafta içi günler için aylık müsaitlik takvimi** / Monthly availability calendar for weekdays
- **Esnek saat aralığı ayarları** / Flexible time range settings
- **Toplu tarih seçimi** / Bulk date selection
- **Gerçek zamanlı güncelleme** / Real-time updates

### 🤖 Akıllı Toplantı Planlayıcı / Smart Meeting Planner
- **Optimal toplantı zamanları bulma** / Find optimal meeting times based on team availability
- **Katılımcı uygunluk puanlama sistemi** / Participant availability scoring system
- **Zaman aralığı tercihleri** (Sabah/Öğleden sonra/Akşam) / Time range preferences (Morning/Afternoon/Evening)
- **Google Calendar entegrasyonu** / Google Calendar integration

### 🔧 Teknik Özellikler / Technical Features
- **Sunucu gerektirmez** / No backend required - Pure client-side application
- **Responsive tasarım** / Responsive design - Works on desktop, tablet, and mobile devices
- **Modern tarayıcı desteği** / Modern browser support
- **LocalStorage ile veri saklama** / LocalStorage data persistence
- **Otomatik kaydetme** / Auto-save functionality

## 🚀 Hızlı Başlangıç / Quick Start

### Yöntem 1: Kurulum Sihirbazı (Önerilen) / Method 1: Setup Wizard (Recommended)

1. **Dosyaları indirin** / Download the files:
   ```bash
   git clone https://github.com/Trend25/team-availability-system.git
   cd team-availability-system
   ```

2. **Kurulum sihirbazını çalıştırın** / Run the setup wizard:
   - `setup.html` dosyasını tarayıcınızda açın / Open `setup.html` in your browser
   - Yönetici şifrenizi belirleyin / Set your admin password
   - Sistem ayarlarını yapın / Configure system settings
   - Oluşan `config.js` dosyasını kaydedin / Save the generated `config.js` file

3. **Uygulamayı başlatın** / Launch the application:
   - `index.html` dosyasını tarayıcınızda açın / Open `index.html` in your browser
   - Yönetici şifrenizle giriş yapın / Login with your admin password

### Yöntem 2: Manuel Yapılandırma / Method 2: Manual Configuration

1. **Şifre hash'i oluşturun** / Generate password hash:
   ```javascript
   // Tarayıcı konsolunda / In browser console
   async function hashPassword(password) {
       const msgUint8 = new TextEncoder().encode(password);
       const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
       const hashArray = Array.from(new Uint8Array(hashBuffer));
       return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
   }
   
   // Hash'inizi oluşturun / Generate your hash
   hashPassword('YourSecurePassword123!').then(console.log);
   ```

2. **config.js dosyası oluşturun** / Create `config.js` file:
   ```javascript
   const APP_CONFIG = {
       ADMIN_PASSWORD_HASH: 'your-generated-hash-here',
       DEFAULT_TIMEZONE: 'Europe/Istanbul',
       DEFAULT_LANGUAGE: 'tr'
   };
   ```

## 📱 Kullanım Kılavuzu / Usage Guide

### Yönetici İşlemleri / Admin Operations

1. **Yönetici Paneline Giriş** / Login to Admin Panel
   - "Yönetici Paneli" sekmesine tıklayın / Click "Admin Panel" tab
   - Yönetici şifresini girin / Enter admin password
   - Takım yönetimi özelliklerine erişin / Access team management features

2. **Takım Üyesi Ekleme** / Add Team Members
   - Ad, email ve pozisyon bilgilerini girin / Enter name, email, and position
   - Sistem benzersiz 6 karakterli kod üretir / System generates unique 6-character code
   - Kodu güvenli şekilde takım üyesiyle paylaşın / Share code securely with team member

3. **Takım Takvimini Görüntüleme** / View Team Calendar
   - "Takvim Görünümü" sekmesine tıklayın / Click "Calendar View" tab
   - Görüntülenecek ayı seçin / Select month to view
   - Tüm takım üyelerinin müsaitliğini görün / See all team members' availability

### Takım Üyesi İşlemleri / Team Member Operations

1. **Kodla Giriş** / Login with Code
   - "Müsaitlik Girişi" sekmesine tıklayın / Click "Availability Entry" tab
   - 6 karakterli kodunuzu girin / Enter your 6-character code
   - Müsaitlik takviminize erişin / Access your availability calendar

2. **Müsaitlik Belirleme** / Set Availability
   - Ay seçin / Select month
   - Tarihleri seçmek için tıklayın / Click dates to select
   - Müsaitlik ayarlamak için çift tıklayın / Double-click to set availability
   - Birden fazla gün için toplu seçim kullanın / Use bulk selection for multiple days

3. **Değişiklikleri Kaydetme** / Save Changes
   - Girişlerinizi gözden geçirin / Review your entries
   - "Tüm Müsaitlikleri Kaydet" butonuna tıklayın / Click "Save All Availability" button

### Toplantı Planlama / Meeting Planning

1. **Toplantı Bilgileri** / Meeting Information
   - "Toplantı Planlama" sekmesine gidin / Go to "Meeting Planning" tab
   - Toplantı detaylarını ve süresini belirleyin / Set meeting details and duration
   - Tarih aralığını seçin / Select date range

2. **Katılımcı Seçimi** / Select Participants
   - Katılımcıları seçin / Select participants
   - Tercih edilen saat aralığını belirtin / Specify preferred time range

3. **Optimal Zaman Bulma** / Find Optimal Time
   - "En Uygun Zamanı Bul" butonuna tıklayın / Click "Find Optimal Time"
   - Sistem en uygun zaman dilimlerini önerir / System suggests optimal time slots
   - Google Calendar'a doğrudan ekleyebilirsiniz / Add directly to Google Calendar

## 🔒 Güvenlik / Security

### Güvenlik Özellikleri / Security Features
- **SHA-256 şifre hash'leme** / SHA-256 password hashing
- **Güvenli rastgele kod üretimi** / Secure random code generation
- **Yerel veri depolaması** / Local data storage (no server required)
- **Oturum yönetimi** / Session management
- **Otomatik oturum kapatma** / Automatic logout

### Güvenlik Önerileri / Security Recommendations
- İlk kurulumda varsayılan şifreyi değiştirin / Change default password on first setup
- Güçlü şifreler kullanın (min. 12 karakter) / Use strong passwords (min. 12 characters)
- `config.js` dosyasını `.gitignore`'a ekleyin / Add `config.js` to `.gitignore`
- Takım üyesi kodlarını güvenli şekilde paylaşın / Share member codes securely

## 🛠️ Teknical Özellikler / Technical Specifications

### Sistem Gereksinimleri / System Requirements
- **Teknoloji**: Pure JavaScript, HTML5, CSS3
- **Tarayıcı Desteği**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Bağımlılıklar**: Yok (bağımsız uygulama) / None (standalone application)
- **Sunucu**: Gerekmiyor / Not required
- **Veritabanı**: LocalStorage / LocalStorage

### Proje Yapısı / Project Structure
```
team-availability-system/
├── index.html          # Ana uygulama / Main application
├── setup.html          # İlk kurulum sihirbazı / Initial setup wizard
├── config.js           # Yapılandırma dosyası (üretilir) / Configuration file (generated)
├── tests.html          # Unit test paketi / Unit test suite
├── README.md           # Dokümantasyon / Documentation
├── LICENSE             # MIT Lisansı / MIT License
└── docs/
    ├── SECURITY.md     # Güvenlik kılavuzu / Security guidelines
    ├── CONTRIBUTING.md # Katkı kılavuzu / Contribution guide
    └── API.md          # API dokümantasyonu / API documentation
```

### Performans Özellikleri / Performance Features
- **Hafif**: Toplam boyut < 500KB / Lightweight: Total size < 500KB
- **Hızlı**: İlk yükleme < 2 saniye / Fast: Initial load < 2 seconds
- **Responsive**: Mobil uyumlu / Mobile responsive
- **Offline**: İnternet bağlantısı gerektirmez / Works offline

## 🧪 Test Edilmesi / Testing

### Otomatik Testler / Automated Tests
Test paketini çalıştırın / Run the test suite:
```bash
# tests.html dosyasını tarayıcınızda açın
# Open tests.html in your browser
```

Test kapsamı / Test coverage includes:
- ✅ **Üye yönetimi** / Member management
- ✅ **Kimlik doğrulama** / Authentication  
- ✅ **Müsaitlik takibi** / Availability tracking
- ✅ **Dil desteği** / Language support
- ✅ **Güvenlik özellikleri** / Security features
- ✅ **Performans ölçümleri** / Performance benchmarks

### Manuel Test Senaryoları / Manual Test Scenarios

1. **Yönetici İş Akışı** / Admin Workflow
   - [ ] Yönetici girişi / Admin login
   - [ ] Takım üyesi ekleme / Add team member
   - [ ] Kod paylaşımı / Code sharing
   - [ ] Takvim görüntüleme / Calendar viewing

2. **Kullanıcı İş Akışı** / User Workflow  
   - [ ] Kodla giriş / Login with code
   - [ ] Müsaitlik girişi / Availability entry
   - [ ] Toplu işlemler / Bulk operations
   - [ ] Veri kaydetme / Data saving

3. **Toplantı Planlama** / Meeting Planning
   - [ ] Katılımcı seçimi / Participant selection
   - [ ] Optimal zaman bulma / Find optimal times
   - [ ] Google Calendar entegrasyonu / Google Calendar integration

## 📊 Sürüm Geçmişi / Version History

### v1.0.0 - İlk Yayın / Initial Release
- ✅ Temel müsaitlik takibi / Basic availability tracking
- ✅ Takım yönetimi / Team management 
- ✅ Çok dilli destek / Multi-language support
- ✅ Toplantı planlama / Meeting planning
- ✅ Google Calendar entegrasyonu / Google Calendar integration

### Gelecek Özellikler / Upcoming Features
- 🔄 E-posta bildirimleri / Email notifications
- 🔄 İstatistik raporları / Statistics reports
- 🔄 Export/import işlevleri / Export/import functions
- 🔄 Tekrarlayan toplantı desteği / Recurring meetings support
- 🔄 Slack entegrasyonu / Slack integration

## 🤝 Katkıda Bulunma / Contributing

Projeye katkıda bulunmak istiyorsanız / To contribute to this project:

1. **Repository'yi fork edin** / Fork the repository
2. **Feature branch oluşturun** / Create a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Değişikliklerinizi commit edin** / Commit your changes
   ```bash
   git commit -m 'Add: Harika yeni özellik'
   ```
4. **Branch'inizi push edin** / Push your branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Pull Request oluşturun** / Create a Pull Request

Detaylar için [CONTRIBUTING.md](docs/CONTRIBUTING.md) dosyasını okuyun.
Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 Lisans / License

Bu proje MIT lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔐 Güvenlik Bildirimi / Security Disclosure

Güvenlik endişeleriniz için [SECURITY.md](docs/SECURITY.md) dosyasını okuyun ve güvenlik açıklarını sorumlu şekilde bildirin.
For security concerns, please read [SECURITY.md](docs/SECURITY.md) and report vulnerabilities responsibly.

## 📞 İletişim ve Destek / Contact & Support

- **Issues**: [GitHub Issues](https://github.com/Trend25/team-availability-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Trend25/team-availability-system/discussions)
- **Email**: [info@teamavailability.com](mailto:info@teamavailability.com)

## 🙏 Teşekkürler / Acknowledgments

- **Vanilla JavaScript** ile maksimum uyumluluk için geliştirilmiştir / Built with vanilla JavaScript for maximum compatibility
- **Modern takım işbirliği ihtiyaçları**ndan ilham alınmıştır / Inspired by modern team collaboration needs
- **Tüm katkıda bulunanlara** teşekkürler / Thanks to all contributors

## 📈 İstatistikler / Statistics

![GitHub stars](https://img.shields.io/github/stars/Trend25/team-availability-system?style=social)
![GitHub forks](https://img.shields.io/github/forks/Trend25/team-availability-system?style=social)
![GitHub issues](https://img.shields.io/github/issues/Trend25/team-availability-system)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Trend25/team-availability-system)

---

<div align="center">

**Daha iyi takım işbirliği için ❤️ ile yapıldı**  
**Made with ❤️ for better team collaboration**

[🚀 Demo'yu Deneyin](https://trend25.github.io/team-availability-system) • [📚 Dokümantasyon](docs/) • [🐛 Hata Bildir](https://github.com/Trend25/team-availability-system/issues/new)

</div>