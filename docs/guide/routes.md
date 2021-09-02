# 侧边栏与路由

该框架使用配置文件的方式定义侧边栏，如有兴趣，实现方法可以查看`/src/views/layout/core/Drawer.vue`以及
`/src/permission.ts`

## 配置方法

基本路由配置方式请参照[vue router](https://router.vuejs.org/zh/api/#routes)

- 需要说明的是利用[nested routes](https://router.vuejs.org/zh/guide/essentials/nested-routes)的原理，
  第一层 route 为 Layout 层，若 children 中只有唯一的 route，将不会形成多级导航，而这唯一的子路由与 Layout 形成了一个 route
  。这样的好处是 Layout 不会被重新渲染，状态得以保留，可以单独对子路由应用过渡动效。
- meta 项,详见类型`IRouteConfig`

```ts
export type IRouteConfig = Omit<RouteConfig, "meta"> & {
  meta: {
    icon: string; // drawer item icon
    drawerGroup?: "admin" | "PUC"; // groups will be separated by divider line
    title: string; // drawer item text
    roles: Role[]; // authorized user groups
    dataCy?: string; // for cypress location
    hidden?: boolean; // hide this route if True
  };
};
```

```ts
// /src/router/modules/your-routes.ts
import Layout from "@/views/layout/Index.vue";
import DemoBar from "@/views/layout/DemoBar.vue";
import { IRouteConfig } from "./types";

const routes: IRouteConfig[] = [
  {
    path: "/demo/plant-list",
    component: Layout,
    redirect: { name: "plantList" },
    meta: {
      title: "nuclear.plantList",
      icon: "$plant",
      roles: ["developer"],
      drawerGroup: "PUC",
      dataCy: "plant-list",
    },
    children: [
      {
        name: "plantList",
        path: "index",
        components: {
          default: () => import("@/views/demo/forms/PlantList.vue"),
          bar: DemoBar,
        },
      },
    ],
  },
];
```
