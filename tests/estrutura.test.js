const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

test('plano de GCS existe', () => {
  assert.ok(fs.existsSync(path.join(root, 'docs', 'Plano_GCS.md')));
});

test('página demonstrativa contém título OngConecta', () => {
  const html = fs.readFileSync(path.join(root, 'src', 'index.html'), 'utf8');
  assert.match(html, /OngConecta/);
});

test('workflow referencia staging e production', () => {
  const yaml = fs.readFileSync(path.join(root, '.github', 'workflows', 'ci.yml'), 'utf8');
  assert.match(yaml, /environment: staging/);
  assert.match(yaml, /environment: production/);
});
