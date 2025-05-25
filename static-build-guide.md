# Bike Tour Cappadocia - Statik Site Oluşturma Kılavuzu

Bu kılavuz, Bike Tour Cappadocia web sitesini statik HTML, CSS ve JavaScript dosyaları olarak nasıl derleyeceğinizi ve basit bir web sunucusunda nasıl barındıracağınızı açıklar.

## Statik Site Oluşturma Adımları

### 1. Ön Koşullar

- Node.js (v16 veya üzeri)
- npm veya yarn

### 2. Adım Adım Statik Site Oluşturma

1. **Projeyi Klonlayın veya İndirin**

   ```bash
   git clone [repo-url] bike-tour-cappadocia
   cd bike-tour-cappadocia
   ```

2. **Bağımlılıkları Yükleyin**

   ```bash
   npm install
   ```

3. **Vite Yapılandırmasını Düzenleyin**

   `vite.config.ts` dosyasını açın ve `build` bölümünü şu şekilde güncelleyin:

   ```typescript
   build: {
     outDir: 'static-site',
     emptyOutDir: true,
   }
   ```

4. **Frontend Kodunu Derleyin**

   ```bash
   cd client
   npm run build
   ```

   Bu komut, `static-site` klasöründe statik HTML, CSS ve JavaScript dosyaları oluşturacaktır.

5. **Public Klasöründeki Dosyaları Kopyalayın**

   ```bash
   cp -r public/* ../static-site/
   ```

6. **Resimleri ve Diğer Varlıkları Kopyalayın**

   ```bash
   mkdir -p ../static-site/images
   cp -r public/images/* ../static-site/images/
   ```

### 3. Statik Siteyi Önizleme

Oluşturulan statik siteyi yerel olarak önizlemek için basit bir HTTP sunucusu kullanabilirsiniz:

```bash
npx serve ../static-site
```

## Dağıtım Seçenekleri

Statik sitenizi aşağıdaki platformlardan herhangi birine kolayca dağıtabilirsiniz:

### 1. Geleneksel Web Sunucusu (Apache, Nginx)

1. **Dosyaları Sunucuya Yükleyin**

   ```bash
   scp -r static-site/* kullanici@sunucu:/var/www/html/
   ```

2. **Apache veya Nginx Yapılandırması**

   Apache (.htaccess dosyası):

   ```
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

   Nginx:

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

### 2. GitHub Pages

1. **GitHub'da bir depo oluşturun**
2. **static-site klasöründeki dosyaları yükleyin**
3. **GitHub Pages'i etkinleştirin**

### 3. Netlify veya Vercel

1. **Netlify veya Vercel hesabı oluşturun**
2. **Yeni bir site oluşturun ve static-site klasörünü sürükleyip bırakın**
3. **Özel alan adınızı yapılandırın (isteğe bağlı)**

## Önemli Notlar

- Statik siteler backend işlevselliği içermez. Form gönderimi, dinamik içerik ve veritabanı işlemleri için harici hizmetler (örneğin, Netlify Forms, Firebase vb.) kullanmanız gerekir.
- URL yönlendirmelerinin düzgün çalışması için sunucu yapılandırmanızda SPA (Single Page Application) yönlendirmelerini etkinleştirmeniz gerekir.
- SEO ve sosyal medya paylaşımları için her sayfada uygun meta etiketlerinin bulunduğundan emin olun.

## Sorun Giderme

- **404 Hataları**: Sunucu yapılandırmanızın SPA yönlendirmelerini doğru şekilde ele aldığından emin olun.
- **Görüntüler veya Varlıklar Yüklenmiyor**: Dosya yollarının doğru olduğunu kontrol edin.
- **Bağlantı Sorunları**: Tüm URL'lerin göreceli veya doğru mutlak yollar kullanıldığından emin olun.