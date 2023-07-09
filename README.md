# scoffold-mayag

## 功能

- -v/--version 输出当前Maya的版本号
- [name] 指定项目名称
- -t/--template 指定模板名称
- create命令后进入交互模式，引导用户选择特性开关
- -h/--help 输出帮助信息

### 工程化需求

- TypeScript
- ESLint + Prettier + Husky + lint-staged
- less/sass/stylus/postcss等css预处理器
- webpack/vite/rollup等打包工具
- scripts功能：关键命令写入package.json

### 配置需求

- 是否开启TypeScript
- 是否开启ESLint
- 是否开启Prettier
- 是否开启lint-staged，若Eslint、prettier均未开启，则不开启lint-staged
- 选择css预处理器，支持less/sass/stylus/postcss/none
- 选择打包工具，支持webpack/vite/rollup/none

### 加分项

- 使用validate-npm-package-name校验项目名称
- 接入node-plop，支持自定义模板
- 接入单测
- 支持项目模版类型越多越好
- 支持模版缓存，通过commitid判断，增加--force/-f强制更新模版
- 项目创建后，自动安装依赖
  - 本地环境未安装yarn/pnpm，使用npm安装
  - 若已安装yarn/pnpm，由用户选择包管理器

## 技术选型

- 功能开发
  - 终端工具：
    - 交互式命令行工具：inquirer
    - 命令行工具：commander
    - 命令行输出美化：chalk
    - ora：终端loading效果
    - download-git-repo：下载git仓库
    - handlebars：模版引擎
  - 工程化：
    - TypeScript
    - ESLint + Prettier + Husky + lint-staged
    - Gitee CI功能，自动发布beta版本
      - npm version prerelease --preid=beta
      - npm publish

## 输出

- 源码
- 总结文档
  - 脚手架使用文档
  - 核心设计说明
  - 工程化选型说明
  - 开发过程中遇到的问题及解决方案

## 参考资料

- [源码共读 - 构建脚手架（2K字长文） - 掘金 (juejin.cn)](https://juejin.cn/post/7175426757091131449)
- [从零打造你的前端开发脚手架 - 掘金 (juejin.cn)](https://juejin.cn/post/7208847676404990009)
- [【脚手架】从0到1搭建React18+TS4.x+Webpack5项目（四）发布脚手架 - 掘金 (juejin.cn)](https://juejin.cn/post/7213675726750859301)