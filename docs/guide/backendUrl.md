### 动态的后端 Url 配置

新建`/public/config.json`，此文件是被 git 忽略掉的。

输入以下内容保存，api 的值为后端的 baseUrl。

```json
{
  "api": "http://localhost:9528/mock-api/v1"
}
```

::: tip
生产环境途中若想更改后端 baseUrl，不需要重新编译，只需要更改此内容即可。
:::
::: warning
如果你使用的是 mock-server，请注意将端口号对应起来，mock-server 的端口号设置在/src/settings.ts,
请在 settings.local.ts 中修改，
:::
