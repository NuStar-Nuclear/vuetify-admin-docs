module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/nustar-vue.svg' }]
  ],
  lang: 'zh-CN',
  base: '/nustar-admin-template-docs/',
  title: 'NuStar Admin Frontend Template',
  description: 'Documentation of NuStar Admin Frontend Template',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir',
      },
    },
  },
  themeConfig: {
    logo: '/nustar-vue.svg',
    sidebar: [
      {
        text: '指南', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        link:'/guide/',
        children: [
          '/guide/',
          '/guide/update',
          '/guide/structure',
          '/guide/routes',
          '/guide/backendUrl',
          '/guide/backendApi',
          '/guide/vuex',
          '/guide/mock',
          '/guide/i18n',
          '/guide/codeQuality',
          '/guide/experiences',
          '/guide/distribution',
        ],
      },
      {
        text: '组件', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/components/vldInputs',
          '/components/dataListCard.md',
          '/components/echarts',
        ],
      },
      {
        text: '测试', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/tests/unit', '/tests/e2e'],
      },
      {
        text: '进阶', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/advanced/material'],
      },
      {
        text: '实用方法',
        link: '/utils/',
        collapsable: false,
        sidebarDepth: 2,
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索',
          },
          '/en/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
}
