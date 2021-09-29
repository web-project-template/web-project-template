import ax from 'axios'

let href = window.location.href
let baseURL = ''
if (href.indexOf('localhost') > -1 || href.indexOf('192.168') > -1) {
  baseURL = '/rest/lpqc'
} else if (href.indexOf('//a5-lc.vipkid-qa.com.cn') > -1) {
  baseURL = `https://a5-lc.vipkid-qa.com.cn/rest/lpqc`
} else if (href.indexOf('//pre-lc.vipkid.com.cn') > -1) {
  baseURL = 'https://pre-lc.vipkid.com.cn/rest/lpqc'
} else {
  baseURL = `https://lc.vipkid.com.cn/rest/lpqc`
}

let axios = ax.create({
  baseURL: baseURL,
  headers: {
    'content-type': 'application/json; charset=utf-8'
  }
})

// axios全局配置
// axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.withCredentials = true // `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.timeout = 10000
axios.interceptors.request.use(
  config => {
    // console.log('axios request before', config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // console.log('axios response before', response)
    if (response.data.code === -1003) {

    }
    return response
  },
  error => {
    if (error.response.status === 500) {
      return Promise.reject(new Error('服务无响应，请重试'))
    } else {
      return Promise.reject(new Error('网络错误，请稍候再试'))
    }
  }
)

// 封装GET请求
function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then((resp) => {
        if (resp.data) {
          resolve(resp.data)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 封装POST请求
function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((resp) => {
        if (resp.data) {
          resolve(resp.data)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export {
  get,
  post
}
