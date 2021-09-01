# Typescript 组件写法

两种写法

1.  Vue.extend

```ts
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      foo: string,
    };
  },
});
```

2. [Vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)

```ts
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class YourComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined;
  @Prop({ default: "default value" }) readonly propB!: string;
  @Prop([String, Boolean]) readonly propC: string | boolean | undefined;
}
```
