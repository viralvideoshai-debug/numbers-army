/* Copies the runtime game files into www/ for Capacitor to bundle into the Android app.
   Excludes assets/source (multi-MB originals) to keep the app small. */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'www');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const copies = ['index.html', 'manifest.json', 'sw.js', 'vendor', 'legal'];
for (const item of copies) {
  fs.cpSync(path.join(root, item), path.join(out, item), { recursive: true });
}
fs.mkdirSync(path.join(out, 'assets'));
const skip = ['source', 'README.txt', 'skins.png', 'bosses.png'];   // reference art, not runtime assets
for (const f of fs.readdirSync(path.join(root, 'assets'))) {
  if (skip.includes(f)) continue;
  fs.cpSync(path.join(root, 'assets', f), path.join(out, 'assets', f));
}

const total = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    f.isDirectory() ? walk(p) : total.push(fs.statSync(p).size);
  }
})(out);
console.log('www/ built:', total.length, 'files,', (total.reduce((a, b) => a + b, 0) / 1048576).toFixed(1), 'MB');
