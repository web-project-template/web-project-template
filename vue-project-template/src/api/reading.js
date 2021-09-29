/**
 * 精品阅读课API接口
 * */

import {get, post} from './http.js'

// 1.1.登录后获取qcToken
export function postQcToken (params) {
  let url = '/student/qcToken'
  return post(url, params)
}

// 1.3.获取家长关联的学生列表
export function getByParent (params) {
  let url = '/student/getByParent'
  return get(url, params)
}

// 6.2.活动报名
export function getActivityEnter (params) {
  let url = '/activity/enter'
  return get(url, params)
}

// 6.3.活动进度查询
export function getProgressdetails (params) {
  let url = '/activity/progressdetails'
  return get(url, params)
}

// 6.6. 提交收货地址
export function postSaveaddress (params) {
  let url = '/activity/saveaddress'
  return post(url, params)
}

// 6.7. 查询收货地址
export function getQueryaddress (params) {
  let url = '/activity/queryaddress'
  return get(url, params)
}
