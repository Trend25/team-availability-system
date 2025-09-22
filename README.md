# Team Availability System / Takım Müsaitlik Sistemi

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/team-availability-system)
[![Language](https://img.shields.io/badge/language-JavaScript-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A comprehensive team availability management and smart meeting planning system with bilingual support (TR/EN).

[🇹🇷 Türkçe](#türkçe) | [🇬🇧 English](#english)

---

## English

### 🌟 Features

- **Multi-language Support**: Full Turkish and English interface
- **Team Management**: Add team members with unique access codes
- **Availability Tracking**: Monthly availability calendar for weekdays
- **Smart Meeting Planner**: Find optimal meeting times based on team availability
- **Google Calendar Integration**: Create Google Meet meetings directly
- **Secure Admin Panel**: Password-protected administrator access
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Backend Required**: Pure client-side application

### 🚀 Quick Start

1. **Download the files**:
```bash
git clone https://github.com/yourusername/team-availability-system.git
cd team-availability-system
```

2. **Initial Setup**:
   - Open `setup.html` in your browser
   - Set your admin password
   - The setup file will generate a secure configuration

3. **Launch the application**:
   - Open `index.html` in your browser
   - Login with your admin password

### 🔐 Security Configuration

#### Default Admin Password (First Login Only)
```
SecureAdmin2025!
```

⚠️ **IMPORTANT**: Change this password immediately after first login!

#### How to Change Admin Password

1. **Method 1: Using Setup Script** (Recommended)
   - Run `setup.html` before first use
   - Enter your new password
   - The script will generate a secure hash

2. **Method 2: Manual Configuration**
   - Generate password hash:
   ```javascript
   // In browser console
   async function hashPassword(password) {
       const msgUint8 = new TextEncoder().encode(password);
       const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
       const hashArray = Array.from(new Uint8Array(hashBuffer));
       return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
   }
   
   // Generate your hash
   hashPassword('YourNewPassword').then(console.log);
   ```
   - Create `config.js` file:
   ```javascript
   const APP_CONFIG = {
       ADMIN_PASSWORD_HASH: 'your-generated-hash-here',
       DEFAULT_TIMEZONE: 'Europe/Istanbul',
       DEFAULT_LANGUAGE: 'tr'
   };
   ```

### 📋 Usage Guide

#### For Administrators

1. **Login to Admin Panel**
   - Click "Admin Panel" tab
   - Enter admin password
   - Access team management features

2. **Add Team Members**
   - Enter name, email, and position
   - System generates unique 6-character code
   - Share code securely with team member

3. **View Team Calendar**
   - Click "Calendar View" tab
   - Select month to view
   - See all team members' availability

4. **Plan Meetings**
   - Go to "Meeting Planning" tab
   - Set meeting details and duration
   - Select participants
   - Find optimal time slots

#### For Team Members

1. **Login with Code**
   - Click "Availability Entry" tab
   - Enter your 6-character code
   - Access your availability calendar

2. **Set Availability**
   - Select month
   - Click dates to select
   - Double-click to set availability
   - Use bulk selection for multiple days

3. **Save Changes**
   - Review your entries
   - Click "Save All Availability"

### 🛠️ Technical Details

- **Technology**: Pure JavaScript, HTML5, CSS3
- **Browser Support**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dependencies**: None (standalone application)
- **Security**: SHA-256 password hashing, secure random code generation
- **Storage**: Local browser storage (no server required)

### 📁 Project Structure

```
team-availability-system/
├── index.html           # Main application
├── setup.html          # Initial setup wizard
├── config.js           # Configuration file (generated)
├── tests.html          # Unit test suite
├── README.md           # Documentation
├── LICENSE             # MIT License
└── docs/
    ├── SECURITY.md     # Security guidelines
    ├── CONTRIBUTING.md # Contribution guide
    └── API.md          # API documentation
```

### 🧪 Testing

Run the test suite:
```bash
# Open tests.html in your browser
# Tests run automatically on load
```

Test coverage includes:
- Member management
- Authentication
- Availability tracking
- Language support
- Security features
- Performance benchmarks

---

## Türkçe

### 🌟 Özellikler

- **Çok Dilli Destek**: Tam Türkçe ve İngilizce arayüz
- **Takım Yönetimi**: Benzersiz erişim kodlarıyla takım üyelerini ekleyin
- **Müsaitlik Takibi**: Hafta içi günler için aylık müsaitlik takvimi
- **Akıllı Toplantı Planlayıcı**: Takım müsaitliğine göre optimal toplantı zamanları bulun
- **Google Calendar Entegrasyonu**: Doğrudan Google Meet toplantıları oluşturun
- **Güvenli Yönetici Paneli**: Şifre korumalı yönetici erişimi
- **Responsive Tasarım**: Masaüstü, tablet ve mobil cihazlarda çalışır
- **Backend Gerektirmez**: Tamamen istemci taraflı uygulama

### 🚀 Hızlı Başlangıç

1. **Dosyaları indirin**:
```bash
git clone https://github.com/yourusername/team-availability-system.git
cd team-availability-system
```

2. **İlk Kurulum**:
   - `setup.html` dosyasını tarayıcınızda açın
   - Yönetici şifrenizi belirleyin
   - Kurulum dosyası güvenli bir yapılandırma oluşturacak

3. **Uygulamayı başlatın**:
   - `index.html` dosyasını tarayıcınızda açın
   - Yönetici şifrenizle giriş yapın

### 🔐 Güvenlik Yapılandırması

#### Varsayılan Yönetici Şifresi (Sadece İlk Giriş)
```
SecureAdmin2025!
```

⚠️ **ÖNEMLİ**: Bu şifreyi ilk girişten hemen sonra değiştirin!

#### Yönetici Şifresini Değiştirme

1. **Yöntem 1: Kurulum Script'i Kullanarak** (Önerilen)
   - İlk kullanımdan önce `setup.html` dosyasını çalıştırın
   - Yeni şifrenizi girin
   - Script güvenli bir hash oluşturacak

2. **Yöntem 2: Manuel Yapılandırma**
   - Şifre hash'i oluşturun:
   ```javascript
   // Tarayıcı konsolunda
   async function hashPassword(password) {
       const msgUint8 = new TextEncoder().encode(password);
       const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
       const hashArray = Array.from(new Uint8Array(hashBuffer));
       return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
   }
   
   // Hash'inizi oluşturun
   hashPassword('YeniSifreniz').then(console.log);
   ```
   - `config.js` dosyası oluşturun:
   ```javascript
   const APP_CONFIG = {
       ADMIN_PASSWORD_HASH: 'olusturulan-hash-buraya',
       DEFAULT_TIMEZONE: 'Europe/Istanbul',
       DEFAULT_LANGUAGE: 'tr'
   };
   ```

### 📋 Kullanım Kılavuzu

#### Yöneticiler İçin

1. **Yönetici Paneline Giriş**
   - "Yönetici Paneli" sekmesine tıklayın
   - Yönetici şifresini girin
   - Takım yönetimi özelliklerine erişin

2. **Takım Üyesi Ekleme**
   - Ad, email ve pozisyon bilgilerini girin
   - Sistem 6 karakterli benzersiz kod üretir
   - Kodu güvenli şekilde takım üyesiyle paylaşın

3. **Takım Takvimini Görüntüleme**
   - "Takvim Görünümü" sekmesine tıklayın
   - Görüntülenecek ayı seçin
   - Tüm takım üyelerinin müsaitliğini görün

4. **Toplantı Planlama**
   - "Toplantı Planlama" sekmesine gidin
   - Toplantı detaylarını ve süresini belirleyin
   - Katılımcıları seçin
   - Optimal zaman dilimlerini bulun

#### Takım Üyeleri İçin

1. **Kodla Giriş**
   - "Müsaitlik Girişi" sekmesine tıklayın
   - 6 karakterli kodunuzu girin
   - Müsaitlik takviminize erişin

2. **Müsaitlik Belirleme**
   - Ay seçin
   - Tarihleri seçmek için tıklayın
   - Müsaitlik ayarlamak için çift tıklayın
   - Birden fazla gün için toplu seçim kullanın

3. **Değişiklikleri Kaydetme**
   - Girişlerinizi gözden geçirin
   - "Tüm Müsaitlikleri Kaydet" butonuna tıklayın

### 🛠️ Teknik Detaylar

- **Teknoloji**: Pure JavaScript, HTML5, CSS3
- **Tarayıcı Desteği**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Bağımlılıklar**: Yok (bağımsız uygulama)
- **Güvenlik**: SHA-256 şifre hash'leme, güvenli rastgele kod üretimi
- **Depolama**: Yerel tarayıcı depolaması (sunucu gerektirmez)

### 📁 Proje Yapısı

```
team-availability-system/
├── index.html           # Ana uygulama
├── setup.html          # İlk kurulum sihirbazı
├── config.js           # Yapılandırma dosyası (üretilir)
├── tests.html          # Unit test paketi
├── README.md           # Dokümantasyon
├── LICENSE             # MIT Lisansı
└── docs/
    ├── SECURITY.md     # Güvenlik kılavuzu
    ├── CONTRIBUTING.md # Katkı kılavuzu
    └── API.md          # API dokümantasyonu
```

### 🧪 Test

Test paketini çalıştırın:
```bash
# tests.html dosyasını tarayıcınızda açın
# Testler otomatik olarak çalışır
```

Test kapsamı:
- Üye yönetimi
- Kimlik doğrulama
- Müsaitlik takibi
- Dil desteği
- Güvenlik özellikleri
- Performans ölçümleri

---

## 🤝 Contributing

Please read [CONTRIBUTING.md](docs/CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

For security concerns, please read [SECURITY.md](docs/SECURITY.md) and report vulnerabilities responsibly.

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/team-availability-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/team-availability-system/discussions)
- **Email**: your-email@example.com

## 🙏 Acknowledgments

- Built with vanilla JavaScript for maximum compatibility
- Inspired by modern team collaboration needs
- Thanks to all contributors

---

**Made with ❤️ for better team collaboration**