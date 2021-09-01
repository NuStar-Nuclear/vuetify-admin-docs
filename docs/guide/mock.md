# mock

前端单独开发时，后端不一定开发好了接口，这时就需要假数据。

此框架使用 mock-server 启动一个 nodejs 服务。是一个真实的 http 服务，
请求获得的响应与真实情况的响应方式并没什么不同，
可以在浏览器的 devtool 中的 network 查看请求与响应完整的状态、headers 和 body。
与后端不一样的地方在，它提供并且应该仅提供假数据，不去与数据库打交道，也不模拟复杂的业务逻辑。

## 写法

假设你有一个 api `get /users/{username}`, 需要 mock，那么

1.在`/mock/`文件夹下的`users.ts`中， 编写一个`getUserByName`的方法并`export`:

```ts
// users.ts
import { Response, Request } from 'express'
const userList: UserType[] = [...]  // 编的一些假用户
export const getUserByName = (req: Request, res: Response) => {
  const { username } = req.params // API上的参数在，req.params中，而
  for (const user of userList) {
    if (user.username === username) {
      return res.json(user)
    }
  }
  return res.status(400).json({
    code: 50004,
    message: 'Invalid User'
  })
}
```

:::tip
API 上的参数在 req.params 中，
而 url 末尾紧跟`？`的参数例如`?email=123@test.com`在`req.query`中,
`axios`请求中的`data`就是`req.body`
:::

2.在`/mock/`文件夹下的`api.ts`中导入并导出`users.ts`:

```ts
// api.ts
export * from "./users";
```

3.在`/mock/`文件夹下的`swagger.yml`中的`paths`下配置：

```yaml
# swagger.yml
paths:
  /users/{username}:
    get:
      operationId: "getUserByName"
```

4.启动 mock-server:

```shell script
yarn mock
```

:::tip
修改 api.ts 中相关联的 ts 文件会触发热更新，不需要重启 mock-server
:::
:::warning
修改 swagger.yml 并不会热更新，这时需要重启 mock-server 或者随便在关联的 ts 中作一个小修改触发热更新
:::
