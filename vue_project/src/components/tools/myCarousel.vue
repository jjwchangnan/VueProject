<template>

    <div
        class="carousel_box"
        @mouseenter="isShowBtn = !isShowBtn"
        @mouseleave="isShowBtn = !isShowBtn"
    >
        <transition name="fade">
            <i
                class="el-icon-arrow-left carousel_btn carousel_btn_left"
                v-show="isShowBtn"
                @click="movePage('left')"
            ></i>
        </transition>
        <transition name="fade">
            <i
                class="el-icon-arrow-right carousel_btn carousel_btn_right"
                v-show="isShowBtn"
                @click="movePage('right')"
            ></i>
        </transition>
        <ul class="carousel_content" :style="carousel_style">
            <li v-for="(item, index) in carousel" :key="index">
                <img :src="item.imgSrc" alt />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created: function () {
        var temp = this.carousel;
        for (const x in temp) {
            if (x == 0) {
                var first = temp[x];
                first.id = -1;
            } else if (x == temp.length - 1) {
                var last = temp[x];
                last.id = 0;
            }
        }
        temp.unshift(last);
        temp.push(first);
    },
    data() {
        return {
            now_carousel: 1,
            carousel_style: {
                position: "relative",
                marginLeft: "-520px",
                transition: "left 0.5s",
                left: "0px",
            },
            isChangePage: false,
            carousel: [
                {
                    id: 1,
                    imgSrc: require("../../assets/home_carousel/carousel_1.jpg"),
                },
                {
                    id: 2,
                    imgSrc: require("../../assets/home_carousel/carousel_2.jpg"),
                },
                {
                    id: 3,
                    imgSrc: require("../../assets/home_carousel/carousel_3.jpg"),
                },
                {
                    id: 4,
                    imgSrc: require("../../assets/home_carousel/carousel_4.jpg"),
                },
            ],
            isShowBtn: false,
        };
    },
    methods: {
        movePage: function (active) {
            if (!this.isChangePage) {
                this.isChangePage = true;
                var index_max = this.carousel.length - 2;
                if (active == "left") {
                    this.now_carousel -= 1;
                } else {
                    this.now_carousel += 1;
                }

                this.carousel_style.left =
                    (this.now_carousel - 1) * -520 + "px";

                var t;
                clearTimeout(t);
                var that = this;
                t = setTimeout(function () {
                    if (that.now_carousel == 0) {
                        that.carousel_style.transition = "left 0s";
                        that.carousel_style.left =
                            (index_max - 1) * -520 + "px";
                        that.isChangePage = false;
                        that.now_carousel = index_max;
                    } else if (that.now_carousel == index_max + 1) {
                        that.carousel_style.transition = "left 0s";
                        that.carousel_style.left = "0px";
                        that.isChangePage = false;
                        that.now_carousel = 1;
                    } else {
                        that.isChangePage = false;
                    }
                }, 500);

                this.carousel_style.transition = "left 0.5s";
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel_box {
    width: 100%;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    white-space: nowrap;
}

.carousel_content li {
    width: 520px;
    height: 280px;
    display: inline-block;
}

.carousel_box > .carousel_btn {
    position: absolute;
    z-index: 10001;
    height: 35px;
    width: 35px;
    line-height: 35px;
    background-color: black;
    opacity: 0.5;
    color: white;
    text-align: center;
    top: 50%;
    margin-top: -15px;
    cursor: pointer;
}

.carousel_btn_left {
    left: 0px;
    border-radius: 35px;
    margin-left: 20px;
}

.carousel_btn_right {
    right: 0px;
    border-radius: 35px;
    margin-right: 20px;
}
</style>
