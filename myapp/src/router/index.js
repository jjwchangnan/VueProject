import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import StoreList from '@/views/storelist'
import Order from '@/views/order'
import Cart from '@/views/cart'
import Settlement from '@/views/settlement'

Vue.use(Router)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			children: [
				{
					path: '',
					name: 'Home',
					component: Home
				},
				{
					path: 'home',
					name: 'Home',
					component: Home
				},
				{
					path: 'order',
					name: 'Order',
					component: Order
				},
				{
					path: 'cart',
					name: 'Cart',
					component: Cart
				}
			]
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/storelist',
			name: 'StoreList',
			component: StoreList
		},
		{
			path: '/settlement',
			name: 'Settlement',
			component: Settlement
		},
	]
})


/* router.beforeEach((to, from, next) => {
	if(sessionStorage.getItem("userName")){
		if(to.path == "/login")
			next("/home");
		else
			next();
	}else{
		if(to.path == "/login"){
			next();
		}else{
			next("/login");
		}
	}
}) */

export default router