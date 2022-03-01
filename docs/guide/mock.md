# Mock Data

前端单独开发时，后端不一定开发好了接口，这时就需要假数据。

此项目使用 [express](https://expressjs.com/) 启动一个 nodejs 后端服务作为 mock server 来模拟业务数据。根据业务需要也可以直接将此后端作为生产环境下的后端使用。

本项目 mock server 的主角是[swagger](https://swagger.io)，swagger 是一个 REST APIs 文档生成工具，它从代码注释中自动生成文档，可以跨平台，开源，支持大部分语言。swagger 后来衍生出了 OpenAPI 规范 (OAS) 为 RESTful API 定义了一个与语言无关的标准接口。许多开源库可以直接通过 OpenAPI 来生成 API 文档，甚至是直接生成各种编程语言的后端服务。

## tsoa <Badge type="tip" text="new" vertical="middle" />

从包含装饰器的 typescript 源代码中生成 OpenAPI，利用 jsdoc 生成接口描述等纯文本信息。自动将 express route controller 连接到 restful api 上。相当于，只需要写基于 typescript 的后端接口，就自动拥有了后端路由和 OpenAPI，而 OpenAPI 则可以通过[swagger ui](https://swagger.io/tools/swagger-ui/)自动生成可交互文档。

tsoa 生成的 api 自带 runtime validator。

## swagger-ui-express

在启动 mock server 的同时根据 tsoa 输出的自动生成文档网站。

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
