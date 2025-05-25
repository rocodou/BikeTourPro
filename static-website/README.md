# Bike Tour Cappadocia - Statik Web Sitesi

Bu klasör, Bike Tour Cappadocia web sitesinin statik HTML/CSS/JS dosyalarını içerir. Bu site, PHP desteği olan herhangi bir web sunucusunda çalıştırılabilir.

## İçerik

- `index.html` - Ana sayfa
- `routes.html` - Bisiklet turları ve rotaları sayfası
- `contact.html` - İletişim sayfası
- `contact.php` - İletişim formu işleme PHP dosyası
- `images/` - Görsel dosyaları

## Kurulum Talimatları

1. Tüm dosyaları web sunucunuzun kök dizinine (veya bir alt dizine) yükleyin
2. PHP'nin sunucunuzda etkin olduğundan emin olun
3. Form işlemlerinin çalışması için PHP dosyalarına çalıştırma izinleri verin (chmod 755)

## SEO Özellikleri

Bu web sitesi aşağıdaki SEO özelliklerini içerir:

- Semantik HTML yapısı
- Meta başlıklar ve açıklamalar
- Anahtar kelimeler
- Alt öznitelikleri ile resim açıklamaları
- Semantik URL yapısı
- Aria-label öznitelikleri ile erişilebilirlik özellikleri
- Hızlı yükleme için optimize edilmiş görseller

## İletişim Formu

İletişim formu, `contact.php` dosyası tarafından işlenir. Form verileri doğrulanır ve ardından e-posta olarak gönderilir.

## Web Sunucusu Yapılandırması

### Apache

Apache web sunucusu için `.htaccess` dosyası:

```
RewriteEngine On
RewriteBase /

# Gerçek dosya veya dizin ise, erişime izin ver
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# PHP dosyası ise, direkt olarak işle
RewriteCond %{REQUEST_FILENAME} \.php$
RewriteRule ^ - [L]

# Diğer tüm istekleri index.html'e yönlendir
RewriteRule ^ index.html [L]
```

### Nginx

Nginx web sunucusu için konfigürasyon:

```
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/static-website;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock; # PHP sürümünüze göre ayarlayın
    }
}
```

## WhatsApp Entegrasyonu

Web sitesi, sağ alt köşede bir WhatsApp iletişim butonu içerir. Bu buton, ziyaretçileri doğrudan WhatsApp sohbetine yönlendirir.

## Daha Fazla Bilgi

Daha fazla bilgi veya destek için lütfen şu adrese e-posta gönderin: info@biketourcappadocia.com