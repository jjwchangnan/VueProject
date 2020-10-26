<template>
    <div id="app-footer">
        <van-tabbar
            v-model="active"
            class="footer"
            active-color="#ff7c2d"
            inactive-color="#000"
        >
            <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="shop" to="/home" icon="shop-o">美食</van-tabbar-item>
            <van-tabbar-item name="shopping" to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
            <van-tabbar-item name="notes" to="/order" icon="notes-o">订单</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name: "appFooter",
    data() {
        return {
            active: "search",
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    height: 60px;
}
</style>
