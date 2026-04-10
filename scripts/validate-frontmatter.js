const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const CONTENT_DIR = path.join(__dirname, '..', 'content')

function validateFrontmatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(content)

  const requiredFields = ['title']
  const missingFields = requiredFields.filter(field => !data[field])

  if (missingFields.length > 0) {
    console.error(`❌ ${filePath}: 缺少必填字段: ${missingFields.join(', ')}`)
    return false
  }

  console.log(`✅ ${filePath}`)
  return true
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

console.log('🔍 开始验证 frontmatter...\n')

let hasErrors = false

if (fs.existsSync(CONTENT_DIR)) {
  walkDirectory(CONTENT_DIR, (filePath) => {
    if (!validateFrontmatter(filePath)) {
      hasErrors = true
    }
  })
}

console.log(`\n${hasErrors ? '❌ 验证失败' : '✅ 验证通过'}`)
process.exit(hasErrors ? 1 : 0)
