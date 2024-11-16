function getUrl(url) {
	const host = 'http://localhost:8080/netcar_maidian'
	return `${host}${url}`;
}

const permissionApi = {
	getTest(params) {
		return ajax.post(getUrl("/api/test"), params);
	},
}