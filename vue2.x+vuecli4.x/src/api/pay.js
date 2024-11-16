/**
 * 支付接口
 * */

import {post} from './http.js'

// 1.2.我的商品查询（分页）
export function postPayProductMyList (params) {
  let url = '/payProduct/myList'
  return post(url, params)
}
