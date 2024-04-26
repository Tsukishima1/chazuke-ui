import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/action-icon',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
  },
  description: 'Lobe UI is an open-source UI component library for building chatbot web apps',
  footer: 'Made with 🤯 by LobeHub',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOJloKoM4CXsCu',
    repo: 'lobehub/lobe-ui',
    repoId: 'R_kgDOJloKoA',
  },
  name: 'chazuke-ui',
  socialLinks: {
    discord: 'https://discord.gg/AYFPHvv2jT',
    github: homepage,
  },
  title: 'Dumi Theme LobeHub',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-lobehub': resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  favicons: ['https://npm.elemecdn.com/@lobehub/assets-favicons/assets/favicon.ico'],
  locales: [{ id: 'en-US', name: 'English' }],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: isProduction ? {} : false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'CHAZUKE-UI',
});
