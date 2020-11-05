export default {
	getUerInfo: state => type => {
		if(type === "name"){
			return state.userinfo.username
		}else if(type === "email"){
			return state.userinfo.email
		}else {
			return state.userinfo
		}
	},
    getStore: state => {
		return state.store
	},
	getStoreInfo: state => id => {
		let obj = {}
		obj.storename = state.store[id].storename;
		obj.notice = state.store[id].notice;
		obj.salescount = state.store[id].salescount;
		obj.star = state.store[id].star;
		obj.storeid = id;
		return obj
	},
	getGoodsList: state => id => {
		return state.store[id].goodslist
	},
	getCart: state => {
		let name = state.userinfo.username
		return state.cart[name]
	},
};