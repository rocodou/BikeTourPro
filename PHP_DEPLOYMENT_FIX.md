# PHP ile Statik Site Dağıtımı - Dosya Yolu Düzeltmeleri

Statik bir web sitesi oluşturup PHP ile form işlemlerini entegre ederken, derleme sonrası oluşan `index.html` dosyasında bazı dosya yolu sorunları olabilir. Aşağıdaki adımları izleyerek bu sorunları düzeltebilirsiniz:

## 1. Derleme Sonrası index.html Dosyasını Düzenleme

Vite ile derleme yaptıktan sonra oluşan `index.html` dosyasında aşağıdaki değişiklikleri yapın:

1. JavaScript ve CSS dosyalarının yollarını **göreceli yol** olarak düzenleyin:
   ```html
   <!-- Değiştirilecek -->
   <script type="module" crossorigin src="/assets/index-PIxQ_tAp.js"></script>
   <link rel="stylesheet" crossorigin href="/assets/index-DQdCtfpp.css">
   
   <!-- Yeni hali -->
   <script type="module" crossorigin src="./assets/index-PIxQ_tAp.js"></script>
   <link rel="stylesheet" crossorigin href="./assets/index-DQdCtfpp.css">
   ```

2. `<head>` etiketine bir `<base>` etiketi ekleyin:
   ```html
   <head>
     <!-- Diğer etiketler -->
     <base href="./">
   </head>
   ```

3. Replit geliştirme banner'ını kaldırın:
   ```html
   <!-- Bu satırı silin -->
   <script type="text/javascript" src="https://replit.com/public/js/replit-dev-banner.js"></script>
   ```

## 2. Form İşlemleri için PHP ile Bağlantı

React uygulamanızdaki form bileşenlerini PHP ile çalışacak şekilde düzenlemek için:

1. `Contact.tsx` veya ilgili form bileşenlerinde form etiketini güncelleme:
   ```jsx
   // Değiştirin: 
   <form onSubmit={handleSubmit}>
   
   // Yeni hali:
   <form action="contact.php" method="POST">
   ```

2. Input alanlarına `name` özelliği ekleme:
   ```jsx
   // Değiştirin:
   <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
   
   // Yeni hali:
   <input type="text" name="name" defaultValue={name} />
   ```

## 3. React Router veya Wouter SPA Yönlendirmesi için .htaccess Düzenleme

Tek sayfalı uygulamalarda (SPA) yönlendirme çalışması için root dizinine bir `.htaccess` dosyası ekleyin:

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

## 4. Derleme ve Dağıtım Kontrol Listesi

- [x] Frontend kodunu derleyin (`npm run build` veya `cd client && npm run build`)
- [x] `index.html` dosyasındaki dosya yollarını düzeltin
- [x] PHP dosyalarını dist klasörüne ekleyin
- [x] `.htaccess` dosyasını dist klasörüne ekleyin
- [x] Tüm dosyaları web sunucunuza yükleyin
- [x] PHP dosyalarının çalıştırılabilir izinlere sahip olduğunu kontrol edin (755)
- [x] Form işlemlerini test edin

## 5. Sorun Giderme ve Kontroller

- **Sayfa Yüklenmiyor veya JavaScript Çalışmıyor**: Tarayıcı konsolunda hataları kontrol edin, genellikle dosya yolu sorunlarından kaynaklanır
- **PHP Formları Çalışmıyor**: Sunucunuzda PHP'nin etkin olduğundan emin olun
- **404 Hatası**: `.htaccess` dosyasının doğru şekilde yüklendiğini ve mod_rewrite'ın etkin olduğunu kontrol edin
- **Görseller Yüklenmiyor**: Görsellerin yollarını kontrol edin, gerekirse CSS dosyalarındaki yolları da düzeltin

---

Bu düzeltmelerle birlikte, PHP destekli statik siteniz doğru şekilde çalışmalıdır. Formlar düzgün çalıştığında, kullanıcılar tarafından gönderilen bilgiler belirttiğiniz e-posta adresine gönderilecektir.