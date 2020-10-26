export default {
	setCart(state, obj) {
		state.cart = obj;
	},
	setUser(state, obj) {
		state.userinfo.username = obj.username;
		state.userinfo.email = obj.email;
		state.userinfo.status = 1;
	},
	saveStoreInfo(state, obj){
		state.store = obj
	},
};