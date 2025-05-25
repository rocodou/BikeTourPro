# Bike Tour Cappadocia - Statik Dağıtım Kılavuzu

Bu kılavuz, Bike Tour Cappadocia web sitesini statik dosyalar olarak nasıl derleyeceğinizi ve bir web sunucusuna nasıl yükleyeceğinizi adım adım açıklar.

## 1. Gereksinimler

- Node.js (v16 veya üzeri) kurulu olmalıdır
- NPM veya Yarn paket yöneticisi
- Git (projeyi klonlamak için)

## 2. Projeyi Hazırlama

1. Proje kodunu bilgisayarınıza klonlayın:
   ```bash
   git clone [REPO_URL] bike-tour-cappadocia
   cd bike-tour-cappadocia
   ```

2. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

## 3. Derleme Yapılandırması

1. `vite.config.ts` dosyasını açın ve build yapılandırmasını güncelleyin:

   ```typescript
   build: {
     outDir: 'static-build',
     emptyOutDir: true,
     rollupOptions: {
       output: {
         manualChunks: {
           vendor: ['react', 'react-dom', 'wouter', 'framer-motion'],
         },
       },
     },
   },
   ```

2. `tailwind.config.ts` dosyasında `content` değerini güncelleyin:

   ```typescript
   content: [
     "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   ```

3. CSS sorunlarını gidermek için `client/src/index.css` dosyasını düzenleyin:
   - `@apply` direktifleri yerine doğrudan CSS özellikleri kullanın
   - Örneğin: `@apply border-border;` yerine `border-color: hsl(var(--border));` kullanın

## 4. Statik Derleme Oluşturma

1. Projenin kök dizininde aşağıdaki komutu çalıştırın:
   ```bash
   cd client && npm run build
   ```

2. Derleme işlemi tamamlandığında, `client/dist` dizininde statik dosyalar oluşturulacaktır.

3. Gerekirse ek dosyaları kopyalayın:
   ```bash
   cp -r client/public/* client/dist/
   ```

## 5. Statik Dosyaları Sunucuya Yükleme

### A. Geleneksel Web Sunucusu (Apache/Nginx)

1. Oluşturulan `client/dist` klasöründeki tüm dosyaları FTP veya SCP kullanarak web sunucunuza yükleyin:
   ```bash
   scp -r client/dist/* kullanici@sunucu:/var/www/html/
   ```

2. SPA yönlendirmesi için sunucu yapılandırması:

   **Apache (.htaccess dosyası):**
   ```
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

   **Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

### B. Netlify

1. Netlify hesabı oluşturun: https://www.netlify.com/
2. "New site from Git" seçeneğini kullanın
3. GitHub/GitLab/Bitbucket'taki deponuzu seçin
4. Derleme ayarları:
   - Build command: `cd client && npm run build`
   - Publish directory: `client/dist`
5. Deploy butonuna tıklayın

### C. Vercel

1. Vercel hesabı oluşturun: https://vercel.com/
2. "New Project" seçeneğini kullanın
3. GitHub/GitLab/Bitbucket'taki deponuzu seçin
4. Derleme ayarları:
   - Framework Preset: Vite
   - Root Directory: client
5. Deploy butonuna tıklayın

### D. GitHub Pages

1. `client/dist` klasöründeki dosyaları yeni bir GitHub deposuna yükleyin
2. Depo ayarlarından GitHub Pages'i etkinleştirin
3. Branch olarak "main" ve klasör olarak "/" (root) seçin

## 6. Form İşlemleri İçin Alternatifler

Statik bir web sitesinde form gönderimi gibi işlemler için aşağıdaki hizmetleri kullanabilirsiniz:

1. **Formspree**: https://formspree.io/
   Form etiketine şu şekilde ekleyin:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Netlify Forms**: Netlify üzerinde barındırıyorsanız:
   ```html
   <form name="contact" netlify>
   ```

3. **Google Forms**: Bir Google Form oluşturup iframe olarak ekleyin

## 7. Sorun Giderme

1. **404 Hataları**: Sunucu yapılandırmanın SPA yönlendirmelerini düzgün şekilde ele aldığından emin olun.

2. **Görüntüler Yüklenmiyor**: Tüm kaynak dosyalarının doğru şekilde kopyalandığını kontrol edin.

3. **CSS Sorunları**: Tailwind CSS ayarlarını kontrol edin ve gerekirse manuel CSS ekleyin.

4. **API Sorunları**: Statik bir sitede arka uç API'leri çalışmaz. Formlar için yukarıdaki alternatifleri kullanın.

## 8. SSL Sertifikası Ekleme

1. **Let's Encrypt ile (Apache/Nginx)**:
   ```bash
   sudo apt-get install certbot
   sudo certbot --apache -d your-domain.com
   # veya Nginx için
   sudo certbot --nginx -d your-domain.com
   ```

2. **Netlify/Vercel/GitHub Pages**: Bu platformlar otomatik olarak SSL sağlar.

---

Bu talimatları izleyerek, Bike Tour Cappadocia web sitenizi tamamen statik dosyalar olarak derleyebilir ve herhangi bir web sunucusunda barındırabilirsiniz.