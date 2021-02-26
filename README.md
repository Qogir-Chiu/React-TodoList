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
- 通过在父组件中设置State, 子组件设置props为回调函数的方式，实现了同一父亲下兄弟组件间的通信
- 使用Less编写CSS代码，使得相关样式更易维护

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
## 预览截图
![截图1](https://github.com/Qogir-Chiu/React-TodoList/blob/master/screenshots/1.png)
![截图2](https://github.com/Qogir-Chiu/React-TodoList/blob/master/screenshots/2.png)
![截图3](https://github.com/Qogir-Chiu/React-TodoList/blob/master/screenshots/3.png)

见screenshots文件夹。
