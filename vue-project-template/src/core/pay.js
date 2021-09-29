/**
 * 支付模块
 * */

import MiniProgramPay from 'mini-program-pay'

// 收银台支付
export function checkstandPay (payOrderId, merchantNo, Authorization, wxopenid) {
  console.log('parents/order/orderpay/:', payOrderId, merchantNo, Authorization, wxopenid)
  let origin = ''
  if (/\/\/a5-lc.vipkid-qa.com.cn/.test(window.location)) {
    origin = `https://a5-mobile.vipkid-qa.com.cn`
  } else {
    origin = 'https://mobile.vipkid.com.cn'
  }
  window.location.href = `${origin}/parents/order/orderpay/?payOrderId=${payOrderId}&merchantNo=${merchantNo}`
}

// 微信支付
export function wechatPay (Authorization, wxopenid, merchantNo, payOrderId) {
  console.log('wechatPay：', Authorization, wxopenid, merchantNo, payOrderId)
  // 第一个参数 为 Authorization 必传
  // 第二个参数 为 wxwxopenid  必传
  // 第三个参数 为 merchantNo  非必传  商户号需要去订单组申请
  let miniPay = new MiniProgramPay(Authorization, wxopenid, merchantNo)

  // 第一个参数 为 创建订单之后返回的 payOrderId 必传
  // 第二个参数 为  当前浏览器的location.origin 可选  (默认为线上‘https://mobile.vipkid.com.cn’ ，如需要使用测试环境可改成，如：‘https://a5-mobile.vipkid.com.cn’)

  // h5唤醒公众账号支付
  // return miniPay.evokingWeChatH5(payOrderId, 'https://a5-mobile.vipkid.com.cn')
  let origin = ''
  if (/\/\/a5-lc.vipkid-qa.com.cn/.test(window.location)) {
    origin = `https://a5-mobile.vipkid.com.cn`
  } else {
    origin = 'https://mobile.vipkid.com.cn'
  }
  return miniPay.evokingWeChatH5(payOrderId, origin)
    .then((data) => {
      if (data.code === 200) {
        // alert('支付成功')
      }
      return data
    // 只有支付成功会进入then,其他都进catch
    }).catch((errorData) => {
      if (errorData.code === 100406) {
        // alert('用户主动取消了支付')
      }
      return errorData
    })
}
