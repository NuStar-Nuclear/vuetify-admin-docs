### 状态管理

本框架使用[Vuex](https://vuex.vuejs.org/zh/guide/)进行状态管理，编写此类代码前请先熟悉之。
作用：全局变量（组件共享状态），响应式

- 经验
  :::tip
  dynamic module 的`Mutation`与`Action`可以直接调用

非 dynamic module 的`Mutation`与`Action`需要`commit`或`dispatch`，所以最好加`private`
:::

:::danger
`state`一定要有一个初始值，不然为非响应式，原因是没初始值的属性为`undefined`，会被`vuex`忽略掉，`vueComponent `的 data 同理
:::
