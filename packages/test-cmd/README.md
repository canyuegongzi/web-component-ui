## web-component-ui

### 准备

1. 执行 ```yarn```；
2. 执行 ```lerna bootstrap```。
//https://www.wenjiangs.com/doc/etvtjguo#title-4

### 开发

1. 进入 packages/web-core；
2. 执行 ```npm run package:start:dev```，实时编译core包；
3. 进入 example-ui 目录；
4. 执行 ```npm run dev```, 进行组件demo实时预览。

### 构建

2. 进入 packages/web-core, 执行 ```npm run build:tsc```，构建核心包；
2. 进入 packages/web-ui, 执行 ```npm run build:package```，构建组件;
