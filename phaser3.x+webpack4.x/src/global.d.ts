declare var foo: number
declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.gif"
declare module "*.bmp"
declare module "*.tiff"

// window全局属性声明
interface Window {
  _vlog: any;// 日志
  sa: any; // 全局神策打点
  eventBus: any; // 'vk-runtime'模块提供的全局方法，与主平台交互
  TweenMax: any;
  TimelineMax: any | object;
  Power0: any;
  Power1: any;
  Power2: any;
  Power3: any;
  Power4: any;
  Sine: any;
  Elastic: any;
  escape?: any;
  unescape?: any;
}

// ---------- 数据结构声明 ----------
// 接口响应数据结构
type ResponseStruct = {
  data: any,
  code: number,
  msg: string
}

// url参数
type UrlParamsStruct = {
  p: string;
  mute: string | boolean;
}

// 项目语言
type LanguageStruct = {
  start: {
    jingrujidi: string;
  };
  main: {
    nengliangshi: string;
    jidiyulan: string;
    miji: string
  }
}

// 新手引导
type GuideStruct = {
  val: boolean; // 是否引导，true引导，false不引导
  [propName: string]: boolean;
}

// 能量石，星星 获得途径
type RedirectStruct = {
  readonly title: string;
  readonly description: string;
  readonly redirectUrl: string;
}