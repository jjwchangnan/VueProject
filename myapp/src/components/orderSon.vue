<template>
    <div class="orderson">
        <div class="my_vancard" v-for="(item, index) in orderData" :key="index">
            <div
                class="vancard_head"
                @click="
                    $router.push({
                        path: '/storelist',
                        query: { storeid: item.storeid },
                    })
                "
            >
                <span>{{ item.storename }}</span>
                <i><van-icon name="arrow" size="15" /></i>
            </div>
            <van-card
                num="2"
                :price="item.price.toFixed(2)"
                desc="描述信息"
                :title="item.goodsname"
                thumb="https://img.yzcdn.cn/vant/cat.jpeg"
                class="my_van_card"
            >
                <template #footer class="btn_group">
                    <van-button>取消订单</van-button>
                    <van-button color="#FF7F00">现在支付</van-button>
                </template>
            </van-card>
        </div>
    </div>
</template>

<script>
export default {
    name: "orderson",
    props: ["orderData"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my_vancard {
    margin-bottom: 20px;
    border-radius: 5px;
    overflow: hidden;
}

.vancard_head {
    width: 100%;
    height: 40px;
    background-color: #fff;
    line-height: 40px;
    font-size: 14px;
    padding-left: 16px;
    box-sizing: border-box;

    i {
        margin-left: 5px;
        vertical-align: -1px;
    }
}

.my_van_card {
    padding: 16px 16px;
    margin-top: 0px !important;
}

hr {
    position: relative;
    margin: 0 auto;
    width: 90%;
    border-top: 0px;
    border-bottom: 1px solid #f7f7f7;
}

.van-card__content {
    padding-left: 15px;
}

.van-card__footer {
    margin-top: 20px;

    button {
        height: 30px;
        min-width: 60px;
    }
}
</style>
