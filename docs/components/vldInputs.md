# Inputs with validation

这些组件是`vuetify`的一些 inputs 外层包裹了一层[`vee-validate`](https://logaretm.github.io/vee-validate/)
使用前请先熟悉`vuetify`的这些组件与`vee-validate`的用法
减少了很多重复的代码，请看下面两个例子直观感受一下：

- 使用前：

```vue
<template>
  <validate-observer>
    <validate-provider name="Name" v-slot="{ errors }" rules="required">
      <v-text-field label="Name" v-model="name" :error-messages="errors" />
    </validate-provider>
    <validate-provider name="Country" v-slot="{ errors }" rules="required">
      <v-select
        label="Country"
        :items="countries"
        v-model="country"
        :error-messages="errors"
      />
    </validate-provider>
  </validate-observer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "",
})
export default class extends Vue {
  name: string | null = null;
  country: string | null = null;
  countries = ["C1", "C2"];
}
</script>
```

- 使用后：

```vue
<template>
  <validate-observer>
    <VldTextField label="Name" v-model="name" rules="required" />
    <VldSelect
      label="Country"
      v-model="country"
      :items="countries"
      rules="required"
    />
  </validate-observer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { VldTextField, VldSelect } from "@/components/validateInputs";
@Component({
  name: "",
  components: {
    VldTextField,
    VldSelect,
  },
})
export default class extends Vue {
  name: string | null = null;
  country: string | null = null;
  countries = ["C1", "C2"];
}
</script>
```

## 现有的

`VldTextField`
`VldDatetime`,
`VldDate`,  
`VldSelect`,
`VldAutocomplete`,
`VldCombobox`,

具体 props 请查看`@/components/form/validateInputs/types`
