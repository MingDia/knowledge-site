---
name: knowledge-site 仓库模板
description: 网站仓库的模板文件和配置
type: reference
---

# knowledge-site 仓库

网站仓库：Nextra 网站代码和渲染逻辑

## 目录结构

```
knowledge-site/
├─ app/
│  ├─ page.tsx
│  ├─ about/page.mdx
│  ├─ now/page.mdx
│  ├─ uses/page.mdx
│  ├─ writing/page.tsx
│  ├─ projects/page.tsx
│  └─ knowledge/
├─ components/
├─ content/              # Actions 自动同步填充
├─ lib/
├─ public/
│  ├─ images/            # Actions 自动同步填充
│  └─ pagefind/
├─ scripts/
│  ├─ validate-frontmatter.ts
│  └─ generate-search.ts
├─ .github/
│  └─ workflows/
│     ├─ sync-content.yml
│     └─ build-check.yml
├─ package.json
├─ next.config.mjs
├─ theme.config.tsx
└─ tsconfig.json
```

## 初始化步骤

1. 在 GitHub 创建仓库 `knowledge-site`
2. 复制本目录下的文件到仓库
3. 配置 Secrets
4. 接入 Vercel

## 需要配置的 Secret

在 `knowledge-site` 仓库里配置：

```
CONTENT_REPO_PAT
```

这个 PAT（Personal Access Token）要有：

- `repo`（读私有仓库）

权限，用来读取内容仓库。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```
