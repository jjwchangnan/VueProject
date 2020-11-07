<template>
    <div class="cart">
        <div
            class="cart_child"
            v-for="(item, index) in cartData"
            :key="index"
            v-show="sumPrice(index) == 0 ? false : true"
        >
            <div class="cart_child_head">
                <div class="checked_box">
                    <van-checkbox
                        checked-color="#ff7c2d"
                        icon-size="18px"
                        v-model="checked"
                    ></van-checkbox>
                </div>
                <span
                    @click="
                        $router.push({
                            path: '/storelist',
                            query: { storeid: index },
                        })
                    "
                    >{{ storeData[index].storename }}</span
                >
                <i><van-icon name="arrow" size="15" /></i>
            </div>
            <div
                class="cart_child_content"
                v-for="(data, key) in item"
                :key="key"
                v-show="data == 0 ? false : true"
            >
                <van-swipe-cell :right-width="70">
                    <van-card
                        :num="data.num"
                        :price="data.price"
                        desc="描述信息"
                        :title="data.name"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                        @click="
                            $router.push({
                                path: '/storelist',
                                query: { storeid: index },
                            })
                        "
                    >
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
                <div
                    class="btn_group"
                    @click="
                        $router.push({
                            path: '/settlement',
                            query: { storeid: [index] },
                        })
                    "
                >
                    <div>${{ sumPrice(index) }}</div>
                    <div>去结算</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "cart",
    data() {
        return {
            checked: true,
            cartData: this.$store.getters.getCart,
            storeData: this.$store.getters.getStore,
        };
    },
    methods: {
        sumPrice(storeid) {
            let sum = 0;
            let obj = this.cartData[storeid];
            for (const i in obj) {
                sum += obj[i].price * obj[i].num;
            }

            return sum.toFixed(2);
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
$redcolor: #f05454;
$yellowcolor: #ff7f00;
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
            padding: 0;
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
