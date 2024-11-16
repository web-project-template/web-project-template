/**
 * Create by .
 * User: chuck
 * Date: 2018/11/16
 * Time: 11:53
 */

// let href = window.location.href
let search = window.location.search

/**
 * 解析url,待实现！！！！
 * @return
 * */
export function parse () {
  // http://180.ai?a=1&b=2#tech
  return {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: '180.ai',
    port: null,
    hostname: '180.ai',
    hash: '#tech',
    search: '?a=1&b=2',
    query: 'a=1&b=2',
    pathname: '/',
    path: '/?a=1&b=2',
    href: 'http://180.ai/?a=1&b=2#tech'
  }
}

/**
 * 获取URL参数
 * @example
 * LAB.URL.queryString();
 *
 * @retrun {}
 * */
export function queryString () {
  search = decodeURIComponent(search)
  // 返回的参数对象
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
