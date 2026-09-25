const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const outputFile = path.join(rootDir, 'code_dump.txt');

const includeExtensions = new Set([
  '.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.mjs', '.config.ts', '.config.mjs'
]);

const excludeDirs = new Set([
  'node_modules', '.next', '.git', 'dist', 'build', '.vscode', '.idea', '.gemini'
]);

const excludeFiles = new Set([
  'package-lock.json',
  'code_dump.txt',
  'generate-dump.js'
]);

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    if (excludeDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (includeExtensions.has(ext) && !excludeFiles.has(entry.name)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const files = getFiles(rootDir).sort();

let content = '';
content += '='.repeat(80) + '\n';
content += 'PROJECT CODE DUMP: Car Detailing Template\n';
content += 'Generated: ' + new Date().toISOString() + '\n';
content += 'Total Files: ' + files.length + '\n';
content += '='.repeat(80) + '\n\n';

content += 'TABLE OF CONTENTS:\n';
files.forEach((f, idx) => {
  const rel = path.relative(rootDir, f).replace(/\\/g, '/');
  content += `${idx + 1}. ${rel}\n`;
});
content += '\n' + '='.repeat(80) + '\n\n';

for (const f of files) {
  const rel = path.relative(rootDir, f).replace(/\\/g, '/');
  content += '='.repeat(80) + '\n';
  content += `FILE: ${rel}\n`;
  content += '='.repeat(80) + '\n';
  try {
    const fileData = fs.readFileSync(f, 'utf8');
    content += fileData + '\n\n';
  } catch (err) {
    content += `[Error reading file: ${err.message}]\n\n`;
  }
}

fs.writeFileSync(outputFile, content, 'utf8');
console.log(`Successfully generated ${outputFile} with ${files.length} files (${(fs.statSync(outputFile).size / 1024).toFixed(1)} KB)`);
