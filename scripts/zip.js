const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const zip = path.join(root, 'publish.zip');

if (!fs.existsSync(dist)) {
    console.error('dist/ not found. Run "npm run build" first.');
    process.exit(1);
}

fs.rmSync(zip, { force: true });

execFileSync(
    'powershell',
    ['-NoProfile', '-Command', `Compress-Archive -Path '${dist}\\*' -DestinationPath '${zip}' -Force`],
    { stdio: 'inherit' }
);

console.log(`Created ${zip}`);
