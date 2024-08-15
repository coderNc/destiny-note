import { defineConfig } from "vitepress";
import pkg from "../package.json";

export default defineConfig({
  lang: "zh-Hans",
  title: "DestinyNotes",
  description: "hhhhh",
  srcDir: "src",
  themeConfig: {
    logo: '/logo.svg',
    aside: true,
    outline: {
      label: "页面导航",
      level: [1, 6],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()}Destiny`,
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "React", link: "/react/react-jsx" },
      {
        text: pkg.version,
        items: [
          {
            text: "更新日志",
            link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
          },
          {
            text: "参与贡献",
            link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "React",
        items: [
          { text: "React About", link: "/react" },
          { text: "React JSX", link: "/react/react-jsx" },
          { text: "脚手架", link: "/react/react-cli" },
          { text: "React组件化开发", link: "/react/react-component" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/coderNc" }],
  },
});
