module.exports = {
  title: 'Nustar vuetify front-end framework docs',
  description: 'Docs',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir',
      },
    },
  },
  themeConfig: {
    sidebar: [
      {
        title: '指南', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
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
        title: '组件', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/components/vldInputs',
          '/components/dataListCard.md',
          '/components/echarts',
        ],
      },
      {
        title: '测试', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/tests/unit', '/tests/e2e'],
      },
      {
        title: '进阶', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ['/advanced/material'],
      },
      {
        title: '实用方法',
        path: '/utils/',
        collapsable: true,
        sidebarDepth: 2,
      },
    ],
  },
}
