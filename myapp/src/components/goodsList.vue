<template>
    <div class="goodslist">
        <div
            class="st_list_son"
            v-for="(item, index) in goodslist"
            :key="index"
            :class="{
                last_st_list_son: index + 1 == goodslist.length ? true : false,
            }"
        >
            <div class="st_list_son_icon">
                <img
                    src="@/assets/img/shop_list/store_icon.jpg"
                    width="100%"
                    alt=""
                />
            </div>
            <div class="st_list_son_text">
                <p>{{ item.name }}</p>
                <p>月售{{ item.salescount }}</p>
                <p><span>￥</span>{{ item.price }}</p>
                <div>
                    <van-icon
                        name="close"
                        size="20"
                        color="#d6d2c4"
                        @click="delCart(item.goodsid)"
                        v-show="
                            isNaN(goods[item.goodsid]) && goods[item.goodsid] > 0
                                ? false
                                : true
                        "
                    />
                    <span>{{
                        isNaN(goods[item.goodsid]) ? 0 : goods[item.goodsid]
                    }}</span>
                    <van-icon
                        name="add"
                        size="20"
                        color="#ff9642"
                        @click="addCart(item.goodsid)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "GoodsList",
    props: ["goodslist", "storeid"],
    mounted: function () {
		let cart_obj = this.$store.state.cart
		if(cart_obj == ''){
			cart_obj = {}
			cart_obj[this.storeid] = {}
			for (const key in this.goodslist) {
				let id = this.goodslist[key].goodsid
				cart_obj[this.storeid][id] = 0
			}
		}
		this.$store.commit("setCart", cart_obj);
        //console.log(this.$store.state.cart[this.storeid]);
    },
    methods: function () {},
    data() {
        return {
            goods: {},
        };
    },
    computed: {
        ...mapState(["cart"]),
    },
    watch: {
        cart: {
            handler(val) {
				let data = val[this.storeid];
				for (const i in data) {
					this.$set(this.goods, i, data[i]);
				}
            },
            deep: true,
            immediate: true,
        },
    },
    methods: {
        addCart(id) {
            let cart_data = this.$store.state.cart;
            if (!cart_data.hasOwnProperty(this.storeid)) {
                cart_data[this.storeid] = {};
                cart_data[this.storeid][id] = 1;
            } else {
                if (!cart_data[this.storeid].hasOwnProperty(id)) {
                    cart_data[this.storeid][id] = 1;
                } else {
                    ++cart_data[this.storeid][id];
                }
            }
            this.$store.commit("setCart", cart_data);
        },
        delCart(index) {},
        updateData() {},
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.st_list_son {
    width: 100%;
    height: 90px;
    background-color: #ffffff;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid rgb(209, 209, 209);

    .st_list_son_icon {
        position: absolute;
        float: left;
        height: 70px;
        width: 70px;
        border-radius: 10px;
        overflow: hidden;
        z-index: 1;
    }

    .st_list_son_text {
        position: relative;
        float: left;
        width: 100%;
        height: 100%;
        padding-left: 90px;
        box-sizing: border-box;

        p:nth-child(1) {
            font-size: 16px;
            font-weight: 600;
            line-height: 25px;
        }

        p:nth-child(2) {
            font-size: 12px;
            line-height: 20px;
            color: rgb(92, 91, 91);
        }

        p:nth-child(3) {
            font-size: 16px;
            line-height: 30px;
            color: #ff414d;

            span {
                font-size: 12px;
            }
        }

        div {
            position: absolute;
            right: 10px;
            bottom: 0px;

            span {
                margin: 0 5px;
                vertical-align: 5px;
            }
        }
    }
}

.last_st_list_son {
    border: 0px;
}
</style>
