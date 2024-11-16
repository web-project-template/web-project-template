/**
 * 微信相关
 * */

import {get} from './http.js'

export function getLogin (params) {
  let path = '/wechatMp/login'
  return get(path, params)
}

export function getOpenId (params) {
  let path = '/wechatMp/getOpenId'
  return get(path, params)
}

// 获取微信分享配置信息
export function getWechatConfig (params) {
  let path = '/wechatMp/jsConfig'
  return get(path, params)
}
