import axios from 'axios' // axios引用
import qs from 'qs'

const http_fast = axios.create({
	baseURL: "https://www.fastmock.site/mock/3f270358831b49950a36886d2183deaf/myapp",
	timeout: 5000
});
const http_mock = axios.create({
	baseURL: "https://easy-mock.com/mock/5fa40d6660b9b97b2c3993db/myqpp",
	timeout: 5000
});

//http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//http.defaults.headers.common['Authorization'] = AUTH_TOKEN;  //这是配置token

// 添加请求拦截器
http_fast.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	if (config.method === 'post') {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
http_fast.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

export default http_fast