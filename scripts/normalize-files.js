const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'pages', 'docs');

function normalizeFilename(filename) {
  let name = filename;
  const ext = path.extname(name);
  
  if (ext === '.md') {
    name = name.slice(0, -3) + '.mdx';
  }
  
  return name;
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isFile()) {
      const ext = path.extname(item.name);
      if (ext === '.md' || ext === '.mdx') {
        const newName = normalizeFilename(item.name);
        if (newName !== item.name) {
          const newPath = path.join(dir, newName);
          fs.renameSync(fullPath, newPath);
          console.log(`Renamed: ${item.name} -> ${newName}`);
        }
      }
    } else if (item.isDirectory() && !item.name.startsWith('_')) {
      processDirectory(fullPath);
    }
  });
}

processDirectory(DOCS_DIR);
console.log('File normalization complete!');
