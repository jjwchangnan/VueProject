<template>
    <div class="home">
        <div class="search_box">
            <van-search
                v-model="search_value"
                background="transparent"
                placeholder="请输入搜索关键词"
            />
        </div>

        <div class="my_carousel_box">
            <my-carousel :isShowNav="false" :isShowBox="false">
                <img src="@/assets/img/banner1.png" alt="" />
                <img src="@/assets/img/banner2.png" alt="" />
            </my-carousel>
            <div></div>
        </div>

        <div class="content_box_padding">
            <van-grid :column-num="4" :border="false" clickable>
                <van-grid-item
                    v-for="key in 8"
                    :key="key"
                    icon="photo-o"
                    text="文字"
                />
            </van-grid>
        </div>

        <hr class="hr_gray" />

        <div class="discount_box">
            <div class="shop_list_head">
                <span>今日折扣</span>
            </div>

            <van-grid
                :border="false"
                :column-num="2"
                class="discount_box_content"
            >
                <van-grid-item
                    v-for="(item, index) in discountList"
                    :key="index"
                >
                    <van-image :src="item.imgSrc" />
                </van-grid-item>
            </van-grid>
        </div>

        <hr class="hr_gray" />

        <div class="shop_list">
            <div class="shop_list_head">
                <span>推荐店铺</span>
            </div>

            <div
                class="shop_list_content"
                v-for="(item, index) in StoreList"
                :key="index"
                @click="
                    $router.push({
                        path: '/storelist',
                        query: { storeid: index },
                    })
                "
            >
                <img src="@/assets/img/food1.png" width="100%" alt="" />
                <p>
                    {{ item.storename }} <span>月售 {{ item.salescount }}</span>
                </p>
                <van-rate v-model="item.star" color="#ffd21e" readonly />

                <!-- <div class="shop_list_icon">
                    <img :src="item.iconurl" alt="" />
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    mounted: function () {
        this.getJson();
    },
    data() {
        return {
            value: 2.5,
            search_value: "",
            discountList: [
                {
                    imgSrc: require("@/assets/img/discount1.png"),
                },
                {
                    imgSrc: require("@/assets/img/discount2.png"),
                },
            ],
            CarouselImg: [
                {
                    imgSrc: require("@/assets/img/food1.png"),
                    alt: "第一张图",
                },
                {
                    imgSrc: require("@/assets/img/food2.png"),
                    alt: "第二张图",
                },
            ],
            StoreList: {},
        };
    },
    methods: {
        getJson() {
            this.$axios
                .get("/store")
                .then((res) => {
					this.$store.commit("saveStoreInfo", res.data.storelist);
					let userinfo = this.$store.getters.getUerInfo("name")
					if(userinfo != ""){
						this.$store.commit("initCartInfo", userinfo)
					}
					var temp = this.$store.getters.getStore;
					for (const key in temp) {
						this.$set(this.StoreList, key, temp[key]);
					}
                })
                .catch((e) => {
                    console.log("Error");
                });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
    position: relative;
    padding-bottom: 60px;
}

.hr_gray {
    width: 100%;
    border: 0px;
    background-color: #e5e5e5;
    height: 8px;
}

.content_box_padding {
    box-sizing: border-box;
}

.search_box {
    width: 100%;
    margin: 10px 0 0 0;
    padding: 5px;
    box-sizing: border-box;
}

.my_carousel_box {
    height: auto;
    *zoom: 1;
    padding: 5px 17px;
    box-sizing: border-box;

    &:after {
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
}

.discount_box {
    width: 100%;
    box-sizing: border-box;

    .shop_list_head {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 5px 17px;
        box-sizing: border-box;

        span {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1px;
        }
    }

    .discount_box_content {
        padding: 0px 9px;
    }
}

.shop_list {
    width: 99%;
    position: relative;
    margin: 0 auto;

    .shop_list_head {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 5px 17px;
        box-sizing: border-box;

        span {
            font-size: 16px;
            font-weight: 600;
            letter-spacing: 1px;
        }
    }

    .shop_list_content {
        position: relative;
        width: 100%;
        margin-top: 10px;
        background-color: #fff;
        padding: 5px 15px;
        box-sizing: border-box;
        border-radius: 10px;

        p {
            font-size: 18px;
            margin-bottom: 5px;

            span {
                float: right;
                font-size: 14px;
            }
        }
    }

    .shop_list_icon {
        position: absolute;
        bottom: 85px;
        margin-left: 10px;
        border-radius: 5px;
        width: 80px;
        height: 50px;
        background-color: #fff;
        text-align: center;

        img {
            display: inline-block;
            height: 100%;
            max-width: 100%;
        }
    }
}
</style>
