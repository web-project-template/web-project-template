/**
 * 微信授权模块
 * @example window.location.href='./authorization.html?callback=encodeURIComponent(https://wwww.baidu.com)&oAuth2Scope = snsapi_userinfo';
 * */

import {getLogin, getOpenId} from '../../api'

function queryString () {
  let search = window.location.search
  var ags = {}
  if (search.length > 1) {
    var query = search.substring(1)
    var items = query.split('&')
    var item = null
    for (var i = 0, len = items.length; i < len; i++) {
      item = items[i].split('=')
      var key = decodeURIComponent(item[0])
      var val = decodeURIComponent(item[1])
      ags[key] = val
    }
  }
  return ags
}

let queryStringObj = queryString()
let wxCode = queryStringObj['code']
if (wxCode) {
  getOpenId({
    code: wxCode
  }).then((res) => {
    if (res && res.code === 10000) {
      let {openId} = res.data
      // alert(JSON.stringify(queryStringObj))
      let callback = queryStringObj['callback']
      if (callback) {
        openId = encodeURIComponent(openId)
        let link = decodeURIComponent(callback)
        if (link.indexOf('?') > -1) {
          link += ('&openId=' + openId)
        } else {
          link += ('?openId=' + openId)
        }
        // alert('授权完成,href=' + window.location.href + ' link=' + link + 'callback=' + callback)
        window.location.href = link
      } else {
        alert('授权完成,callback=' + callback)
      }
    } else if (res && res.code === 20000) {
      alert('授权完成,code 20000' + window.location.href)
    } else {
      alert('授权完成,code ' + res.code)
    }
  })
} else {
  // 授权链接 callback =  encodeURIComponent(https://wwww.baidu.com)
  // 开启非静默授权 oAuth2Scope = snsapi_userinfo
  let params = {}
  let oAuth2Scope = queryStringObj['oAuth2Scope']
  if (oAuth2Scope) params['oAuth2Scope'] = oAuth2Scope

  let url = window.location.protocol + '//' + window.location.host + window.location.pathname + encodeURIComponent(window.location.search)
  params['callback'] = encodeURIComponent(url)

  getLogin(params).then(res => {
    window.location.href = res
  })
}

// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5d671cad3355fe94&redirect_uri=
// http%3A%2F%2Fa5-lpqc.vipkid-qa.com.cn%2FwxMpResult&response_type=code&scope=snsapi_userinfo&state=
// http%3A%2F%2F192.168.53.40%3A3030%2Fauthorization.html%253Fcallback%253D%25253Fcallback%25253Dwww.baidu.com%2526oAuth2Scope%253Dsnsapi_userinfo&connect_redirect=1#wechat_redirect
