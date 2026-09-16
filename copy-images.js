const fs = require('fs');
const path = require('path');

const srcBefore = 'C:\\Users\\Tushar\\.gemini\\antigravity-ide\\brain\\37561bea-e702-4073-9033-412a23f99b36\\.user_uploaded\\media_1788416171954.jpg';
const srcAfter = 'C:\\Users\\Tushar\\.gemini\\antigravity-ide\\brain\\37561bea-e702-4073-9033-412a23f99b36\\.user_uploaded\\media_1788416176978.jpg';
const destBefore = path.join(__dirname, 'public', 'images', 'gallery', 'home-before.jpg');
const destAfter = path.join(__dirname, 'public', 'images', 'gallery', 'home-after.jpg');

const dir = path.join(__dirname, 'public', 'images', 'gallery');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.copyFileSync(srcBefore, destBefore);
fs.copyFileSync(srcAfter, destAfter);
console.log('Home page images copied successfully!');
