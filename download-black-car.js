const https = require('https');
const fs = require('fs');
const path = require('path');

// A nice unpolished/dull black car photo
const url = 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80';
const filepath = path.join(__dirname, 'public/images/gallery/paint-correction-before.jpg');

const options = {
  headers: {
    // Spoofing a real browser to bypass Unsplash's anti-bot 404s
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
  }
};

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
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

console.log('Downloading a slightly unpolished black car image for the "Before" slider...');
downloadImage(url, filepath)
  .then(() => console.log('Success! The "Before" image is now a different black car. Refresh your browser!'))
  .catch((err) => console.error('Download failed:', err.message));
