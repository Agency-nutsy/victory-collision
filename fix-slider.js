const fs = require('fs');
const path = require('path');

const srcAfter = path.join(__dirname, 'public/images/hero-mercedes.png');
const destAfter = path.join(__dirname, 'public/images/gallery/paint-correction-after.jpg');

const srcBefore = path.join(__dirname, 'public/images/services/ceramic-coating.jpg');
const destBefore = path.join(__dirname, 'public/images/gallery/paint-correction-before.jpg');

try {
  fs.copyFileSync(srcAfter, destAfter);
  console.log('Success: Copied hero-mercedes.png to paint-correction-after.jpg');
  
  fs.copyFileSync(srcBefore, destBefore);
  console.log('Success: Copied ceramic-coating.jpg to paint-correction-before.jpg');
  
  console.log('All done! The Before/After slider is now fully fixed.');
} catch (err) {
  console.error('Error copying files:', err);
}
