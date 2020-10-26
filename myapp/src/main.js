// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import MyCarousel from 'my_carousel_jjw'
import store from './store/index.js'
import axios from 'axios'

//css
import 'vant/lib/index.css';
import '@/assets/css/comm.scss';

//js
import '@/assets/size.js';

Vue.use(MyCarousel);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	router,
	components: { App },
	template: '<App/>',
	render: h => h(App)
}).$mount('#app')
