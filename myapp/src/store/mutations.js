export default {
	initCart: (state, obj) => {
		if (obj.storeid != "" && obj.storeid != undefined) {
			let name = state.userinfo.username
			if (!state.cart[name].hasOwnProperty(obj.storeid)) {
				state.cart[name][obj.storeid] = {}
				for (const id in obj.goodslist) {
					let _temp = {}
					_temp.name = obj.goodslist[id].goodsname
					_temp.price = obj.goodslist[id].price
					_temp.num = 0
					state.cart[name][obj.storeid][id] = _temp
				}
			}
		}
	},
	setCart: (state, obj) => {
		let name = state.userinfo.username
		if (obj.handler == "add") {
			++state.cart[name][obj.storeid][obj.goodsid].num
		} else {
			if (state.cart[name][obj.storeid][obj.goodsid].num > 0)
				--state.cart[name][obj.storeid][obj.goodsid].num
		}
	},
	setUser: (state, obj) => {
		state.userinfo.username = obj.username;
		state.userinfo.email = obj.email;
		if(Object.keys(state.cart["tourist"]).length != 0){
			state.cart[obj.username] = state.cart["tourist"]
			delete state.cart["tourist"]
			state.userinfo.status = 1;
		}
	},
	saveStoreInfo: (state, obj) => {
		state.store = obj
	},
	initCartInfo: (state, name) => {
		if (!state.cart.hasOwnProperty(name)) {
			state.cart[name] = {}
		}
	},
	removeCartInfo: (state, arr) => {
		let cart = state.cart
		cart[arr[0]][arr[1]].num = 0
		state.cart = cart;
	},
	setOrder: (state, obj) => {
		state.order = obj
	}
};