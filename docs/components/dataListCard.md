### DataListCard

#### 用处

统一的数据表，包含多级表头、排序、批量的增删改、导出为 excel、导入 excel 等便利功能。

#### Props

包括但不限于以下 props
| prop | type | description |
| ------------- |:----------------:| :-----|
| `headers` | `DataListHeader<T>` | 配置要展示的 fields，`T`为数据表展示的数据的类型，比如`Cycle` |
| `items` | `T[]` | 数据列表，即每一行为一个 cycle 的内容 |
| `defaultEditModeActive` | `boolean` | 默认是否为编辑模式 |
| `defaultFixedHeader` | `boolean` | 默认是否固定表头 |
| `disableSort` | `boolean` | `True` 关闭排序， 默认`False` |
| `editInline` | `boolean` | 是否在表中直接编辑，如`False`，则点击 edit 后不会将单元格的变成编辑模式，情形：fields 太多，行内放不下，需要用 dialog 方式 |
| `onGetRules` | `(index:number, key: string, items: DataListItem<any>[])=>string\|object`| 动态获取 rules 的方法 |
| `visibleOptions` | `DLCVisibleOption` | 隐藏某些内容，详情请看类型`DLCVisibleOption` |
| `actionsOptions` | `DLCActionsOptions` | 选择开放哪些 table 级`actions` |
| `contextMenuOptions` | `DLCCMenuOptions` | 选择开放右键菜单上的哪些`actions` |
| `downloadFileName` | `string` | 下载 excel 的文件名，不包含.xlsx 后缀 |
| `cudRequestConfig` | `CudRequestConfig<T>` | 增改删各自的方法 |

#### slots
