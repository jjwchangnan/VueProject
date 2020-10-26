<template>
    <div id="app-header">
		<img src="@/assets/img/Food_delivery.png" alt="logo">
		<van-icon class="head_nav" name="wap-nav" @click="show_left_nav" size="25"/>
	</div>
</template>

<script>
export default {
    name: "appHeader",
    data() {
        return {

		};
	},
	methods: {
		show_left_nav() {
			this.$emit('left_nav')
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#app-header{
		background-image: linear-gradient(to right, #ffb01c, #ff7c2d);
		height: 50px;
		width: 100vw;
		//border-bottom: 3px solid gray;
		box-shadow:0px 2px 6px #585858;

		img{
			position: relative;
			display: block;
			height: 16px;
			margin: 0 auto;
			top: 50%;
			transform: translateY(-50%);
		}

		.head_nav {
			position: absolute;
			top: 0px;
			line-height: 50px; /*no*/
			left: 15px;
		}

	}
</style>
