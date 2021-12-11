## web-component-ui
web-component-ui 是一套基于 webComponent 的 UI 组件库，目前尚在开发阶段，其中样式基于 elementUI。

[基本使用](https://canyuegongzi.github.io/web-component-ui/)

### 准备

1. 根目录执行 ```npm run install:all```；
2. 进入 example-ui 目录，执行 ```npm run dev``` 实时编译core包。

### 开发

1. 进入 example-ui 目录,修改 main.ts,修改 ```import "@canyuegongzi/web-ui";``` 为 ```相对路径```；
2. 进入 packages/web-ui 目录开发。

### 构建

2. 进入 packages/web-core, 执行 ```npm run build:tsc```，构建核心包；
2. 进入 packages/web-ui, 执行 ```npm run build```，构建组件。
