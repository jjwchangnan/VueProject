<template>
    <div class="settlement">
        <div class="settlement_top">
            <div class="st_header">
                <i>
                    <van-icon
                        name="arrow-left"
                        color="rgb(49, 49, 49)"
                        size="25"
                        @click="$router.go(-1)"
                    />
                </i>
                提交订单
            </div>

            <div class="settlement_box addr_box">
                <div class="addr_box_head">骑手配送</div>
                <div>
                    <van-cell
                        is-link
                        value-class="yellowtext"
                        center
                        @click="isShowAddress = true"
                    >
                        <template #title>
                            <p>蔷薇园 6栋1单元1801</p>
                            <p style="color: #969799; font-size: 14px">
                                张（先生） 12323223232
                            </p>
                        </template>
                    </van-cell>

                    <van-action-sheet v-model="isShowAddress" title="标题">
                        <van-address-list
                            v-model="chosenAddressId"
                            :list="list"
                            :disabled-list="disabledList"
                            disabled-text="以下地址超出配送范围"
                            default-tag-text="默认"
                            @add="onAdd"
                            @edit="onEdit"
                        />
                    </van-action-sheet>
                </div>
                <hr />
                <div>
                    <van-cell
                        is-link
                        value="大约21:57送达"
                        title="立刻送出"
                        value-class="yellowtext"
                    />
                    <van-action-sheet v-model="show" title="标题">
                        <div class="content">内容</div>
                    </van-action-sheet>
                </div>
            </div>
        </div>

        <div class="settlement_box goods_box">
            <div class="goods_box_head">
                {{ storeData[storeid].storename }}
            </div>
            <hr />
            <div class="goods_box_list">
                <van-card
                    v-for="(data, id) in cartData[storeid]"
                    :key="id"
                    :num="data.num"
                    :price="data.price"
                    desc="描述信息"
                    :title="data.name"
                    v-show="data.num > 0 ? true : false"
                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                />
            </div>
            <hr />
            <div>
                <van-cell value="￥4.5" title="配送费" value-class="redtext" />
            </div>
            <hr />
            <div>
                <van-cell
                    value="-￥4.5"
                    title="商家折扣"
                    value-class="redtext"
                />
            </div>
            <hr />
            <div>
                <coupon @getDiscount="changeDiscount" :price="upDataPrice()"></coupon>
            </div>
        </div>

        <van-submit-bar
            button-color="#FF7F00"
            :price="TotalPrice"
            text-align="left"
            button-text="提交订单"
        />
    </div>
</template>

<script>
import coupon from "@/components/coupon"
export default {
    name: "settlement",
    created() {
        this.storeid = this.$route.query.storeid;
		this.goodsData = this.$store.getters.getGoodsList(this.storeid);
	},
	components: {
		coupon
	},
    data() {
        return {
            show: false,
            isShowAddress: false,
            storeid: "",
            cartData: this.$store.getters.getCart,
            storeData: this.$store.getters.getStore,
			goodsData: "",
			discount: 0,

            chosenAddressId: "1",
            list: [
                {
                    id: "1",
                    name: "张三",
                    tel: "13000000000",
                    address:
                        "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
                    isDefault: true,
                },
                {
                    id: "2",
                    name: "李四",
                    tel: "1310000000",
                    address: "浙江省杭州市拱墅区莫干山路 50 号",
                },
            ],
            disabledList: [
                {
                    id: "3",
                    name: "王五",
                    tel: "1320000000",
                    address: "浙江省杭州市滨江区江南大道 15 号",
                },
            ],
        };
	},
	computed: {
		TotalPrice() {
			let price = this.upDataPrice()
			return (price-this.discount)*100
		}
	},
    methods: {
        onAdd() {
            Toast("新增地址");
        },
        onEdit(item, index) {
            Toast("编辑地址:" + index);
		},
		upDataPrice() {
			let storeid = this.storeid;
			let sum = 0;
			let cart = this.$store.getters.getCart;
            if(cart){
				cart = cart[storeid]
				for (const id in cart) {
					sum += cart[id].price * cart[id].num;
				}
				return sum.toFixed(2)
			}
		},
		changeDiscount(data) {
			this.discount = data
		}
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.settlement {
    background-color: #f5f5f5;
    min-height: 100vh;
    height: auto;
    padding-bottom: 100px;
}

.settlement_top {
    height: 33vh;
    width: 100%;
    background-image: linear-gradient(to bottom, #ffcc33 80%, #f5f5f5);
    margin-bottom: -40px;
}

.st_header {
    width: 100%;
    height: 60px;
    position: relative;
    padding: 0px 16px;
    line-height: 60px;
    box-sizing: border-box;
    text-align: center;
    font-weight: bold;
    color: rgb(49, 49, 49);
    letter-spacing: 1px;

    i {
        line-height: 60px;
        position: absolute;
        left: 5px;
    }
}

.settlement_box {
    position: relative;
    top: 15px;
    margin: 0 auto 15px auto;
    width: 94%;
    height: auto;
    background: white;
    border-radius: 15px;
    overflow: hidden;
}

.addr_box {
    > .addr_box_head {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #fff4d6;
        padding: 0 16px;
        box-sizing: border-box;
    }
}

hr {
    position: relative;
    margin: 0 auto;
    width: 90%;
    border-top: 0px;
    border-bottom: 1px solid #f7f7f7;
}

.goods_box {
    .goods_box_head {
        font-size: 14px;
        padding: 20px 16px;
        color: #6e6e6e;
    }

    > .goods_box_list .van-card {
        background-color: #fff;
        padding: 10px 16px;
    }
}
</style>
