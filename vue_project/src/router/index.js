import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import ElementUI from '../../node_modules/element-ui'
import '../../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }
    ]
})
