# Bike Tour Cappadocia - Dağıtım Kılavuzu

Bu belge, Bike Tour Cappadocia web sitesini bir sunucuya nasıl dağıtacağınızı adım adım açıklar.

## Ön Koşullar

- Node.js (v16 veya üzeri)
- npm veya yarn
- Git

## 1. Projeyi Sunucuya Klonlama

```bash
# Sunucunuzda, projeyi klonlamak istediğiniz dizine gidin
cd /var/www

# Projeyi klonlayın
git clone [repo-url] bike-tour-cappadocia
cd bike-tour-cappadocia
```

## 2. Bağımlılıkları Yükleme

```bash
# Tüm bağımlılıkları yükleyin
npm install
```

## 3. Üretim Derlemesi Oluşturma

```bash
# Frontend ve backend'i derleyin
npm run build
```

## 4. Sunucuyu Başlatma

### Doğrudan Çalıştırma

```bash
# Derlenen uygulamayı başlatın
NODE_ENV=production node dist/index.js
```

### PM2 ile Çalıştırma (Önerilen)

PM2, Node.js uygulamalarını üretim ortamında çalıştırmak için mükemmel bir süreç yöneticisidir.

```bash
# PM2'yi yükleyin (henüz yüklemediyseniz)
npm install -g pm2

# Uygulamayı PM2 ile başlatın
pm2 start dist/index.js --name bike-tour-cappadocia

# Sistem yeniden başlatıldığında otomatik başlatma
pm2 startup
pm2 save
```

## 5. Nginx ile Reverse Proxy Yapılandırma

Nginx, uygulamanızın önünde reverse proxy olarak çalıştırılarak daha iyi performans ve güvenlik sağlar.

```bash
# Nginx yükleyin (henüz yüklemediyseniz)
sudo apt-get install nginx

# Nginx yapılandırması oluşturun
sudo nano /etc/nginx/sites-available/bike-tour-cappadocia
```

Aşağıdaki içeriği yapılandırma dosyasına ekleyin:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:5000;  # Node.js uygulamanızın çalıştığı port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Yapılandırmayı etkinleştirin
sudo ln -s /etc/nginx/sites-available/bike-tour-cappadocia /etc/nginx/sites-enabled/

# Nginx yapılandırmasını test edin
sudo nginx -t

# Nginx'i yeniden başlatın
sudo systemctl restart nginx
```

## 6. SSL Sertifikası Ekleme (Let's Encrypt ile)

```bash
# Certbot yükleyin
sudo apt-get install certbot python3-certbot-nginx

# SSL sertifikası alın ve Nginx yapılandırmasını otomatik olarak güncelleyin
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

## Sorun Giderme

- **Uygulama başlatma hatası**: Bağımlılıkların doğru şekilde yüklendiğinden ve derleme işleminin başarılı olduğundan emin olun.
- **404 hatası**: Nginx yapılandırmasının doğru olduğunu ve doğru port numarasını işaret ettiğini kontrol edin.
- **SSL sorunları**: Certbot günlüklerini kontrol edin ve sertifikaların doğru şekilde alındığından emin olun.

## Bakım

- **Güncellemeler**: Yeni değişiklikleri almak için git pull komutu kullanın, ardından bağımlılıkları güncelleyin ve yeniden build edin.
- **Sunucu performansı**: Sunucu kaynaklarını düzenli olarak izleyin ve gerektiğinde ölçeklendirin.
- **Yedekleme**: Düzenli olarak veritabanı ve dosya sistemi yedeklemeleri alın.