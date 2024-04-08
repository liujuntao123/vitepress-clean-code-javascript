import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'clean-code-javascript',
  description: '代码整洁之道-javascript',

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
    },
    en: {
      label: 'english',
      lang: 'en-US', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/',

      // 其余 locale 特定属性...
    },
  },
  themeConfig: {
    // nav: [{ text: '首页', link: '/index' }],
    outline: { level: [2, 3] },

    // sidebar: [
    //   {
    //     // text: 'clean-code-javascript',
    //     items: [
    //       // { text: '中文版', link: '/cn' },
    //       // ...
    //     ],
    //   },
    // ],
  },
});
