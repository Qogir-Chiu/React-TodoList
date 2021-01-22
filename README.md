#React Demo: Todo List
---

在有限时间内快速上手React后所写的一个简易demo。

## 组件拆分
- Header
- List
- Item
- Footer

## 功能特点
- 使用React脚手架自动化配置
- 组件拆分合理，易于扩展与复用

## 运行方法

### 1. debug版本

在所在目录下运行node终端，然后

1. `npm install`或`yarn`，回车执行(依赖包体积较大，可能需要等待几分钟)
2. `npm start`或`yarn start`，回车执行，即可运行页面。

### 2. release版本

此demo已通过`yarn build`创建了build文件夹及相应的release版本文件，可通过以下方式运行release版本：

```power
npm install serve -g
cd ./build
serve
```

项目预览截图请见screenshots文件夹。