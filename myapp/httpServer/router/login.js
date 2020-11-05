const router = require('koa-router')();

router.post('/', async (ctx, next) => {
	var
		name = ctx.request.body.username || '',
		password = ctx.request.body.password || '';
		
	if (name === 'changnan' && password === 'jjwjjw123') {
		ctx.response.body = `ok`;
	} else {
		ctx.response.body = `error`;
	}
});

module.exports = router.routes();