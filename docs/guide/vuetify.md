# Vuetify 使用经验与建议

Vuetify 的一大优点在于几乎不需要用户写 css。通过正确地使用相应的组件组合以及给组件添加适当的 attribute 就可以实现大多数场景下的界面布局。比如在一个包含 icon 与文字的按钮中，给 icon 添加`left` attribute 就可以让 icon 拥有和字体适应的大小并在 icon 和字体之间插入适当的间距，而不需要用户自行添加`mr-x`或`pl-x`等间距 class。
Vuetify 中的一些组件应该协同起来使用，例如`v-container`、`v-row`和`v-col`；`v-card`、`v-card-title`。使内容拥有整齐的内外边距，又易于用 Vuetify sass variable 进行自定义。

## [Vuetify Theme Provider](https://vuetifyjs.com/en/features/theme/#theme-provider)

`<v-theme-provider />`组件提供了下面这个元素的语法糖,

```
<v-sheet style="display:contents">
    ...
</v-sheet>
```

相当于给他的子元素添加了一个不会被渲染出来的父容器，但是这个父容器包含主题 class: `theme--light`/`theme--dark`，可用于子元素的主题样式定义。这样一来，不要写 JavaScript 就可以实现非 Vuetify 组件明暗模式的样式定义与切换。

因为本项目允许自定义主题色， 和颜色有关的样式应尽量使用 Vuetify 提供的响应式颜色变体和 css 变量。
