import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  // Eğer kök dizin istenirse index-sample.html'i göster
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index-sample.html';
  }

  // Dosya uzantısını al
  const extname = String(path.extname(filePath)).toLowerCase();
  
  // MIME türleri
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml'
  };

  // İçerik türü
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Dosyayı oku
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        // Eğer sayfa bulunamazsa 404 döndür
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 Not Found - Dosya bulunamadı', 'utf-8');
      } else {
        // Sunucu hatası
        res.writeHead(500);
        res.end('Sunucu hatası: '+error.code+' ..\n');
      }
    } else {
      // Başarılı
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 8080;
server.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
  console.log(`index-sample.html ve contact-sample.html sayfalarını görüntüleyebilirsiniz`);
});