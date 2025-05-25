import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  
  console.log('✅ Build başarıyla tamamlandı!');
  console.log('📂 Statik dosyalar "static-build" klasöründe bulunabilir');
  console.log('🌐 Bu klasörü herhangi bir web sunucusunda barındırabilirsiniz (Nginx, Apache, vb.)');
} catch (error) {
  console.error('❌ Build sırasında hata oluştu:', error);
}