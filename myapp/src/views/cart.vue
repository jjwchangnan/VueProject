<template>
    <div class="cart">
        <div class="cart_child" v-for="(item, index) in cartData" :key="index" v-show="item.sumPrice == 0 ? false : true">
            <div class="cart_child_head">
                <div class="checked_box">
                    <van-checkbox
                        checked-color="#ff7c2d"
                        icon-size="18px"
                        v-model="checked"
                    ></van-checkbox>
                </div>
                <span @click="$router.push({path: '/storelist',query: { storeid: index }})">{{ $store.state.store[index].storename }}</span>
                <i><van-icon name="arrow" size="15" /></i>
            </div>
            <div
                class="cart_child_content"
                v-for="(data, key) in item"
                :key="key"
            >
                <van-swipe-cell :right-width="70">
                    <van-card
                        :num="data.number"
                        :price="data.price"
                        desc="描述信息"
                        :title="$store.state.goodsname[data.goodsname]"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
						@click="
							$router.push({
								path: '/storelist',
								query: { storeid: index },
							})
						"
                    >
                        <!-- <template #tags>
                            <van-tag plain type="danger">标签</van-tag>
                            <van-tag plain type="danger">标签</van-tag>
                        </template> -->
                    </van-card>
                    <template #right>
                        <van-button
                            square
                            text="删除"
                            type="danger"
                            class="delete-button"
							@click="deleteCart(index, data.goodsname)"
                        />
                    </template>
                </van-swipe-cell>
            </div>
            <div class="cart_child_foot">
                <div class="btn_group" @click="$router.push({path: '/settlement',query: { storeid: [index] }})">
                    <div>${{ item.sumPrice }}</div>
                    <div>去结算</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart",
    created: function () {
        this.getCart();
		this.configStoreInfo();
    },
    data() {
        return {
            checked: true,
            cartData: {},
        };
    },
    computed: {
        sumPrice() {
            for (const i in this.cartData) {
            }
        },
    },
    methods: {
        configStoreInfo() {
            let storeInfo = this.$store.state.store;
            let goods_obj = {};
            for (let x in storeInfo) {
                for (let y in storeInfo[x].goodslist) {
                    let temp = storeInfo[x].goodslist[y];
                    goods_obj[temp.goodsid] = temp.goodsname;
                }
			}
			
			let store_obj = {};
			for (let x in storeInfo) {
                let temp = storeInfo[x];
				store_obj[x] = temp.storename;
			}

			this.$store.commit("saveGoodsInfo", [store_obj, goods_obj]);
        },
        getCart() {
            let cartInfo = this.$store.state.cart;
            let storeInfo = this.$store.state.store;
            for (const x in cartInfo) {
                this.$set(this.cartData, x, []);
                let sumPrice = 0;
                for (const y in cartInfo[x]) {
                    if (cartInfo[x][y].num > 0) {
                        let _obj = {};
                        _obj.goodsname = y;
                        _obj.price = cartInfo[x][y].price;
                        _obj.number = cartInfo[x][y].num;
                        sumPrice += _obj.price * _obj.number;
                        this.$set(
                            this.cartData[x],
                            this.cartData[x].length,
                            _obj
                        );
                    }
                }
                this.$set(this.cartData[x], "sumPrice", sumPrice.toFixed(2));
            }
        },
        deleteCart(st, gds) {
            let arr = [st, gds];
            this.$store.commit("removeCartInfo", arr);
            this.getCart();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$redcolor: #F05454;
$yellowcolor: #FF7F00;
.cart {
    background-color: #eaeaea;
    min-height: 100vh;
    padding-bottom: 100px;

    .cart_child {
        position: relative;
        width: 92%;
        left: 4%;
        height: auto;
        border-radius: 10px;
        overflow: hidden;
        padding-top: 15px;
        padding-bottom: 50px;

        .cart_child_head {
            width: 100%;
            height: 40px;
            background-color: #fce0ad;
            line-height: 40px;
            font-size: 14px;

            .checked_box {
                float: left;
                position: relative;
                top: 50%;
                transform: translateY(-60%);
                margin: 0 8px;
            }

            i {
                margin-left: 5px;
                vertical-align: -1px;
            }
        }

        .cart_child_content {
            padding: 10px 0;
            box-sizing: border-box;
            background-color: #fff;
        }

        .cart_child_foot {
            position: absolute;
            bottom: 0px;
            height: 50px;
            width: 100%;
            padding: 10px 20px;
            box-sizing: border-box;
            background-color: #fff;
            border-top: 1px solid rgb(241, 241, 241);

            .btn_group {
                position: relative;
                float: right;
                height: 100%;
                line-height: 30px;
                width: 2.7rem;
                border-radius: 3px;
                overflow: hidden;

                div {
                    float: left;
                    height: 100%;
                }

                div:nth-child(1) {
                    text-align: center;
                    font-size: 16px;
                    width: 55%;
                    color: $redcolor;
                    background-color: #fef6df;
                }

                div:nth-child(2) {
                    width: 45%;
                    text-align: center;
                    font-size: 13px;
                    background-image: linear-gradient(
                        to right,
                        #ffe04d,
                        #ffc74c
                    );
                }
            }
        }
    }
}

.goods-card {
    margin: 0;
    background-color: #fff;
}

.delete-button {
    height: 100%;
    width: 70px;
}
</style>
