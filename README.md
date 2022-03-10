# nustar-vuetify-admin-docs

<p align="center">
  <a href="https://www.nustarnuclear.com" target="blank">
    <img alt="Nustar Nuclear" src="docs/.vuepress/public/nustar-vue.svg" width=300px/>
  </a>
</p>

![example workflow](https://github.com/NuStar-Nuclear/vuetify-admin-docs/actions/workflows/main.yml/badge.svg)
[![gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?)](https://gitmoji.dev)
[<img alt="Deployed with GitHub Pages Deploy Action" src="https://img.shields.io/badge/Deployed With-🚀GitHub Pages Deploy Action-%3CCOLOR%3E?color=0077b6">](https://github.com/JamesIves/github-pages-deploy-action)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme)

The documentation source of [nustar-vuetify-admin](https://docs.nustarnuclear.com/vuetify-admin-docs), powered by [VuePress 2](https://github.com/vuejs/vuepress-next).

## Development

```bash
# clone the project
git clone git@github.com:NuStar-Nuclear/vuetify-admin-docs.git

# install dependency
npm install

# develop
npm run docs:dev
```

open http://localhost:8080/vuetify-admin-docs/

## Deployment

This site is automatically deployed to [Github Pages](https://pages.github.com/) with [Github Actions](https://github.com/features/actions) on push. Although not recommended, you can manually initialize `gh-pages` branch and deploy the site via the `deploy` script in the root directory.

```bash
sh deploy.sh
```

## Maintainer

[📧 Yue JIN](mailto:yjin@nustarnuclear.com)

Copyright © 2021-present Shanghai NuStar Nuclear Power Technology Co., Ltd.
