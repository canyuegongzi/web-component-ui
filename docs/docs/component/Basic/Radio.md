## Radio

常用的单选框组件。

### 基础用法

::: demo
```html
<template>
    <div style="display: flex; align-items: center;justify-content: space-around;padding: 16px">
        <wu-radio label="男" value="medium" size="medium" name="medium" checked="true"></wu-radio>
        <wu-radio label="女" value="small" size="small" name="small" checked="true"></wu-radio>
        <wu-radio label="未知" value="mini" size="mini" name="mini" id="miniEvent1"></wu-radio>
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
