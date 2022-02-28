module.exports = {
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
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
  themeConfig: {
    logo: "/nustar-vue.svg",
    navbar: [
      { text: "指南", link: "/guide/" },
      { text: "公司官网", link: "http://www.nustarnuclear.com" },
    ],
    sidebar: [
      {
        text: "指南", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/guide/",
          "/guide/update",
          "/guide/structure",
          "/guide/routes",
          "/guide/backendUrl",
          "/guide/backendApi",
          "/guide/vuex",
          "/guide/mock",
          "/guide/i18n",
          "/guide/codeQuality",
          "/guide/experiences",
        ],
      },
      {
        text: "组件", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          "/components/vldInputs",
          "/components/dataListCard.md",
          "/components/echarts",
        ],
      },
      {
        text: "测试", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/tests/unit", "/tests/e2e"],
      },
      {
        text: "进阶", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/advanced/material"],
      },
      {
        text: "实用方法",
        collapsable: false,
        sidebarDepth: 1,
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
};
