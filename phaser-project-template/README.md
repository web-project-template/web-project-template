# Phaser + TypeScript + MVC 项目模板 

## 项目

#### 简介：

* 项目框架搭建 [MVC](https://puremvc.org/) 模式
* 项目构建/模块化打包[webpack](https://webpack.docschina.org/)
* WEBGL渲染[Phaser](https://phaser.io/)
* 动画制作[GreenSock Animation Plugin](https://greensock.com/gsap/),Shader特效GLSL
* 开发代码[TypeScript](https://www.tslang.cn/),代码规范检查[tslint](https://palantir.github.io/tslint/)

适配模式：舞台默认宽高 1024 * 768，保持宽高比，显示全部内容。缩放后应用程序内容向较窄方向填满播放器窗口，另一个方向的两侧可能会不够宽而留有透明。透明部分填充一张大背景。

安装： `npm install` 或者 `npm run init`

运行： `npm run dev`

发布： `npm run build`

#### 目录结构:
.
├── README.md  
├── index.html  
├── package-lock.json  
├── package.json  
├── src  
│   ├── Game.ts 游戏主类  
│   ├── api  http接口  
│   ├── component  组件  
│   ├── global.d.ts  // 全局API申明定义文件  
│   ├── main.ts  // 入口文件  
│   ├── org  核心代码目录  
│   │   ├── ApplicationFacade.ts MVC管理类  
│   │   ├── controller 控制器层  
│   │   ├── interface 声明的接口  
│   │   ├── model 模型层   
│   │   ├── util 工具  
│   │   └── view 视图层  
│   │       ├── ApplicationMediator.ts  
│   │       ├── StartSceneMediator.ts  
│   │       └── scenes  
│   │           └── start  
│   ├── phaser.d.ts  // phaser API申明文件  
│   └── puremvc.d.ts  // mvc API声明文件  
├── static  // 静态文件目录  
│   ├── assets  
│   ├── css  
│   ├── data  
│   └── lib  
├── tsconfig.json  
├── tslint.json  
├── webpack.config.base.js  
├── webpack.config.build.js  
└── webpack.config.dev.js  

#### 注意：

>选择使用script标签形式引入phaser，tweenmax，puremvc这些库，是为了减少webpack编译时间，加快编译速度/浏览器热更新时间，增加开发效率。