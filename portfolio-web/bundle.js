const fs = require('fs');
const path = require('path');

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(dir, 'script.js'), 'utf8');

// Save modular backup
fs.writeFileSync(path.join(dir, 'index-modular.html'), html, 'utf8');

// Replace <link rel="stylesheet" href="style.css"> with <style>...</style>
let bundled = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + css + '\n</style>');

// Replace <script src="script.js"></script> with <script>...</script>
bundled = bundled.replace('<script src="script.js"></script>', '<script>\n' + js + '\n</script>');

fs.writeFileSync(path.join(dir, 'index.html'), bundled, 'utf8');
console.log('SUCCESS: Bundled style.css and script.js into index.html (' + bundled.length + ' bytes)');
