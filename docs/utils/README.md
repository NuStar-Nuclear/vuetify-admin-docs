## `Message`

全局消息

```ts
import { Message } from '@/utils/message'
```

#### `Message.info(text: string)` 通知

#### `Message.success(text: string)` 成功

#### `Message.warn(text: string)` 警告

#### `Message.error(text: string)` 错误

---

## `formatters`

公用的格式化集

```ts
import { formatters } from '@/utils/formatter'
```

#### `formatters.`

#### d1-d5: 保留 1 位至 5 位小数

#### e2-e5: 保留 2 位至 5 位小数的科学计数法

...等

---

## `download`

下载从后端传过来的文件

```ts
import { download } from '@/utils/download'

async downloadReport() {
  const response = await getReport(1)
  download(response, '123.pdf')
}
```

---

## `isPermitted`

是否有权限

:::warning
注意，这跟后端配置的用户组权限有关，这里写死了 developer > admin > staff > guest
:::

```ts
import { Role } from '@/api/types'
import UserModule from '@/store/modules/user'
declare function isPermitted(
  allowedRoles: Role[],
  roles: Role[] = UserModule.roles
): boolean
```

```ts
import { isPermitted } from '@/utils/permission'
import UserModule from '@/store/modules/user'
const allowRoles = ['admin']
const currentRoles = ['staff']
const accessible = isPermitted(allowRoles, currentRoles) // False 因为staff<admin
```
