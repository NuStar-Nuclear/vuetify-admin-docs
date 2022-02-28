# 快速上手

## 安装

```shell script
git clone git@github.com:NuStar-Nuclear/vuetify-admin.git front-project-name
```

::: danger
注意将你的项目远程仓库地址配置另外的地址
:::

```shell script
cd front-project-name
yarn
```

## 开发时

### 启动 mock server 模拟后端

如果发现前端连不上 mock server，请移步[后端 url](backendUrl.md)

```shell script
yarn mock
```

### 启动开发模式进行开发

```shell script
yarn serve
```

:::tip
若发现缺少`/src/settings.local.ts`, 请新建此文件并写好内容，此文件为本地设置，会被 git 忽略。

```ts
import { ISettings } from "./settings";

// You can customize below settings :)
const settings: Partial<ISettings> = {
  devServerPort: 9527,
  mockServerPort: 9528,
  auth: true,
};

export default settings;
```

:::
:::danger
注意不要直接在`settings.ts`中修改
:::

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
