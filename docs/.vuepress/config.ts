import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://cdn.jsdelivr.net/gh/NuStar-Nuclear/resources/nustarweb/nustar-vue.svg",
      },
    ],
  ],
  lang: "zh-CN",
  base: "/vuetify-admin-docs/",
  title: "NuStar Vuetify Admin",
  description: "Documentation of NuStar Vuetify Admin",
  themeConfig: {
    logo: "/nustar-vue.svg",
    repo: "NuStar-Nuclear/vuetify-admin",
    docsRepo: "NuStar-Nuclear/vuetify-admin-docs",
    docsBranch: "master",
    docsDir: "docs",
    danger: "危险",
    tip: "建议",
    warning: "警告",
    editLinkText: "在Github上编辑此页",
    contributorsText: "贡献者",
    lastUpdatedText: "最后修改时间",
    backToHome: "回到首页",
    openInNewWindow: "在新窗口中打开",
    toggleDarkMode: "切换明暗模式",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "公司官网", link: "https://www.nustarnuclear.com" },
    ],
    sidebar: [
      {
        text: "指南",
        collapsible: true,
        children: [
          "/guide/",
          "/guide/update",
          "/guide/structure",
          "/guide/routes",
          "/guide/backendUrl",
          "/guide/backendApi",
          "/guide/vuetify",
          "/guide/vuex",
          "/guide/mock",
          "/guide/i18n",
          "/guide/codeQuality",
          "/guide/experiences",
        ],
      },
      {
        text: "组件",
        collapsible: true,
        children: [
          "/components/vldInputs",
          "/components/dataListCard.md",
          "/components/echarts",
        ],
      },
      {
        text: "测试",
        collapsible: true,
        children: ["/tests/unit", "/tests/e2e"],
      },
      {
        text: "进阶",
        collapsible: true,
        children: ["/advanced/material"],
      },
      {
        text: "实用方法",
        collapsible: true,
        children: ["/utils/"],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
  ],
});
