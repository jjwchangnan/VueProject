import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import StoreList from '@/views/storelist'
import Order from '@/views/order'
import Cart from '@/views/cart'

Vue.use(Router)

export default new Router({
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
	]
})
