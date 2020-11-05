export default {
	setCart: (state, obj) => {
		let name = state.userinfo.username
		if(obj.handler == "add"){
			if(!state.cart[name].hasOwnProperty(obj.storeid)){
				state.cart[name][obj.storeid] = {}
				state.cart[name][obj.storeid][obj.goodsid] = 1
			}else{
				if(!state.cart[name][obj.storeid].hasOwnProperty(obj.goodsid))
					state.cart[name][obj.storeid][obj.goodsid] = 1
				else
					++state.cart[name][obj.storeid][obj.goodsid]
			}
		}else{
			if(state.cart[name][obj.storeid][obj.goodsid] > 1)
				--state.cart[name][obj.storeid][obj.goodsid]
		}
	},
	setUser: (state, obj) => {
		state.userinfo.username = obj.name;
		state.userinfo.email = obj.email;
		state.userinfo.status = 1;
	},
	saveStoreInfo: (state, obj) => {
		state.store = obj
	},
	saveGoodsInfo: (state, arr) => {
		state.storename = arr[0]
		state.goodsname = arr[1]
	},
	initCartInfo: (state, name) => {
		if(!state.cart.hasOwnProperty(name)){
			state.cart[name] = {}
		}
	},
	removeCartInfo: (state, arr) => {
		let cart = state.cart
		cart[arr[0]][arr[1]].num = 0
		state.cart = cart;
	}
};