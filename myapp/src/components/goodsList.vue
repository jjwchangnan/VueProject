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
                <p>{{ item.goodsname }}</p>
                <p>月售{{ item.salescount }}</p>
                <p><span>￥</span>{{ item.price }}</p>
                <div>
                    <div class="minus-btn">
						<van-icon
							name="minus"
							size="8"
							color="#fff"
							@click="delCart(item.goodsid)"
							v-show="
								isNaN(goods[storeid][item.goodsid]) &&
								goods[storeid][item.goodsid] > 0
									? false
									: true
							"
						/>
					</div>
                    <span>{{
                        isNaN(goods[storeid][item.goodsid]) ? 0 : goods[storeid][item.goodsid]
                    }}</span>
					<div class="plus-btn">
						<van-icon
							name="plus"
							size="10"
							color="#fff"
							@click="addCart(item.goodsid)"
						/>
					</div>
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
    methods: function () {},
    data() {
        return {
            goods: this.$store.getters.getCart,
        };
	},
    methods: {
        addCart(id) {
			let obj = {
				handler: "add",
				storeid: this.storeid,
				goodsid: id
			}
			this.$store.commit("setCart", obj);
			this.upData();
        },
        delCart(id) {
			let obj = {
				handler: "del",
				storeid: this.storeid,
				goodsid: id
			}
			this.$store.commit("setCart", obj);
            this.upData();
        },
        upData() {
			this.$emit('upDataCart')
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$redcolor: #F05454;
$yellowcolor: #FF7F00;
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
            color: $redcolor;

            span {
                font-size: 12px;
            }
        }

        > div {
            position: absolute;
            right: 10px;
            bottom: 0px;

			> .minus-btn {
				display: inline-block;
				width: 20px;
				height: 20px;
				border-radius: 5px;
				background: #a3a3a3;
				text-align: center;

				i{
					display: inline-block;
					position: relative;
					width: 100%;
					height: 100%;
					line-height: 20px;
				}
			}

			> .plus-btn {
				display: inline-block;
				width: 20px;
				height: 20px;
				border-radius: 5px;
				background: #ff9642;
				text-align: center;
				
				i{
					display: inline-block;
					position: relative;
					width: 100%;
					height: 100%;
					line-height: 20px;
				}
			}

            span {
                margin: 0 10px;
            }
        }
    }
}

.last_st_list_son {
    border: 0px;
}
</style>
