### 后端 api

所有 api 放置在`/src/api`目录下

### api 格式

每个 api 文件前先导入全局配置好的 request 方法

```ts
import request from '@/utils/request'
```

#### get

```ts
export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get',
  })
```

#### post

```ts
export const createUser = (user: IUserData) =>
  request({
    url: '/users',
    method: 'post',
    data: user,
  })
```

#### put

```ts
export const updateUser = (user: IUserData) =>
  request({
    url: `/users/${user.username}`,
    method: 'put',
    data: user,
  })
```

#### delete

```ts
export const deleteUser = (user: IUserData) =>
  request({
    url: `/users/${user.username}`,
    method: 'delete',
  })
```

### 接收数据

以上 api 返回的都是 AxiosReponse 类型对象，且是 Promise，有两种方式接收数据

- 链式

```ts
submit(){
  return createUser()  // return 一个Promise方便测试
         .then(res=>{
            const data = res.data
           // do something
         }).catch(e=>{
           // error handling
         })
}

```

- async await 语法 (建议, 用同步的方式写异步)

```ts
async submit(){
  try {
    const data = (await createUser()).data
    // do something
  }catch (e) {
    // error handling
  }
}
```
