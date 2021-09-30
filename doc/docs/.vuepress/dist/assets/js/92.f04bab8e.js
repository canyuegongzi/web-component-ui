(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{534:function(t,n,a){"use strict";a.r(n);var e=a(45),r=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"node-nest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-nest"}},[t._v("#")]),t._v(" node-nest")]),t._v(" "),a("p",[t._v("该模板基于 nest7 的工程模板，内部已经集成了数据库连接、error 处理、动态配置、数据返回包装、生产环境最小化打包（ 避免生产环境中 npm install 后占用大量空间 ）、eslint等。通过 t-cli 快速搭建 nest 开发环境,可以避免原生 nest-cli创建工程后繁琐的  配置流程。")]),t._v(" "),a("h2",{attrs:{id:"目录说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── common                                  // 公共模块\n|   ├── error                               // 错误封装\n|   |   |—— exceptions                      // Exception 定义 \n|   |   |—— filters                         // 错误过滤器 包括 http ws Rpc\n|   |   |—— pipe                            // 管道目录\n|   |—— result                              // 返回数据包装 \n|   |—— shared\n|   |   |—— decorators                      // 注解目录                    \n|   |   |—— guards                          // 部分权限目录(按需实现)            \n|   |   |—— interceptors                    // 拦截器目录\n|   |   |—— middleware                      // 中间建目录\n|   |   |—— strategies                      // Strategy 封装\n├── config                                  // 系统配置\n|   ├── ApiErrorCodeEnum.ts                 // 系统错误码定义 \n|   ├── application.yaml                    // 系统配置文件\n|   ├── CommonConfigInterface.ts            // 系统配置字段定义  \n|   ├── constant.ts                         // 系统常量定义\n├── controller                              // API 定义目录\n|   ├── HelloWorldController.ts\n├── service                                 // Service 定义\n|   ├── HelloWorldService.ts\n├── model\n|   ├── DTO                                 // 请求参数类型校验类定义目录\n|   ├── entity                              // 数据库实体定义                            \n├── module                                  // 哥模块定义目录\n|   ├── HelloWorldModule.ts\n├── utils                                   // 工具定义目录\n|   ├── RedisCacheService.ts                // redis 工具封装\n|   ├── .....\n├── AppModule.ts                            // 系统模块入口\n├── MainModule.ts                           // 主模块定义，typeorm、reid、kakfa、各个子模块定义\n├── main.ts                                 // 系统入口文件\n\n\n")])])]),a("h2",{attrs:{id:"npm-脚本说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-脚本说明"}},[t._v("#")]),t._v(" npm 脚本说明")]),t._v(" "),a("h3",{attrs:{id:"npm-run-start-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-start-dev"}},[t._v("#")]),t._v(" npm run start:dev")]),t._v(" "),a("p",[t._v("该脚本用于在开发环境以 nodemon 方式启动系统。")]),t._v(" "),a("h3",{attrs:{id:"npm-run-dev"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-dev"}},[t._v("#")]),t._v(" npm run dev")]),t._v(" "),a("p",[t._v("该脚本用于在开发环境中以 nest 原生的方式启动工程，但有可能有错误，需要手动将 application.yaml 复制到 dist/config 目录下。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("系统中采用 application.yaml 配置项目，nest 在启动时会先生成 dist 目录，application.yaml 配置文件并为复制到 dist 目录。 \n")])])]),a("h3",{attrs:{id:"npm-run-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-build"}},[t._v("#")]),t._v(" npm run build")]),t._v(" "),a("p",[t._v("该脚本是用 nest 原生方式打包工程。")]),t._v(" "),a("h3",{attrs:{id:"npm-run-build-min"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-build-min"}},[t._v("#")]),t._v(" npm run build:min")]),t._v(" "),a("p",[t._v("该脚本是用最小化打包 nest 工程，该脚本会将整个工程打包成单文件，这种打包方式对 docker 部署方式来说是及其友好的。")]),t._v(" "),a("h3",{attrs:{id:"npm-run-start-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-run-start-debug"}},[t._v("#")]),t._v(" npm run start:debug")]),t._v(" "),a("p",[t._v("该脚本用于断点调试系统。")]),t._v(" "),a("h4",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("p",[t._v("个人推荐开发环境采用 "),a("code",[t._v("npm run start:dev + pm run start:debug")]),t._v(" 方式开发，打包时尽量采用 "),a("code",[t._v("npm run build:min")]),t._v(" 最小化打包。")]),t._v(" "),a("h2",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("p",[t._v("该工程模板后续会继续完善，包括 http 模板、消息队列（kafka、rabbitMqQ）等模块。出现问题也会继续跟进完善。")])])}),[],!1,null,null,null);n.default=r.exports}}]);