export default {
	// 获取用户数据
	getUerInfo: state => type => {
		if(type === "name"){
			return state.userinfo.username
		}else if(type === "email"){
			return state.userinfo.email
		}else {
			return state.userinfo
		}
	},

	// 获取优惠券
	getCoupon: state => {
		return state.userinfo.coupon
	},

	// 获取商店数据ALL
    getStore: state => {
		return state.store
	},

	// 获取商店的店铺信息
	getStoreInfo: state => id => {
		let obj = {}
		obj.storename = state.store[id].storename;
		obj.notice = state.store[id].notice;
		obj.salescount = state.store[id].salescount;
		obj.star = state.store[id].star;
		obj.storeid = id;
		return obj
	},

	// 获取商品信息
	getGoodsList: state => id => {
		return state.store[id].goodslist
	},

	// 获取购物车数据
	getCart: state => {
		let name = state.userinfo.username
		return state.cart[name]
	},

	// 获取订单数据
	getOrder: state => {
		return state.order
	}
};