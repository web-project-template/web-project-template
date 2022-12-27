import {get, post} from "./http"

export function getChengXiao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = []
      for (var i = 0; i < 2; i++) {
        data.push(`./imgs/cx0${Math.ceil(Math.random() * 8)}.jpg`)
      }
      resolve(data)
    }, Math.random() * 500)
  })
}

export function getOuYangNaNa(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = []
      for (var i = 0; i < 10; i++) {
        data.push(`./imgs/oynn0${Math.ceil(Math.random() * 8)}.jpg`)
      }
      resolve(data)
    }, Math.random() * 500)
  })
}

export function postVwordSetCurrentRegion(params) {
  let url = ``
  return post(url, params)
}