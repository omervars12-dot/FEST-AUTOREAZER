const fs = require('fs');
const path = require('path');

// Railway'de kalıcı veri için bir Volume bağlayıp DATA_DIR=/data yapabilirsin.
const dir = process.env.DATA_DIR || path.join(__dirname, 'data');
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, 'db.json');

let data = { mesai: [], aktif: {}, destek: {}, bans: [], olusumlar: [], meta: {} };
try {
  data = { ...data, ...JSON.parse(fs.readFileSync(file, 'utf8')) };
} catch {}

function save() {
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, file);
}

module.exports = { data, save };
