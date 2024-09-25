let instance = axios.create({
	timeout: 10000,
})

function ajax(data) {
	let { method, url, params, loading = true, notice = true, } = data
	let promise

	if (method === 'get') {
		promise = instance[method](url, { params })
	} else if (method === 'post') {
		promise = instance[method](url, params, {
			transformRequest: [function (data) {
				let ret = ''
				for (let it in data) {
					ret += it + '=' + encodeURIComponent(data[it]) + '&'
				}
				return ret.substr(0, ret.length - 1)
			}]
		})
	} else if (method === 'upload') {
		promise = instance['post'](url, params)
	}

	return promise.then((value) => {
		let { data } = value
		return data
	}, (reason) => {
		return Promise.reject(reason)
	}).finally(() => {

	})
}

ajax.get = function (url, params) {
	return ajax({ method: 'get', url, params })
}

ajax.post = function (url, params) {
	return ajax({ method: 'post', url, params })
}

ajax.upload = function (url, params) {
	let formData = new FormData()
	for (let s in params) {
		formData.append(s, params[s])
	}
	return ajax({ method: 'upload', url, params: formData })
}