# 一些经验

1.`data`一定要有一个初始值(非`undefined`, 可以为`null`)。
:::danger
`data`一定要有一个初始值，不然为非响应式，原因是没初始值的属性为`undefined`，会被`Vue`忽略掉，`vuex`的`state`同理
:::

2. src 中模块的 import 路径以`@`开头, `@`是`/src`的别名。

```ts
import request from "@/utils/request";
import Foo from "@/components/Foo.vue";
```

3.  http 返回状态码大于等于 300 的会被 axios 认为是异常。

4.  若想捕捉某个 request 的异常，一定要在末尾再次抛出异常。

    需要这样做的原因是 request 的最外层有一个 errorHandler, 会统一处理一些常见的异常，并将异常追溯打印在 console。

    你的错误捕捉是在这一步之前的。例如：假设你有`createUser`的 api, 你想在后端验证不通过时在界面弹出消息提醒用户：

```ts
import createUser from "@/api/users";
import { Message } from "@/utils/message";

async function submit() {
  try {
    await createUser();
  } catch (e) {
    if (e.response.status === 401) {
      Message.error("没有权限或填写错误");
    }
    throw e; // 抛出异常，如果没有这个，其他错误就会被忽略，导致Debug困难
  }
}
```
