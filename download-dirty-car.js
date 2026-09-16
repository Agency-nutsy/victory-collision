const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash image of a very dirty/rusty old car
const url = 'https://images.unsplash.com/photo-1453491945771-a1e904948959?w=800&q=80';
const filepath = path.join(__dirname, 'public/images/gallery/paint-correction-before.jpg');

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

console.log('Downloading a dirty car image for the "Before" slider...');
downloadImage(url, filepath)
  .then(() => console.log('Success! The "Before" image is now suitably dirty. Refresh your browser!'))
  .catch((err) => console.error('Download failed:', err.message));
