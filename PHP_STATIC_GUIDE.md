# Bike Tour Cappadocia - PHP ile Statik Site Dağıtım Kılavuzu

Bu kılavuz, Bike Tour Cappadocia web sitesini PHP desteği olan bir web sunucusunda nasıl dağıtacağınızı adım adım açıklar. Bu yaklaşım, tamamen statik bir web sitesi oluşturmanızı ve form işlemleri gibi backend işlevselliği için PHP kullanmanızı sağlar.

## 1. Gereksinimler

- PHP destekli bir web sunucusu (Apache veya Nginx + PHP-FPM)
- Node.js (v16 veya üzeri) - derleme için
- FTP veya SSH erişimi olan bir web hosting hesabı

## 2. Statik HTML Dosyalarını Oluşturma

### A. Vite Yapılandırmasını Düzenleme

1. `vite.config.ts` dosyasını açın ve aşağıdaki şekilde güncelleyin:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
```

### B. Index.html Dosyasını Düzenleme

1. `client/index.html` dosyasını açın ve herhangi bir mutlak yolu göreceli yola dönüştürün.

### C. Derleme İşlemi

1. Terminalde aşağıdaki komutları çalıştırın:

```bash
# Gerekli bağımlılıkları yükleyin
npm install

# Frontend'i derleyin
cd client && npm run build
```

2. Derleme tamamlandığında, `dist` klasöründe statik HTML, CSS ve JavaScript dosyaları oluşturulacaktır.

## 3. PHP Form İşlemleri İçin Dosyalar Oluşturma

### A. İletişim Formu için PHP Dosyası

1. `dist` klasöründe `contact.php` dosyası oluşturun:

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
            // Başarılı ise JSON yanıtı döndür (AJAX için)
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
                header('Content-Type: application/json');
                echo json_encode(['success' => true, 'message' => 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.']);
                exit;
            }
            
            // Normal form gönderimi için yönlendirme
            header("Location: contact.html?status=success");
            exit;
        } else {
            // Başarısız ise JSON yanıtı döndür (AJAX için)
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
                header('Content-Type: application/json');
                echo json_encode(['success' => false, 'message' => 'Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.']);
                exit;
            }
            
            // Normal form gönderimi için yönlendirme
            header("Location: contact.html?status=error");
            exit;
        }
    } else {
        // Hatalar varsa JSON yanıtı döndür (AJAX için)
        if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
            header('Content-Type: application/json');
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }
        
        // Normal form gönderimi için hataları göster
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

### B. Rezervasyon Formu için PHP Dosyası

1. `dist` klasöründe `reservation.php` dosyası oluşturun:

```php
<?php
// Form gönderildi mi kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini topla
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $tourDate = $_POST['tourDate'] ?? '';
    $tourType = $_POST['tourType'] ?? '';
    $groupSize = $_POST['groupSize'] ?? '';
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
    
    if (empty($phone)) {
        $errors[] = "Telefon alanı zorunludur.";
    }
    
    if (empty($tourDate)) {
        $errors[] = "Tur tarihi seçmelisiniz.";
    }
    
    if (empty($tourType)) {
        $errors[] = "Tur tipi seçmelisiniz.";
    }
    
    if (empty($groupSize)) {
        $errors[] = "Grup büyüklüğü seçmelisiniz.";
    }
    
    // Hata yoksa e-posta gönder
    if (empty($errors)) {
        $to = "reservations@biketourcappadocia.com"; // Alıcı e-posta adresini buraya girin
        $subject = "Bike Tour Cappadocia - Yeni Rezervasyon Talebi";
        
        $email_content = "İsim: $name\n";
        $email_content .= "E-posta: $email\n";
        $email_content .= "Telefon: $phone\n";
        $email_content .= "Tur Tarihi: $tourDate\n";
        $email_content .= "Tur Tipi: $tourType\n";
        $email_content .= "Grup Büyüklüğü: $groupSize\n";
        $email_content .= "Ek Mesaj:\n$message\n";
        
        $headers = "From: $name <$email>";
        
        // E-posta gönder
        $success = mail($to, $subject, $email_content, $headers);
        
        if ($success) {
            // Başarılı ise JSON yanıtı döndür (AJAX için)
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
                header('Content-Type: application/json');
                echo json_encode(['success' => true, 'message' => 'Rezervasyon talebiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.']);
                exit;
            }
            
            // Normal form gönderimi için yönlendirme
            header("Location: reservation.html?status=success");
            exit;
        } else {
            // Başarısız ise JSON yanıtı döndür (AJAX için)
            if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
                header('Content-Type: application/json');
                echo json_encode(['success' => false, 'message' => 'Rezervasyon talebiniz gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.']);
                exit;
            }
            
            // Normal form gönderimi için yönlendirme
            header("Location: reservation.html?status=error");
            exit;
        }
    } else {
        // Hatalar varsa JSON yanıtı döndür (AJAX için)
        if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
            header('Content-Type: application/json');
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }
        
        // Normal form gönderimi için hataları göster
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

### C. Bülten Aboneliği için PHP Dosyası

1. `dist` klasöründe `newsletter.php` dosyası oluşturun:

```php
<?php
// Form gönderildi mi kontrol et
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form verilerini topla
    $email = $_POST['email'] ?? '';
    
    // Form verilerini doğrula
    $errors = [];
    
    if (empty($email)) {
        $errors[] = "E-posta alanı zorunludur.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Geçerli bir e-posta adresi giriniz.";
    }
    
    // Hata yoksa e-posta listesine ekle
    if (empty($errors)) {
        // Burada e-posta adresini bir dosyaya veya veritabanına kaydedebilirsiniz
        // Basit bir örnek: e-posta adreslerini bir metin dosyasına kaydetme
        $file = fopen("subscribers.txt", "a");
        fwrite($file, $email . "\n");
        fclose($file);
        
        // Ayrıca bir bildirim e-postası gönderebilirsiniz
        $to = "info@biketourcappadocia.com";
        $subject = "Yeni Bülten Aboneliği";
        $message = "Yeni bir bülten abonesi: $email";
        $headers = "From: website@biketourcappadocia.com";
        
        mail($to, $subject, $message, $headers);
        
        // Başarılı ise JSON yanıtı döndür (AJAX için)
        if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
            header('Content-Type: application/json');
            echo json_encode(['success' => true, 'message' => 'Bültene başarıyla abone oldunuz.']);
            exit;
        }
        
        // Normal form gönderimi için ana sayfaya yönlendir
        header("Location: index.html?newsletter=success");
        exit;
    } else {
        // Hatalar varsa JSON yanıtı döndür (AJAX için)
        if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {
            header('Content-Type: application/json');
            echo json_encode(['success' => false, 'errors' => $errors]);
            exit;
        }
        
        // Normal form gönderimi için ana sayfaya yönlendir
        header("Location: index.html?newsletter=error");
        exit;
    }
}

// GET isteği ise ana sayfaya yönlendir
header("Location: index.html");
exit;
?>
```

## 4. Frontend Formlarını PHP ile Uyumlu Hale Getirme

### A. İletişim Formu

1. React kodu içinde iletişim formu bileşenini aşağıdaki gibi düzenleyin:

```jsx
// İletişim formu için örnek değişiklik
<form action="contact.php" method="POST">
  <input type="text" name="name" placeholder="Adınız" required />
  <input type="email" name="email" placeholder="E-posta Adresiniz" required />
  <input type="tel" name="phone" placeholder="Telefon Numaranız" />
  <textarea name="message" placeholder="Mesajınız" required></textarea>
  <button type="submit">Gönder</button>
</form>
```

### B. Rezervasyon Formu

1. React kodu içinde rezervasyon formu bileşenini aşağıdaki gibi düzenleyin:

```jsx
// Rezervasyon formu için örnek değişiklik
<form action="reservation.php" method="POST">
  <input type="text" name="name" placeholder="Adınız" required />
  <input type="email" name="email" placeholder="E-posta Adresiniz" required />
  <input type="tel" name="phone" placeholder="Telefon Numaranız" required />
  <input type="date" name="tourDate" required />
  <select name="tourType" required>
    <option value="">Tur Tipi Seçin</option>
    <option value="6-day-tour">6 Günlük Tur</option>
    <option value="day-tour">Günlük Tur</option>
    <option value="custom-tour">Özel Tur</option>
  </select>
  <select name="groupSize" required>
    <option value="">Grup Büyüklüğü Seçin</option>
    <option value="1">1 Kişi</option>
    <option value="2">2 Kişi</option>
    <option value="3">3 Kişi</option>
    <option value="4+">4+ Kişi</option>
  </select>
  <textarea name="message" placeholder="Ek Notlarınız"></textarea>
  <button type="submit">Rezervasyon Yap</button>
</form>
```

### C. Bülten Aboneliği Formu

1. React kodu içinde bülten aboneliği formunu aşağıdaki gibi düzenleyin:

```jsx
// Bülten formu için örnek değişiklik
<form action="newsletter.php" method="POST">
  <input type="email" name="email" placeholder="E-posta Adresiniz" required />
  <button type="submit">Abone Ol</button>
</form>
```

## 5. Dağıtım İçin Tüm Dosyaları Hazırlama

1. `dist` klasöründeki tüm HTML, CSS ve JavaScript dosyalarını ve yukarıda oluşturulan PHP dosyalarını hazırlayın.

2. İçerisinde yer alan tüm dosya isimlerinin küçük harflerle yazılmış olduğundan emin olun (Linux sunucuları büyük/küçük harf duyarlıdır).

3. `.htaccess` dosyası oluşturun ve SPA yönlendirmesi için yapılandırın:

```
# Enable rewriting
RewriteEngine On

# If the request is for a real file or directory, serve it
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# If the request is for a PHP file, serve it
RewriteCond %{REQUEST_FILENAME} \.php$
RewriteRule ^ - [L]

# Otherwise, serve index.html
RewriteRule ^ index.html [L]
```

## 6. Sunucuya Yükleme

1. FTP istemcinizi kullanarak (FileZilla vb.) tüm dosyaları web sunucunuza yükleyin.

2. PHP dosyalarının çalıştırılabilir izinlere sahip olduğundan emin olun (genellikle 755).

3. Web sunucunuzda PHP'nin etkin olduğundan emin olun. Çoğu shared hosting hizmetinde PHP varsayılan olarak etkindir.

## 7. Form İşlemlerini Test Etme

1. Web sitenizi ziyaret edin ve her bir formu test edin:
   - İletişim formu
   - Rezervasyon formu
   - Bülten aboneliği formu

2. Form gönderimlerinden sonra doğru yönlendirmelerin ve hata mesajlarının çalıştığından emin olun.

3. E-postaların doğru şekilde gönderildiğini kontrol edin.

## 8. Sorun Giderme

### A. PHP Dosyaları Çalışmıyorsa

1. Sunucunuzda PHP'nin etkin olduğundan emin olun.
2. PHP sürümünüzü kontrol edin (PHP 7.0 veya üzeri önerilir).
3. PHP hata günlüklerini kontrol edin.

### B. E-postalar Gönderilmiyorsa

1. Sunucunuzun mail() fonksiyonunu desteklediğinden emin olun.
2. Alternatif olarak, PHP Mailer gibi bir kütüphane kullanmayı düşünün.

### C. Form Yönlendirmeleri Çalışmıyorsa

1. `.htaccess` dosyasının doğru yapılandırıldığından emin olun.
2. Sunucunuzun mod_rewrite modülünün etkin olduğundan emin olun.

---

Bu kılavuzu takip ederek, Bike Tour Cappadocia web sitenizi PHP desteği ile birlikte statik dosyalar olarak dağıtabilir ve form işlemleri gibi temel backend işlevselliğini etkinleştirebilirsiniz.