const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'pages', 'docs');

function getTitleFromFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const match = content.match(/^---[\s\S]*?title:\s*(.+)[\s\S]*?---/);
  if (match) {
    return match[1].trim().replace(/^['"]|['"]$/g, '');
  }
  const filename = path.basename(filePath, path.extname(filePath));
  return filename.charAt(0).toUpperCase() + filename.slice(1);
}

function generateMeta(dir) {
  const meta = {};
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
    if (item.isFile()) {
      const ext = path.extname(item.name);
      if (ext === '.mdx' || ext === '.md') {
        const name = path.basename(item.name, ext);
        const filePath = path.join(dir, item.name);
        meta[name] = {
          title: getTitleFromFrontmatter(filePath)
        };
      }
    } else if (item.isDirectory() && !item.name.startsWith('_')) {
      meta[item.name] = {
        title: item.name.charAt(0).toUpperCase() + item.name.slice(1)
      };
      generateMeta(path.join(dir, item.name));
    }
  });

  const metaPath = path.join(dir, '_meta.json');
  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  console.log(`Generated _meta.json at ${metaPath}`);
}

generateMeta(DOCS_DIR);
