<template>
    <div class="storelist">
        <div class="st_header">
            <i
                ><van-icon
                    name="arrow-left"
                    color="#fff"
                    size="25"
                    @click="$router.push({ path: '/' })"
            /></i>
            <div class="search_box">
                <van-search
                    v-model="search_value"
                    shape="round"
                    background="transparent"
                    placeholder="请输入搜索关键词"
                    style="height: 50px"
                />
            </div>
        </div>

        <div class="st_info">
            <p>{{ storeinfo.storename }}</p>
            <p>月售{{ storeinfo.salescount }}&nbsp;&nbsp;平均配送45分钟</p>
            <p>公告： {{ storeinfo.notice }}</p>

            <div class="st_icon">
                <img
                    src="@/assets/img/shop_list/store_icon.jpg"
                    width="100%"
                    alt=""
                />
            </div>
        </div>

        <div class="st_list">
            <goods-list
                :goodslist="shoplist"
                :storeid="storeinfo.storeid"
            ></goods-list>
        </div>

        <div class="st_shoping_cart">
            <div
                class="st_shoping_cart_son st_shoping_cart_icon"
                @click="showPopup"
            >
                <van-icon name="shopping-cart" size="40" color="#ff9642" />
            </div>

            <div class="st_shoping_cart_son st_shoping_cart_text">
                <p>
                    <span>￥</span>{{ priceSum }} <s><span>￥</span>48.65</s>
                </p>
                <p>&nbsp;免配送费</p>
            </div>

            <div
                class="st_shoping_cart_son st_shoping_cart_buy"
                @click="$router.push({ path: '/cart' })"
            >
                去结算
            </div>
        </div>

        <div>
            <van-popup
                v-model="show"
                round
                position="bottom"
                :class="{ st_shoping_cart_list: true }"
            >
                <goods-list
                    :goodslist="shoplist"
                    :storeid="storeinfo.storeid"
                ></goods-list>
            </van-popup>
        </div>
    </div>
</template>

<script>
import GoodsList from "@/components/goodsList";

export default {
    name: "storelist",
    created: function () {
		this.goodsInfo();
    },
    data() {
        return {
            show: false,
            search_value: "",
            storeinfo: {
                storename: "",
                notice: "",
                salescount: "",
                storeid: "",
            },
            shoplist: [],
        };
    },
    components: {
        GoodsList,
	},
	computed: {

	},
    methods: {
        showPopup() {
            this.show = !this.show;
        },
        goodsInfo(data) {
			let storeid = this.$route.query.storeid
			let store_info = this.$store.state.store[storeid]
			this.storeinfo.storename = store_info.storename;
            this.storeinfo.notice = store_info.notice;
			this.storeinfo.salescount = store_info.salescount;
			this.storeinfo.storeid = storeid;
			
			for (const i in store_info.goodslist) {
				this.$set(this.shoplist, i, store_info.goodslist[i])
			}
        },
    },
    computed: {
        priceSum: function () {
            let price_sum = 0;
            for (const key in this.shoplist) {
                price_sum +=
                    this.shoplist[key].number * this.shoplist[key].price;
            }
            return price_sum.toFixed(2);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@mixin box_style {
    position: relative;
    width: 94%;
    left: 3%;
    margin-top: 25px;
    background-color: #ffffff;
    height: auto;
}

.storelist {
    height: 100vh;
    background-color: #eaeaea;
}

.st_header {
    width: 100%;
    height: 50px;
    position: relative;
    background-image: linear-gradient(to right, #ffb01c, #ff7c2d);
    padding: 0 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 6px #585858;

    i {
        line-height: 50px;
    }

    i:nth-child(1) {
        float: left;
    }
}

.search_box {
    position: absolute;
    right: 0;
    width: 70%;
    box-sizing: border-box;
}

.st_info {
    @include box_style;
    border-radius: 5px;
    padding: 5px 15px 10px 15px;
    box-sizing: border-box;

    p:nth-child(1) {
        font-size: 24px;
        letter-spacing: 1px;
        font-weight: 600;
        line-height: 35px;
    }

    p:nth-child(2) {
        font-size: 12px;
        color: #757272;
        line-height: 20px;
    }

    p:nth-child(3) {
        font-size: 12px;
        color: #757272;
        line-height: 25px;
    }

    .st_icon {
        position: absolute;
        width: 60px;
        height: 60px;
        border-radius: 10px;
        overflow: hidden;
        right: 20px;
        top: -10px;
    }
}

.st_list {
    @include box_style;
    overflow: hidden;
    border-radius: 5px;
}

.st_shoping_cart {
    @include box_style;
    position: absolute;
    bottom: 10px;
    height: 50px;
    border-radius: 50px;
    box-sizing: border-box;
    background-color: #373a40;
    box-sizing: border-box;
    z-index: 10000;

    .st_shoping_cart_son {
        float: left;
    }

    .st_shoping_cart_icon {
        padding: 5px 20px;
        height: 50px;
    }

    .st_shoping_cart_text {
        color: #ffffff;

        p:nth-child(1) {
            font-size: 18px;
            line-height: 30px;

            span {
                font-size: 14px;
            }

            s {
                font-size: 14px;
                color: #968c83;

                span {
                    font-size: 12px;
                }
            }
        }

        p:nth-child(2) {
            font-size: 12px;
            line-height: 10px;
        }
    }

    .st_shoping_cart_buy {
        position: relative;
        right: -1px;
        width: 80px;
        height: 50px;
        background-color: #ff9642;
        float: right;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
    }
}

.st_shoping_cart_list {
    height: auto;
    min-height: 20%;
    padding-bottom: 85px;
    padding-top: 20px;
}
</style>
