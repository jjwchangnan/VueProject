<template>
    <div
        class="carousel_box"
        @mouseenter="isShowBtn = !isShowBtn"
        @mouseleave="isShowBtn = !isShowBtn"
    >
        <transition name="slide-fade-left">
            <i
                class="el-icon-arrow-left carousel_btn carousel_btn_left"
                v-show="isShowBtn"
                @click="movePage('left')"
            ></i>
        </transition>
        <transition name="slide-fade-right">
            <i
                class="el-icon-arrow-right carousel_btn carousel_btn_right"
                v-show="isShowBtn"
                @click="movePage('right')"
            ></i>
        </transition>
        <div
            class="carousel_content"
            :style="{ left: change_style.left, transition: change_style.transition }"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "number"
    ],
    data() {
        return {
            now_carousel: 1,
            isChangePage: false,
            change_style: {
                left: "0px",
                transition: "left 0.5s",
            },
            isShowBtn: false,
        };
    },
    methods: {
        movePage: function (active) {
            if (!this.isChangePage) {
                this.isChangePage = true;
                var index_max = this.number - 2;
                if (active == "left") {
                    this.now_carousel -= 1;
                } else {
                    this.now_carousel += 1;
                }

                this.change_style.left = (this.now_carousel - 1) * -520 + "px";

                var t;
                clearTimeout(t);
                var that = this;
                t = setTimeout(function () {
                    if (that.now_carousel == 0) {
                        that.change_style.transition = "left 0s";
                        that.change_style.left = (index_max - 1) * -520 + "px";
                        that.isChangePage = false;
                        that.now_carousel = index_max;
                    } else if (that.now_carousel == index_max + 1) {
                        that.change_style.transition = "left 0s";
                        that.change_style.left = "0px";
                        that.isChangePage = false;
                        that.now_carousel = 1;
                    } else {
                        that.isChangePage = false;
                    }
                }, 500);

                this.change_style.transition = "left 0.5s";
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

.carousel_content > div {
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

.slide-fade-right-enter-active,
.slide-fade-right-leave-active,
.slide-fade-left-enter-active,
.slide-fade-left-leave-active {
    transition: all 0.5s ease;
}
.slide-fade-right-enter,
.slide-fade-right-leave-to {
    transform: translateX(60px);
    opacity: 0;
}

.slide-fade-left-enter,
.slide-fade-left-leave-to {
    transform: translateX(-60px);
    opacity: 0;
}

.carousel_content {
    position: relative;
    margin-left: -520px;
    transition: left 0.5s;
    left: 0px;
}
</style>
