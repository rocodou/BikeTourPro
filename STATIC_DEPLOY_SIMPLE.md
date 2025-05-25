# Bike Tour Cappadocia - Basit Statik Site Dağıtım Kılavuzu

Bu kılavuz, Bike Tour Cappadocia web sitesini basit bir statik HTML sitesi olarak dağıtmak için adım adım talimatlar içerir. Bu yaklaşım, karmaşık yapılandırmalar olmadan sitenizi hızlıca yayınlamanızı sağlar.

## 1. Gereksinimler

- Herhangi bir web hosting hizmeti (cPanel, Plesk, vb.)
- FTP erişimi veya dosya yükleme imkanı

## 2. HTML/CSS/JavaScript Dosyalarını Hazırlama

### İçerik Sayfaları Oluşturma

Her sayfa için aşağıdaki şablonu kullanarak HTML dosyaları oluşturun. Örneğin:

**index.html** (Ana Sayfa):

```html
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bike Tour Cappadocia | Premium Bisiklet Turları</title>
    <meta name="description" content="Kapadokya'nın büyüleyici manzaralarını bisikletle keşfedin. Profesyonel rehberler eşliğinde peri bacaları ve vadiler arasında unutulmaz bir tur deneyimi.">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">
</head>
<body class="dark-mode">
    <!-- Header -->
    <header>
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="images/logocapo.png" alt="Bike Tour Cappadocia">
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html" class="active">Ana Sayfa</a></li>
                    <li><a href="routes.html">Rotalar</a></li>
                    <li><a href="gallery.html">Galeri</a></li>
                    <li><a href="about.html">Hakkımızda</a></li>
                    <li><a href="contact.html">İletişim</a></li>
                    <li><a href="reservation.html" class="btn-primary">Rezervasyon</a></li>
                </ul>
            </nav>
            <div class="mobile-menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1>Kapadokya'yı İki Tekerlekle Keşfedin</h1>
            <p>Peri bacaları ve tarihi vadiler arasında unutulmaz bisiklet turları</p>
            <a href="routes.html" class="btn-primary">Rotalarımız</a>
        </div>
    </section>

    <!-- Main Content -->
    <main>
        <!-- İçerik buraya gelecek -->
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <img src="images/logocapo.png" alt="Bike Tour Cappadocia">
                    <p>Profesyonel rehberler eşliğinde Kapadokya'nın eşsiz manzaralarını bisikletle keşfedin.</p>
                </div>
                <div class="footer-links">
                    <h3>Hızlı Bağlantılar</h3>
                    <ul>
                        <li><a href="index.html">Ana Sayfa</a></li>
                        <li><a href="routes.html">Rotalar</a></li>
                        <li><a href="gallery.html">Galeri</a></li>
                        <li><a href="about.html">Hakkımızda</a></li>
                        <li><a href="contact.html">İletişim</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>İletişim</h3>
                    <p><i class="fas fa-map-marker-alt"></i> İsali, İçeridere Sk. NO:23, 50180 Göreme/Nevşehir</p>
                    <p><i class="fas fa-phone"></i> +90 537 646 76 55</p>
                    <p><i class="fas fa-envelope"></i> info@biketourcappadocia.com</p>
                </div>
                <div class="footer-social">
                    <h3>Bizi Takip Edin</h3>
                    <div class="social-icons">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Bike Tour Cappadocia. Tüm hakları saklıdır. | Geliştirici: <a href="https://d21.tr" target="_blank">d21.tr</a></p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Button -->
    <a href="https://wa.me/905376467655" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>

    <script src="js/main.js"></script>
</body>
</html>
```

Benzer şekilde diğer sayfalar için de HTML dosyaları oluşturun:
- routes.html
- gallery.html
- about.html
- contact.html
- reservation.html

### CSS Dosyasını Oluşturma

**css/style.css**:

```css
/* Temel Stil ve Değişkenler */
:root {
  --background: #0a0a0a;
  --foreground: #f9f9f9;
  --primary: #ff6118;
  --secondary: #ffcc00;
  --accent: #ff8f00;
  --muted: #404040;
  --muted-foreground: #a5a5a5;
  --border: #333333;
  --input: #2a2a2a;
  --card: #1a1a1a;
  --radius: 0.5rem;
  
  /* Zorluk Seviyeleri */
  --easy: #10b981;
  --moderate: #ff8f00;
  --challenging: #ef4444;
}

/* Genel Stiller */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border-color: var(--border);
}

html, body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
  scroll-behavior: smooth;
  line-height: 1.6;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

body {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 1.75rem;
}

p {
  margin-bottom: 1rem;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--primary);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

section {
  padding: 4rem 0;
}

/* Butonlar */
.btn-primary {
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #e55613;
  color: white;
}

.btn-secondary {
  display: inline-block;
  background-color: transparent;
  color: var(--foreground);
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--primary);
  border-radius: var(--radius);
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: white;
}

/* Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 60px;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  position: relative;
  font-weight: 500;
  padding: 0.5rem 0;
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

nav a:hover::after, 
nav a.active::after {
  width: 100%;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Hero Section */
.hero {
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -88px; /* Header yüksekliği kadar negatif margin */
}

.hero-content {
  max-width: 800px;
  padding: 0 1.5rem;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #f0f0f0;
}

/* Footer */
footer {
  background-color: var(--card);
  padding: 4rem 0 1rem;
  border-top: 1px solid var(--border);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo img {
  height: 60px;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-contact p {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.footer-contact i {
  margin-right: 0.75rem;
  color: var(--primary);
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--muted);
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.social-icons a:hover {
  background-color: var(--primary);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  font-size: 0.9rem;
  color: var(--muted-foreground);
}

/* WhatsApp Button */
.whatsapp-float {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: all 0.3s;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

/* Form Styles */
.form-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--input);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--foreground);
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(255, 97, 24, 0.2);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

/* Kart Bileşenleri */
.card {
  background-color: var(--card);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-img {
  height: 200px;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card:hover .card-img img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

/* Zorluk Seviyesi Etiketleri */
.difficulty {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.difficulty-easy {
  background-color: rgba(16, 185, 129, 0.2);
  color: var(--easy);
}

.difficulty-moderate {
  background-color: rgba(245, 158, 11, 0.2);
  color: var(--moderate);
}

.difficulty-challenging {
  background-color: rgba(239, 68, 68, 0.2);
  color: var(--challenging);
}

/* Responsive Stiller */
@media (max-width: 992px) {
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .hero h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  nav {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
}

/* Mobil Menü */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background);
  z-index: 200;
  padding: 2rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.mobile-menu.active {
  transform: translateX(0);
}

.mobile-menu-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-menu ul {
  list-style: none;
  margin-top: 3rem;
}

.mobile-menu li {
  margin-bottom: 1.5rem;
}

.mobile-menu a {
  font-size: 1.25rem;
  font-weight: 500;
}
```

### JavaScript Dosyasını Oluşturma

**js/main.js**:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü işlevselliği
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mobile-menu');
    
    // Mobil menü içeriği oluşturma
    mobileMenu.innerHTML = `
        <div class="mobile-menu-close"><i class="fas fa-times"></i></div>
        <ul>
            <li><a href="index.html">Ana Sayfa</a></li>
            <li><a href="routes.html">Rotalar</a></li>
            <li><a href="gallery.html">Galeri</a></li>
            <li><a href="about.html">Hakkımızda</a></li>
            <li><a href="contact.html">İletişim</a></li>
            <li><a href="reservation.html" class="btn-primary">Rezervasyon</a></li>
        </ul>
    `;
    
    document.body.appendChild(mobileMenu);
    
    // Mobil menüyü açma
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    // Mobil menüyü kapatma
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Sayfa kaydırma animasyonu
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    // Sayfa yüklendiğinde ve kaydırıldığında kontrol et
    checkFade();
    window.addEventListener('scroll', checkFade);
    
    // İletişim ve rezervasyon formları için işlevsellik
    const contactForm = document.getElementById('contact-form');
    const reservationForm = document.getElementById('reservation-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form değerlerini al
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;
            
            // Basit form doğrulama
            if (!name || !email || !message) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Normalde bu verileri sunucuya göndermek için AJAX kullanırdık
            // Ama statik site olduğu için sadece başarılı mesajı gösterelim
            alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
        });
    }
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form değerlerini al
            const name = reservationForm.querySelector('[name="name"]').value;
            const email = reservationForm.querySelector('[name="email"]').value;
            const date = reservationForm.querySelector('[name="date"]').value;
            const tour = reservationForm.querySelector('[name="tour"]').value;
            
            // Basit form doğrulama
            if (!name || !email || !date || !tour) {
                alert('Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Statik site olduğu için sadece başarılı mesajı gösterelim
            alert('Rezervasyon talebiniz alındı! En kısa sürede size dönüş yapacağız.');
            reservationForm.reset();
        });
    }
    
    // URL parametrelerini alma işlevi
    function getUrlParams() {
        const params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
            params[key] = decodeURIComponent(value);
        });
        return params;
    }
    
    // URL parametrelerine göre form sonuçlarını gösterme
    const params = getUrlParams();
    
    if (params.status === 'success') {
        alert('İşlem başarıyla tamamlandı!');
    } else if (params.status === 'error') {
        alert('İşlem sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    }
});
```

## 3. PHP Form Dosyalarını Oluşturma

### İletişim Formu İçin PHP

**contact.php**:

```php
<?php
// Form gönderildi mi kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini topla
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $phone = $_POST['phone'] ?? '';
    
    // Form verilerini doğrula
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "İsim alanı zorunludur.";
    }
    
    if (empty($email)) {
        $errors[] = "E-posta alanı zorunludur.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Geçerli bir e-posta adresi giriniz.";
    }
    
    if (empty($message)) {
        $errors[] = "Mesaj alanı zorunludur.";
    }
    
    // Hata yoksa e-posta gönder
    if (empty($errors)) {
        $to = "info@biketourcappadocia.com"; // Alıcı e-posta adresini buraya girin
        $subject = "Bike Tour Cappadocia - İletişim Formu";
        
        $email_content = "İsim: $name\n";
        $email_content .= "E-posta: $email\n";
        $email_content .= "Telefon: $phone\n\n";
        $email_content .= "Mesaj:\n$message\n";
        
        $headers = "From: $name <$email>";
        
        // E-posta gönder
        $success = mail($to, $subject, $email_content, $headers);
        
        if ($success) {
            // Başarılı ise yönlendirme
            header("Location: contact.html?status=success");
            exit;
        } else {
            // Başarısız ise yönlendirme
            header("Location: contact.html?status=error");
            exit;
        }
    } else {
        // Hatalar varsa yönlendirme
        $error_message = implode("<br>", $errors);
        header("Location: contact.html?status=validation_error&message=".urlencode($error_message));
        exit;
    }
}

// GET isteği ise contact sayfasına yönlendir
header("Location: contact.html");
exit;
?>
```

### Rezervasyon Formu İçin PHP

**reservation.php**:

```php
<?php
// Form gönderildi mi kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini topla
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $date = $_POST['date'] ?? '';
    $tour = $_POST['tour'] ?? '';
    $people = $_POST['people'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // Form verilerini doğrula
    $errors = [];
    
    if (empty($name)) {
        $errors[] = "İsim alanı zorunludur.";
    }
    
    if (empty($email)) {
        $errors[] = "E-posta alanı zorunludur.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Geçerli bir e-posta adresi giriniz.";
    }
    
    if (empty($date)) {
        $errors[] = "Tarih alanı zorunludur.";
    }
    
    if (empty($tour)) {
        $errors[] = "Tur seçimi zorunludur.";
    }
    
    // Hata yoksa e-posta gönder
    if (empty($errors)) {
        $to = "reservations@biketourcappadocia.com"; // Alıcı e-posta adresini buraya girin
        $subject = "Bike Tour Cappadocia - Rezervasyon Talebi";
        
        $email_content = "İsim: $name\n";
        $email_content .= "E-posta: $email\n";
        $email_content .= "Telefon: $phone\n";
        $email_content .= "Tarih: $date\n";
        $email_content .= "Tur: $tour\n";
        $email_content .= "Kişi Sayısı: $people\n";
        $email_content .= "Mesaj:\n$message\n";
        
        $headers = "From: $name <$email>";
        
        // E-posta gönder
        $success = mail($to, $subject, $email_content, $headers);
        
        if ($success) {
            // Başarılı ise yönlendirme
            header("Location: reservation.html?status=success");
            exit;
        } else {
            // Başarısız ise yönlendirme
            header("Location: reservation.html?status=error");
            exit;
        }
    } else {
        // Hatalar varsa yönlendirme
        $error_message = implode("<br>", $errors);
        header("Location: reservation.html?status=validation_error&message=".urlencode($error_message));
        exit;
    }
}

// GET isteği ise rezervasyon sayfasına yönlendir
header("Location: reservation.html");
exit;
?>
```

## 4. Klasör Yapısını Oluşturma

Aşağıdaki klasör yapısını oluşturun:

```
bike-tour-cappadocia/
│
├── index.html         # Ana sayfa
├── routes.html        # Rotalar sayfası
├── gallery.html       # Galeri sayfası
├── about.html         # Hakkımızda sayfası
├── contact.html       # İletişim sayfası
├── reservation.html   # Rezervasyon sayfası
│
├── css/
│   └── style.css      # Ana stil dosyası
│
├── js/
│   └── main.js        # Ana JavaScript dosyası
│
├── images/            # Resim dosyaları
│   ├── logocapo.png
│   ├── hero-bg.jpg
│   └── ...            # Diğer resimler
│
├── contact.php        # İletişim formu PHP dosyası
└── reservation.php    # Rezervasyon formu PHP dosyası
```

## 5. Web Sunucusuna Yükleme

1. FTP istemcinizi kullanarak (FileZilla vb.) tüm dosyaları web sunucunuza yükleyin.

2. Dosyaların doğru izinlere sahip olduğundan emin olun:
   - HTML, CSS, JS ve resim dosyaları: 644
   - PHP dosyaları: 755

3. Dosyaların düzgün yüklendiğinden emin olmak için web sitenizi ziyaret edin.

## 6. Form İşlemlerini Test Etme

1. İletişim formunu ve rezervasyon formunu test edin:
   - Tüm alanları doldurarak formu gönderin
   - Gönderim sonrası sayfanın doğru şekilde yönlendirildiğini kontrol edin
   - E-postaların alındığını kontrol edin

2. Olası hata mesajlarını kontrol edin:
   - Formda eksik alanlar bırakarak gönderin
   - E-posta alanına geçersiz bir e-posta adresi girin

## 7. Sorun Giderme

### Formlar Çalışmıyorsa

1. PHP'nin web sunucunuzda etkin olduğundan emin olun.
2. Sunucunuzun PHP mail() fonksiyonunu desteklediğini kontrol edin.
3. Dosya izinlerinin doğru olduğundan emin olun.

### Sayfalar Doğru Görüntülenmiyorsa

1. Tarayıcınızın konsolunda hata mesajlarını kontrol edin.
2. CSS ve JavaScript dosyalarının doğru yüklenmediğini kontrol edin.
3. Dosya yollarının doğru olduğundan emin olun.

---

Bu kılavuz, Bike Tour Cappadocia web sitesini minimum karmaşıklıkla statik bir site olarak dağıtmanızı sağlar. Formları PHP ile entegre ederek ziyaretçilerinizden geri bildirim almanıza olanak tanır.