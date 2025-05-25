const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Klasörleri oluştur
console.log('📁 Static build klasörleri hazırlanıyor...');
if (!fs.existsSync('static-build')) {
  fs.mkdirSync('static-build');
}
if (!fs.existsSync('static-build/images')) {
  fs.mkdirSync('static-build/images', { recursive: true });
}

// Client'ı derle
try {
  console.log('🔨 Frontend derleniyor...');
  execSync('cd client && npx vite build --outDir ../static-build', { stdio: 'inherit' });
  
  // Public dosyaları kopyala
  console.log('📋 Public dosyalar kopyalanıyor...');
  if (fs.existsSync('client/public')) {
    fs.cpSync('client/public', 'static-build', { recursive: true });
  }
  
  // Resimleri kopyala
  console.log('🖼️ Resimler kopyalanıyor...');
  if (fs.existsSync('client/public/images')) {
    fs.cpSync('client/public/images', 'static-build/images', { recursive: true });
  }
  
  console.log('✅ Build başarıyla tamamlandı!');
  console.log('📂 Statik dosyalar "static-build" klasöründe bulunabilir');
  console.log('🌐 Bu klasörü herhangi bir web sunucusunda barındırabilirsiniz (Nginx, Apache, vb.)');
} catch (error) {
  console.error('❌ Build sırasında hata oluştu:', error);
}