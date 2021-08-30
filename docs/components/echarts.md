### Echarts

通用的 Mixin `@/components/ChartMixin.ts`,

#### 用法

在你的组件中混入它，`template`中必须有一个 element 的`id`为`ChartMixin`中的`id`, 在组件类中添加一个`get option(): EChartOption {}` 方法

```vue
// Foo.vue
<template>
  <div :id="id" />
</template>
<script lang="ts">
import { Vue, Component, Prop, Mixin } from 'vue-property-decorator'
import ChartMixin from '@/components/ChartMixin.ts'
import { EChartOption } from 'echarts'

@Component({
  name: 'Foo',
})
export default class extends Mixin(ChartMixin) {
  get option(): EChartOption {
    return {}
  }
}
</script>
```

#### props

| prop       |   type    | description                                                                                    |
| :--------- | :-------: | :--------------------------------------------------------------------------------------------- |
| `dataSet`  | `any[][]` | 数据集，参考[echarts.option.dataset.source](https://echarts.apache.org/zh/option.html#dataset) |
| `title`    | `string`  | title                                                                                          |
| `subtitle` | `string`  | title                                                                                          |
| `height`   | `string`  | 高度，建议使用 vh                                                                              |

#### data

| data    |  type   | description  |
| :------ | :-----: | :----------- |
| `chart` | ECharts | echarts 实例 |

#### computed

| computed       |              type              | description                                                                            |
| :------------- | :----------------------------: | :------------------------------------------------------------------------------------- | ----------------------- |
| `chartTheme`   |            `'dark'             | 'light'`                                                                               | 主题，对应 vuetify 主题 |
| `currentTheme` | `Partial<VuetifyThemeVariant>` | 当前主题对象                                                                           |
| `parsedTheme`  |      `VuetifyParsedTheme`      | 根据主题生成的主题对象，其中有函数生成的颜色，根据 base 颜色产生的 darken4 至 lighten5 |
| `primary`      |            `string`            | `primary`颜色字符串                                                                    |
| `secondary`    |            `string`            | `secondary`颜色字符串                                                                  |
| `accent`       |            `string`            | `accent`颜色字符串                                                                     |
| `infoColor`    |            `string`            | `info`颜色字符串                                                                       |

#### api

`toolTipFormatter` 返回[echarts.option.tooltip.formatter](https://echarts.apache.org/zh/option.html#tooltip.formatter)的方法工厂

使用之后会产生如下图的 tooltip:

![123](./tooltip.png)

```ts
declare function toolTipFormatter<T extends { [k: string]: number }>(
  formatters: Record<keyof T, (v: any) => string | null>, // 每个字段对应的formatter
  units: Record<keyof T, string>, // 每个字段的单位
  xAxisOption: { name: string; key: keyof T }, // 横坐标的name和字段名
  params: any
): string
```

- 用法

```vue
<script lang="ts">
import { Vue, Component, Prop, Mixin } from 'vue-property-decorator'
import ChartMixin, { toolTipFormatter } from '@/components/ChartMixin.ts'
import { EChartOption } from 'echarts'

type Foo = {
  year: string
  height: string
}

@Component({
  name: 'FooChart',
})
export default class extends Mixin(ChartMixin) {
  get option(): EChartOption {
    return {
      // ...
      tooltip: {
        formatter: (params: any) =>
          toolTipFormatter<Foo>(
            {
              year: (v) => new Date(v).toISOString().slice(0, -5),
              height: (v) => v.toFixed(2),
            },
            {
              height: 'cm',
            },
            { name: 'year', key: 'year' },
            params
          ),
      },
    }
  }
}
</script>
```
