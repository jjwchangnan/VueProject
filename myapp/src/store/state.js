const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
//const state = {
	userinfo: {
		username: "tourist",
		email: "",
		status: 0,
		coupon: {
			type1: 1,
			type2: 2,
			type3: 1
		}
	},
	store: {},
	cart: {},
	order: {}
}

export default state;