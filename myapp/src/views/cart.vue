<template>
    <div class="cart">
        <div class="cart_child" v-for="(item, index) in cartData" :key="index">
            <div class="cart_child_head">
                <div class="checked_box">
                    <van-checkbox
                        checked-color="#ff7c2d"
                        icon-size="18px"
                        v-model="checked"
                    ></van-checkbox>
                </div>
                <span>{{ index }}</span>
                <i><van-icon name="arrow" size="15" /></i>
            </div>
            <div
                class="cart_child_content"
                v-for="(data, index) in item"
                :key="index"
            >
                <van-swipe-cell :right-width="70">
                    <van-card
                        :num="data.number"
                        :price="data.price"
                        desc="描述信息"
                        :title="data.goodsname"
                        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
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
                        />
                    </template>
                </van-swipe-cell>
            </div>
            <div class="cart_child_foot">
                <div class="btn_group">
                    <div>$30.33</div>
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
            cartData: {
                /* "lcl": [
					{
						storename: "lcl",
						goodsname: "pt",
						price: "4.5",
						number: "1",
					}
				] */
            },
        };
    },
    created: function () {
        this.getCart();
    },
    methods: {
        getCart() {
            let temp = this.$store.state.cart;
            for (const x in temp) {
                if (this.cartData[x] == undefined) this.cartData[x] = [];
                for (const y in temp[x]) {
                    let _obj = {};
                    _obj.storename = x;
                    _obj.goodsname = y;
                    _obj.price = temp[x][y].price;
                    _obj.number = temp[x][y].number;
                    this.cartData[x].push(_obj);
                }
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cart {
    background-color: #eaeaea;
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
                    color: #f56a79;
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
