// eslint-disable-next-line
import {getCookie, setCookie, deleteCookie} from '../util/cookies'
import {queryString} from '../util/url'

// 13649218119
// setCookie('Authorization', '"parent 13915197 c922b2de-abb9-4633-9a23-387dc38c37d3"')
// setCookie('mbparentid', '28893907')
// setCookie('mbstudentid', '28893908')

let Authorization = getCookie('Authorization')
Authorization = Authorization ? Authorization.replace(/"/g, '') : null
let parentId = Authorization ? Authorization.split(' ')[1] : null
let token = Authorization ? Authorization.split(' ')[2] : null
let studentId = getCookie('mbstudentid')
let activityCode = '56cfe0be322ac2c3'

let queryStringObj = queryString()
let channelKeyword = queryStringObj['channelKeyword']

// 获取注册/登录地址
let href = window.location.href
let loginHost = (href.indexOf('//lc.vipkid.com.cn') > -1 || href.indexOf('//pre-lc.vipkid.com.cn') > -1)
  ? 'https://mobile.vipkid.com.cn'
  : 'https://a5-mobile.vipkid-qa.com.cn'

let h5Url = window.location.href
console.log(h5Url + ' ' + Authorization + ' ' + parentId + '  ' + token)
if (!Authorization && !parentId && !token) {
  login()
}

export function login () {
  channelKeyword = channelKeyword ? '&channelKeyword=' + channelKeyword : ''
  window.location.href = `${loginHost}/entry/h5?appId=10006&activityCode=${activityCode}&redirectUri=${encodeURIComponent(h5Url)}${channelKeyword}&from=wechatonlyjump`
}

export default {
  Authorization,
  parentId,
  token,
  studentId
}
