const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');

const dirs = ['css', 'js', 'partials', 'pics', 'logo', 'simbo'];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const file of fs.readdirSync(root, { withFileTypes: true })) {
    if (file.isFile() && file.name.endsWith('.html')) {
        fs.copyFileSync(path.join(root, file.name), path.join(dist, file.name));
    }
}

for (const dir of dirs) {
    const src = path.join(root, dir);
    if (fs.existsSync(src)) {
        fs.cpSync(src, path.join(dist, dir), { recursive: true });
    }
}

console.log(`Publish files ready in ${dist}`);
