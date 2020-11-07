<template>
    <div class="order">
        <van-tabs v-model="activeName">
            <van-tab title="待支付" name="a">
                <div class="order_content">
                    <order-son :orderData="orderList.paying"></order-son>
                </div>
            </van-tab>
            <van-tab title="配送中" name="b">
                <div class="order_content">
                    <order-son :orderData="orderList.transport"></order-son>
                </div>
            </van-tab>
            <van-tab title="待评价" name="c">
                <div class="order_content">
                    <order-son :orderData="orderList.done"></order-son>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import orderSon from "@/components/orderSon";

export default {
	name: "order",
	components: {
		orderSon
	},
	created() {
		this.getJson()
	},
    data() {
        return {
			activeName: "a",
			orderList: ""
        };
    },
    methods: {
        getJson() {
			let order = this.$store.getters.getOrder
			if(JSON.stringify(order) == "{}"){
				this.$http.get("/order")
                .then((res) => {
					let data = res.data
					this.$store.commit("setOrder", data)
                })
                .catch((e) => {
                    console.log(e);
                });
			}

			let username = this.$store.getters.getUerInfo("name")
			if(order.hasOwnProperty(username)){
				this.orderList = order[username]
			}
		},
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order {
    height: 100vh;
    background-color: #eaeaea;
}

.order_content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    margin-top: 10px;
}
</style>
