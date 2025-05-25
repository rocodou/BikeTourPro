import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create static-build directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'static-build'))) {
  fs.mkdirSync(path.join(__dirname, 'static-build'));
}

// Copy client/public to static-build
if (fs.existsSync(path.join(__dirname, 'client', 'public'))) {
  console.log('Copying public files to static-build...');
  const publicFiles = fs.readdirSync(path.join(__dirname, 'client', 'public'));
  
  for (const file of publicFiles) {
    const srcPath = path.join(__dirname, 'client', 'public', file);
    const destPath = path.join(__dirname, 'static-build', file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Create a temporary index.html file with SPA routing support
const indexHtmlPath = path.join(__dirname, 'client', 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Add base href for correct path resolution
indexHtml = indexHtml.replace('<head>', '<head>\n  <base href="/" />');

// Build the client
console.log('Building client...');
exec('cd client && npx vite build --outDir ../static-build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building client: ${error.message}`);
    return;
  }
  
  console.log(stdout);
  
  // Copy attached_assets to static-build/assets
  const assetsDir = path.join(__dirname, 'attached_assets');
  const destAssetsDir = path.join(__dirname, 'static-build', 'assets');
  
  if (fs.existsSync(assetsDir)) {
    console.log('Copying attached assets...');
    if (!fs.existsSync(destAssetsDir)) {
      fs.mkdirSync(destAssetsDir, { recursive: true });
    }
    
    const assetFiles = fs.readdirSync(assetsDir);
    for (const file of assetFiles) {
      const srcPath = path.join(assetsDir, file);
      const destPath = path.join(destAssetsDir, file);
      
      if (fs.statSync(srcPath).isFile()) {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  // Create a .htaccess file for Apache servers to handle SPA routing
  const htaccessContent = `
# Enable rewriting
RewriteEngine On

# If the requested file or directory exists, serve it
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Otherwise, serve index.html
RewriteRule ^ index.html [L]
`;
  
  fs.writeFileSync(path.join(__dirname, 'static-build', '.htaccess'), htaccessContent);
  
  // Create a web.config file for IIS servers
  const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="SPA Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`;
  
  fs.writeFileSync(path.join(__dirname, 'static-build', 'web.config'), webConfigContent);
  
  // Create a README.md file with deployment instructions
  const readmeContent = `# Bike Tour Cappadocia - Static Website

Bu klasör, Bike Tour Cappadocia web sitesinin statik dosyalarını içerir. Bu dosyaları herhangi bir web sunucusunda barındırabilirsiniz.

## Dağıtım Talimatları

1. Bu klasördeki tüm dosyaları web sunucunuzun kök dizinine yükleyin.
2. Web sunucunuzun SPA (Single Page Application) yönlendirmelerini desteklediğinden emin olun:
   - Apache için: .htaccess dosyası zaten dahil edilmiştir.
   - IIS için: web.config dosyası zaten dahil edilmiştir.
   - Nginx için: Aşağıdaki yapılandırmayı kullanın:

\`\`\`nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/static-build;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
\`\`\`

## Teknik Bilgiler

- Bu statik web sitesi React, TypeScript ve Vite kullanılarak oluşturulmuştur.
- Tüm içerik statik dosyalar olarak sunulmaktadır, herhangi bir sunucu tarafı işlem gerektirmez.
- Herhangi bir sorunuz veya probleminiz varsa, lütfen geliştirici ile iletişime geçin.
`;
  
  fs.writeFileSync(path.join(__dirname, 'static-build', 'README.md'), readmeContent);
  
  console.log('✅ Static build created successfully in the "static-build" directory');
  console.log('📂 You can now upload the contents of the "static-build" directory to any web server');
});