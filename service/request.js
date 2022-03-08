function request(options = {}) {
	return new Promise((resolved, rejected) => {
		options.header = {
			'content-type': 'json'
		};
		options.fail = (err) => {
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: '请求失败'
			});
			rejected(err)
		}
		options.success = (res) => {
			if (res.statusCode === 200) {
				resolved(res.data);
			} else {
				options.fail(res)
			}
		}
		uni.request(options);
	});
}
export default request;
