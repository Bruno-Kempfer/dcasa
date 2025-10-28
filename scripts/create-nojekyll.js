const fs = require('fs');
const path = require('path');
const out = path.join(__dirname, '..', 'out');
try {
  if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, '.nojekyll'), '');
  console.log('Created out/.nojekyll');
} catch (e) {
  console.error('Failed to create out/.nojekyll', e);
  process.exit(1);
}
