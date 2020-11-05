const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
	userinfo: {
		username: "",
		email: "",
		status: 0
	},
	store: {},
	goodsname: {},
	storename: {},
	cart: {}
}

export default state;