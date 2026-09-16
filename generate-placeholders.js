const https = require('https');
const fs = require('fs');
const path = require('path');

const imagesToGenerate = [
  { path: 'public/images/gallery/paint-correction-before.jpg', url: 'https://images.unsplash.com/photo-1550524614-ea675ab5e4d2?w=800&q=80' },
  { path: 'public/images/gallery/paint-correction-after.jpg', url: 'https://images.unsplash.com/photo-1612089291168-38c2323ccfb6?w=800&q=80' },
  { path: 'public/images/gallery/interior-before.jpg', url: 'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&q=80' },
  { path: 'public/images/services/diagnostics.jpg', url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80' }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream(filepath))
           .on('error', reject)
           .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`Status Code: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
};

async function generateAll() {
  for (const img of imagesToGenerate) {
    const fullPath = path.join(__dirname, img.path);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    console.log(`Downloading ${img.path}...`);
    try {
      await downloadImage(img.url, fullPath);
      console.log(`Success: ${img.path}`);
    } catch (err) {
      console.error(`Error downloading ${img.path}:`, err.message);
    }
  }
  console.log('All downloads complete.');
}

generateAll();
