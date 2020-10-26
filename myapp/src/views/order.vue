<template>
    <div class="order">
        <van-row class="order_title">
            <van-col
                span="8"
                :class="{ active: isActive[0] }"
                @click="changeOrder(0)"
                >待支付</van-col
            >
            <van-col
                span="8"
                :class="{ active: isActive[1] }"
                @click="changeOrder(1)"
                >配送中</van-col
            >
            <van-col
                span="8"
                :class="{ active: isActive[2] }"
                @click="changeOrder(2)"
                >待评价</van-col
            >
        </van-row>

        <div class="order_content" v-if="isShow">
            <div
                class="order_content_child"
                v-for="(item, index) in orderdata"
                :key="index"
            >
                <div class="box_head">
                    <img src="@/assets/img/shop_list/store_icon.jpg" alt="" />
                    <div>
                        {{ item.name
                        }}<i><van-icon name="arrow" size="15" /></i>
                    </div>
                    <span>{{ item.state }}</span>
                </div>
                <div class="box_content">
                    <p>
                        <span
                            >{{ item.goodsname }} &nbsp;&nbsp; x{{
                                item.number
                            }}</span
                        >
                        <span>${{ item.sumprice }}</span>
                    </p>
                    <div>再来一单</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "order",
    mounted: function () {
        this.getJson("/public/static/order.json", this.getOrder);
    },
    data() {
        return {
            goodsList: "",
            isActive: [true, false, false],
            isShow: true,
            orderlist: {
                paying: [],
                transport: [],
                done: [],
            },
            orderdata: "",
        };
    },
    methods: {
        changeOrder(num) {
            this.isActive.fill(false);
            this.isActive[num] = true;
            if (num == 0) {
                this.orderdata = this.orderlist.paying;
            } else if (num == 1) {
                this.orderdata = this.orderlist.transport;
            } else if (num == 2) {
                this.orderdata = this.orderlist.done;
            }

            this.isShow = false;
            this.$nextTick(() => (this.isShow = true));
        },
        getJson(url, callback) {
            this.$axios
                .get(url)
                .then((res) => {
                    callback(res.data);
                })
                .catch((e) => {
                    console.log("获取数据失败");
                });
        },
        getOrder(data) {
            let userinfo = this.$store.state.userinfo;
            for (const key in data) {
                if (userinfo.username == key) {
                    for (const i in data[key]) {
                        let _obj = {};
                        let temp = data[key][i];
                        _obj.url = require("@/assets/img/shop_list/store_icon.jpg");
                        temp.forEach((item) => {
                            _obj.name = item.storename;
                            _obj.goodsname = item.goodsname;
                            _obj.number = item.number;
                            _obj.sumprice = item.sumprice;
                            if (i == "done") {
                                this.orderlist.done.push(_obj);
                            } else if (i == "paying") {
                                this.orderlist.paying.push(_obj);
                            } else if (i == "transport") {
                                this.orderlist.transport.push(_obj);
                            }
                        });
                    }
                }
            }
            this.orderdata = this.orderlist.paying;
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

.order_title {
    height: 45px;
    background: #ffffff;
    text-align: center;
    line-height: 50px;
    font-size: 14px;

    .active {
        font-size: 16px;
        font-weight: 800;
    }
}

.order_content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
    margin-top: 25px;

    .order_content_child {
        width: 100%;
        height: auto;
        background: #ffffff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 3px;
        margin-bottom: 20px;

        .box_head {
            height: 70px;
            border-bottom: 1px solid #e5e5e5;
            position: relative;
            box-sizing: border-box;
            padding: 10px;
            overflow: hidden;

            img {
                float: left;
                height: 100%;
            }

            div {
                margin-left: 10px;
                line-height: 50px;
                float: left;

                i {
                    margin-left: 5px;
                    vertical-align: -1px;
                }
            }

            span {
                float: right;
                font-size: 12px;
                line-height: 50px;
            }
        }

        .box_content {
            height: 80px;
            padding: 0 10px;

            p {
                padding: 8px 0px;
                font-size: 14px;

                span:nth-child(2) {
                    float: right;
                }
            }

            div {
                float: right;
                border: 1px solid #949494;
                border-radius: 5px;
                font-size: 14px;
                padding: 3px 5px;
                margin-top: 5px;
            }
        }
    }
}
</style>
