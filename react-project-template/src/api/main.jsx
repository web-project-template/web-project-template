import {get, post} from "./http"

export function getChengXiao(params) {
  let url = `./data/chengxiao.json`
  return get(url, params)
}

export function getOuYangNaNa(params) {
  let url = `./data/ouyangnana.json`
  return get(url, params)
}

export function postVwordSetCurrentRegion(params) {
  let url = ``
  return post(url, params)
}