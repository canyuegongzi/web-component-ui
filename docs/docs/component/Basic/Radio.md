# Radio

此处提供了两种复杂场景的示例，Demo Container 都能良好的支持，具体效果如下所示：

## TodoMVC 示例

`demo-container` 对示例提供了良好的支持，本例子取自 `Vue` 官方文档示例中较为复杂的 `TodoMVC`，其展示效果 [点此查看](https://cn.vuejs.org/v2/examples/todomvc.html)

其渲染结果如下所示

::: demo `TodoMVC` 是 `Vue` 官方文档中提供的示例，其涵盖了 `data、watch、computed、methods、directives` 等较多 `API` 调用
```html
<template>
  <div>主体一</div>
</template>
<script>
</script>
```
:::

## 结合组件库示例

作为一个**组件示例插件**，其使用场景大多是在开发组件库时，用作组件库的文档示例构建，在此将演示基于 [AntDeisgnVue](https://www.antdv.com/docs/vue/introduce-cn/) 组件库的文档示例编写

首先我们在 `Vuepress` 中 引入 `AntDesignVue` 组件库：

```bash
yarn add ant-design-vue
```

然后编辑 `.vuepress/enhanceApp.js` 文件（如不存在则创建）：

```js
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
export default ({
  Vue
}) => {
  Vue.use(Antd)
}
```

到这里就完成组件库的引入，现在可以找一个 `Markdown` 文件键入以下代码

```html
::: demo  `AntDesignVue` xxx组件示例，**请注意xxx**
```html
<template>
	<div>测试内容问问</div>
</template>
` ` ` <= 删除左侧空格
:::
```

渲染结果如下所示

::: demo  `AntDesignVue` xxx组件示例，**请注意xxx**
```html
<template>
	<div>内容块</div>
</template>
```
:::

**以下是基于组件库更全面的一个示例**

::: demo  注意，目前编写示例代码时 `import` 语法是无法被 `demo-container` 成功编译的，请避免在示例中使用这种语法
```html
<template>
  <div>测试内容渲染</div>
</template>

<script>
export default {
  data() {
    return {
      size: "default",
      visible: false
    };
  },
  methods: {
  }
};
</script>
```
:::
