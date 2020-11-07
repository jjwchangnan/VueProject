<template>
    <div class="coupon">
        <van-cell
            is-link
            :value="discountValue"
            title="使用红包"
            @click="showBox"
            value-class="redtext"
			v-if="showLine"
        />
        <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 90%; padding-top: 4px"
        >
            <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
				:show-close-button="showLine"
                @change="onChange"
                @exchange="onExchange"
            />
        </van-popup>
    </div>
</template>

<script>
const disabledCoupons = {
    available: 1,
    condition: "无使用门槛\n最多优惠12元",
    reason: "优惠券已过期",
    value: 150,
    name: "五折优惠券",
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "50%",
    unitDesc: "",
};
export default {
	name: "coupon",
	props: {
		price: {
			default: 0,
		},
		showLine: {
			default: true,
		}
	},
    created() {
        this.$http
            .get("/coupon")
            .then((res) => {
				let coupon = this.$store.getters.getCoupon
				let data = res.data
				let couponList = []
				for (const type in coupon) {
					let temp = 0
					do {
						couponList.push(data[type])
						++temp
					} while (temp < coupon[type])
				}
				this.coupons = couponList
            })
            .catch((e) => {
                console.log(e);
			});
    },
    data() {
        return {
            chosenCoupon: -1,
            coupons: [],
            disabledCoupons: [disabledCoupons],
			showList: false,
			discountValue: "-￥100"
        };
    },
    methods: {
		showBox() {
			this.showList = true
		},
        onChange(index) {
			if(this.showLine){
				this.chosenCoupon = index;
				this.discount(this.coupons[this.chosenCoupon].valueDesc)
			}
        },
        onExchange(code) {
			if(this.showLine){
				this.coupons.push(coupon);
			}
		},
		discount(val) {
			let temp
			if(val.indexOf("%") != -1){
				temp = parseInt(val.replace("%",""))/100 * this.price
			}else{
				temp = parseInt(val)
			}
			this.$emit('getDiscount', temp)
			temp = "-￥" + temp
			this.discountValue = temp
		}
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
