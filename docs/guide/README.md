# 快速上手

## 安装

```shell script
git clone git@github.com:NuStar-Nuclear/vuetify-admin.git front-project-name
```

::: warning 警告
注意将你的项目远程仓库地址配置另外的地址
:::

::: tip 建议
本项目在 github 上的仓库为 template 仓库，建议打开[GitHub 页面](https://github.com/NuStar-Nuclear/vuetify-admin)点击右上角的`Use this template`按钮以创建新的远程仓库，这样就免去了上述修改远程仓库地址的流程。
:::

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell script:no-line-numbers
cd front-project-name
yarn
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>

```shell script:no-line-numbers
cd front-project-name
npm install
```

  </CodeGroupItem>
</CodeGroup>

## 开发时

### 启动 mock server 模拟后端

如果发现前端连不上 mock server，请移步[后端 url](backendUrl.md)

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell script:no-line-numbers
yarn mock
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>

```shell script:no-line-numbers
npm run mock
```

  </CodeGroupItem>
</CodeGroup>

### 启动开发模式进行开发

<CodeGroup>
  <CodeGroupItem title="YARN">

```shell script:no-line-numbers
yarn serve
```

  </CodeGroupItem>
  <CodeGroupItem title="NPM" active>

```shell script:no-line-numbers
npm run serve
```

  </CodeGroupItem>
</CodeGroup>

## 新建页面

- 在`/src/router/index`中的`constantRoutes`对象里添加你的页面：
  配置方法参考[路由配置](routes.md)

```ts
// /src/router/index
export const constantRoutes: RouteConfig[] = [
  {
    path: "/login",
    component: () => import("@/views/account/Login.vue"),
    meta: { hidden: true },
  },
  {
    path: "/",
    redirect: { path: "/" },
    meta: { hidden: true },
  },
  {
    path: "/foo",
    component: Layout,
    children: [
      {
        path: "/foo",
        component: () => import("@/views/Foo.vue"), // Foo.vue 是下面要创建页面文件，
        meta: {
          title: "foo",
          path: "index",
          icon: "your-icon-name",
        },
      },
    ],
  },
];
```

在`/src/views`下新建`Foo.vue`

```vue
// Foo.vue
<template>
  <div>Foo Page</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Foo",
})
export default class extends Vue {}
</script>

<style scoped></style>
```
