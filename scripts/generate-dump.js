const fs = require('fs');
const path = require('path');

const excludeDirs = new Set([
  'node_modules',
  '.next',
  '.git',
  '.gemini',
  'WhatsApp Unknown 2026-09-25 at 10.45.12 PM',
  '.tempmediaStorage'
]);

const codeExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.css',
  '.mjs',
  '.cjs',
  '.md',
  '.html'
]);

function walk(dir, fileList = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (excludeDirs.has(item)) continue;
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else {
      const ext = path.extname(item).toLowerCase();
      const base = path.basename(item);
      if (
        codeExtensions.has(ext) &&
        base !== 'package-lock.json' &&
        base !== 'project-code-dump.txt' &&
        !base.endsWith('.log') &&
        base !== 'generate-dump.js'
      ) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const rootDir = path.resolve(__dirname, '..');
const files = walk(rootDir).sort();

let output = '';
output += '================================================================================\n';
output += 'VICTORY COLLISION & AUTO REPAIR - COMPLETE CODEBASE DUMP\n';
output += 'Generated on: ' + new Date().toISOString() + '\n';
output += 'Total Source Files: ' + files.length + '\n';
output += '================================================================================\n\n';

output += 'TABLE OF CONTENTS:\n';
files.forEach((f, idx) => {
  const rel = path.relative(rootDir, f).split(path.sep).join('/');
  output += (idx + 1).toString().padStart(3, ' ') + '. ' + rel + '\n';
});
output += '\n================================================================================\n\n';

for (const f of files) {
  const rel = path.relative(rootDir, f).split(path.sep).join('/');
  output += '================================================================================\n';
  output += 'FILE: ' + rel + '\n';
  output += '================================================================================\n';
  try {
    const content = fs.readFileSync(f, 'utf8');
    output += content + '\n\n';
  } catch (err) {
    output += '[Error reading file: ' + err.message + ']\n\n';
  }
}

const outputPath = path.join(rootDir, 'project-code-dump.txt');
fs.writeFileSync(outputPath, output, 'utf8');
const stats = fs.statSync(outputPath);
console.log(`Generated ${outputPath} (${(stats.size / 1024).toFixed(1)} KB, ${files.length} files)`);
