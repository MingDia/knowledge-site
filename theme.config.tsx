import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: '我的知识网站',
  project: {
    link: 'https://github.com/MingDia/knowledge-site',
  },
  chat: {
    link: 'https://github.com/MingDia/knowledge-site/discussions',
  },
  docsRepositoryBase: 'https://github.com/MingDia/knowledge-site/blob/main',
  footer: {
    text: '© 2026 我的知识网站',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | 我的知识网站',
    }
  },
}

export default config