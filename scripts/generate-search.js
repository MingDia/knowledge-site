const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = path.join(__dirname, '..', 'content')
const OUTPUT_FILE = path.join(__dirname, '..', 'public', 'pagefind', 'search-index.json')

function extractText(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data, content: markdown } = matter(content)

  return {
    title: data.title || path.basename(filePath, path.extname(filePath)),
    description: data.description || '',
    tags: data.tags || [],
    content: markdown.substring(0, 500),
    path: filePath.replace(CONTENT_DIR, '').replace(/\\/g, '/'),
  }
}

function walkDirectory(dir, callback) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      walkDirectory(filePath, callback)
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      callback(filePath)
    }
  }
}

console.log('🔍 生成搜索索引...\n')

const index = []

if (fs.existsSync(CONTENT_DIR)) {
  walkDirectory(CONTENT_DIR, (filePath) => {
    index.push(extractText(filePath))
  })
}

const outputDir = path.dirname(OUTPUT_FILE)
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(index, null, 2))

console.log(`✅ 已生成 ${index.length} 条搜索索引`)
