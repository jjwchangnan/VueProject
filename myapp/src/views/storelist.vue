<template>
    <div class="storelist" @click="isShowSearch = false">
        <div class="st_header">
            <i>
                <van-icon
                    name="arrow-left"
                    color="#fff"
                    size="25"
                    @click="$router.go(-1)"
                />
            </i>
            <div class="search_box">
                <transition name="fade-move">
                    <i
                        v-show="!isShowSearch"
                        @click.stop="isShowSearch = !isShowSearch"
                    >
                        <van-icon name="search" color="#fff" size="25" />
                    </i>
                </transition>
                <transition name="show-search">
                    <div v-show="isShowSearch" @click.stop="">
                        <van-search
                            v-model="search_value"
                            shape="round"
                            background="transparent"
                            placeholder="请输入搜索关键词"
                            style="height: 50px"
                        />
                    </div>
                </transition>
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
                @upDataCart="upDataPrice"
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
                    <span>￥</span>{{ price_sum }} <s><span>￥</span>48.65</s>
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
                    @upDataCart="upDataPrice"
                ></goods-list>
            </van-popup>
        </div>
    </div>
</template>

<script>
import GoodsList from "@/components/goodsList";

export default {
    name: "storelist",
    mounted: function () {
        this.goodsInfo();
    },
    data() {
        return {
            show: false,
            isShowSearch: false,
            search_value: "",
            storeinfo: "",
            shoplist: "",
            price_sum: 0,
        };
    },
    components: {
        GoodsList,
    },
    computed: {},
    methods: {
        showPopup() {
            this.show = !this.show;
        },
        goodsInfo() {
			let storeid = this.$route.query.storeid;
			this.storeinfo = this.$store.getters.getStoreInfo(storeid)
			this.shoplist = this.$store.getters.getGoodsList(storeid)
        },
        upDataPrice() {
			let sum = 0;
			let goodsInfo = this.$store.getters.getGoodsList(this.$route.query.storeid)
			let cart = this.$store.getters.getCart;
			cart = cart[this.$route.query.storeid]
			for (const id in cart) {
				sum += goodsInfo[id].price * cart[id]
			}
			this.price_sum = sum.toFixed(2);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$redcolor: #F05454;
$yellowcolor: #FF7F00;
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

    > i:nth-child(1) {
        float: left;
    }
}

.search_box {
    position: absolute;
    right: 0;
    width: 85%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;

    > i {
        float: right;
    }

    > div {
        .van-search {
            padding-right: 0;
            padding-left: 0;
        }
    }

    .fade-move-enter-active,
    .fade-move-leave-active {
        transition: all 0.25s;
    }
    .fade-move-enter,
    .fade-move-leave-to {
        opacity: 0;
        transform: translateX(50px);
    }

    .show-search-enter-active,
    .show-search-leave-active {
        transition: all 0.7s;
    }
    .show-search-enter,
    .show-search-leave-to {
        opacity: 0;
        transform: translateX(100%);
    }
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
        background-color: $yellowcolor;
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

.van-popup--bottom.van-popup--round {
	border-radius: 10px 10px 0 0;
}
</style>
