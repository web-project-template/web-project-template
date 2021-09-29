# PIXI + TypeScript + MVC 项目模板 

## 项目

#### 简介：

* 项目框架搭建 [MVC](https://puremvc.org/) 模式
* 项目构建/模块化打包[webpack](https://webpack.docschina.org/)
* WEBGL渲染[PIXI.js](https://www.pixijs.com/)
* 动画制作[GreenSock Animation Plugin](https://greensock.com/gsap/),Shader特效GLSL
* 开发代码[TypeScript](https://www.tslang.cn/),代码规范检查[tslint](https://palantir.github.io/tslint/)

适配模式：舞台默认宽高 1024 * 768，保持宽高比，显示全部内容。缩放后应用程序内容向较窄方向填满播放器窗口，另一个方向的两侧可能会不够宽而留有透明。透明部分填充一张大背景。

安装： `npm install` 或者 `npm run init`

运行： `npm run dev`

发布： `npm run build`

#### 注意：

>选择使用script标签形式引入tweenmax，puremvc这些库，是为了减少webpack编译时间，加快编译速度和浏览器热更新时间，增加开发效率。