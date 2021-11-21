## Button

常用的操作按钮。

### 基础用法

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-around;padding: 16px">
        <wu-button size="mini" type="primary">primary</wu-button>
        <wu-button size="mini" type="success">success</wu-button>
        <wu-button size="mini" type="warning">warning</wu-button>
        <wu-button size="mini" type="danger">danger</wu-button>
        <wu-button size="mini" type="info">info</wu-button>
        <wu-button size="mini" type="text">text</wu-button>
    </div>
</template>
<script>
</script>
```
:::

### 禁用状态

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-between;padding: 16px">
        <wu-button size="mini" type="primary" disabled="true">disabled</wu-button>
    </div>
</template>
<script>
</script>
```
:::

### 文字按钮

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-between;padding: 16px">
        <wu-button size="medium" type="text">text</wu-button>
    </div>
</template>
<script>
</script>
```
:::


### 加载中

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-between;padding: 16px">
        <wu-button size="mini" type="success" loading="true" id="buttonEvent1">loading</wu-button>
    </div>
</template>
<script>
</script>
```
:::

### 不同尺寸

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-between;padding: 16px">
        <wu-button type="primary" size="mini">mini</wu-button>
        <wu-button type="primary" size="small">small</wu-button>
        <wu-button type="primary" size="medium">medium</wu-button>
    </div>
</template>
<script>
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size | 组件大小 | UISize | medium、small、mini | — |
| type | 按钮类型 | - | primary、success、warning、danger、info、text | — |
| plain | 朴素按钮 | Boolean | true、false | false |
| round | 是否圆角 | Boolean | true、false | false |
| loading | 是否加载中 | Boolean | true、false | false |
| disabled | 按钮禁用 | Boolean | true、false | false |
