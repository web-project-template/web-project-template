import ax from "axios"

let axios = ax.create({
  baseURL: '',
  headers: {
    "content-type": "application/json; charset=utf-8"
  }
})
axios.defaults.timeout = 10000
axios.interceptors.request.use(config => {
    // console.log("axios request before", config)

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  response => {
    // console.log("axios response before", response)

    return response
  },
  error => {
    if (error.response.status === 500) {
      return Promise.reject(new Error("服务无响应，请重试"))
    } else {
      return Promise.reject(new Error("网络错误，请稍候再试"))
    }
  }
)

// 封装GET请求
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then((resp) => {
        if (resp && resp.data) {
          resolve(resp.data)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// 封装POST请求
function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then((resp) => {
        if (resp && resp.data) {
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
