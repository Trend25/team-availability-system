# Security Policy / Güvenlik Politikası

## 🔐 Security Features

### Password Security
- **SHA-256 Hashing**: Admin passwords are never stored in plain text
- **Client-side Hashing**: Passwords are hashed in the browser before comparison
- **No Backend Storage**: All data stays in the browser's local storage

### Access Control
- **Unique Access Codes**: Each team member gets a cryptographically random 6-character code
- **Session Management**: Login sessions are maintained per browser tab
- **Data Isolation**: Each member can only view/edit their own availability data

### Best Practices

#### ⚠️ Critical Security Steps After Installation

1. **Remove Default Password Hash Immediately**
   ```javascript
   // DELETE this line from your production code:
   const ADMIN_PASSWORD_HASH = 'a7c96262c21db9a06fd49e307d694fd95f624569f9b35bb3ffacd880440f9787';
   ```

2. **Use External Configuration**
   ```javascript
   // Create config.js (add to .gitignore)
   const APP_CONFIG = {
       ADMIN_PASSWORD_HASH: 'your-secure-hash-here'
   };
   ```

3. **Update Main Application**
   ```javascript
   // In index.html, replace hardcoded hash with:
   const ADMIN_PASSWORD_HASH = APP_CONFIG.ADMIN_PASSWORD_HASH;
   ```

#### 🛡️ Deployment Security Checklist

- [ ] Changed default admin password
- [ ] Removed hardcoded password hash from source
- [ ] Created external config file
- [ ] Added config.js to .gitignore
- [ ] Enabled HTTPS on production server
- [ ] Set appropriate CORS headers
- [ ] Implemented rate limiting for login attempts
- [ ] Regular security audits scheduled

### Vulnerability Reporting

If you discover a security vulnerability, please follow these steps:

1. **DO NOT** create a public GitHub issue
2. Email security details to: security@yourdomain.com
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### Security Headers (for production)

Add these headers to your web server configuration:

```nginx
# Nginx example
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

```apache
# Apache example
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "SAMEORIGIN"
Header always set X-XSS-Protection "1; mode=block"
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

### Data Privacy

- **No External Requests**: Application doesn't send data to external servers
- **Local Storage Only**: All data stored in browser's localStorage
- **No Analytics**: No tracking or analytics code included
- **No Cookies**: Application doesn't use cookies
- **GDPR Compliant**: No personal data collection beyond what user explicitly enters

### Password Requirements

Recommended password policy for admin accounts:

- Minimum 12 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character
- Not a common password (check against known lists)
- Changed every 90 days
- No password reuse for last 5 passwords

### Secure Code Guidelines

1. **Input Validation**
   - All user inputs are sanitized
   - Email validation using regex
   - Time format validation
   - Date format validation

2. **XSS Prevention**
   - No direct HTML injection
   - Text content escaped properly
   - Event handlers properly bound

3. **Data Encryption** (Future Enhancement)
   - Consider encrypting localStorage data
   - Use Web Crypto API for client-side encryption

### Audit Log

The application should maintain an audit log for:
- Admin login attempts (successful/failed)
- Member additions/deletions
- Password changes
- Critical configuration changes

### Security Updates

Check regularly for:
- Browser API deprecations
- New security best practices
- Vulnerability reports
- Dependency updates (when added)

### Compliance

This application is designed to be compliant with:
- GDPR (General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)
- LGPD (Brazilian General Data Protection Law)
- Basic security frameworks (OWASP Top 10)

### Emergency Response

In case of security breach:

1. **Immediate Actions**
   - Change all admin passwords
   - Regenerate all member access codes
   - Clear all browser caches
   - Review access logs

2. **Investigation**
   - Identify breach vector
   - Assess data exposure
   - Document timeline
   - Identify affected users

3. **Communication**
   - Notify affected users within 72 hours
   - Provide clear remediation steps
   - Update security measures
   - Post-mortem analysis

### Security Contacts

- Security Team: security@yourdomain.com
- Emergency Hotline: +XX-XXX-XXXX
- Bug Bounty Program: bugbounty@yourdomain.com

---

**Last Updated**: November 2024
**Next Review**: February 2025