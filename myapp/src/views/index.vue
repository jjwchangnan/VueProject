<template>
    <div>
        <app-header @left_nav="isShowLeftNav = !isShowLeftNav"></app-header>
        <router-view />
        <app-footer></app-footer>
        <transition name="slide-left-fade">
            <div class="left_nav" v-show="isShowLeftNav">
                <div class="left_nav_head">
                    <div class="userbox" @click="toLogin">
                        <div class="userbox_logo">
                            <img
                                src="@/assets/img/icon/userlogo.png"
                                height="100%"
                                alt=""
                            />
                        </div>
                        <div class="userbox_text">
                            <p>
                                {{ user.username == "tourist" ? "游客" : user.username }}
                            </p>
                            <p>{{ user.username == "tourist" ? "点击此处登录" : user.email }}</p>
                        </div>
                    </div>
                    <i @click="isShowLeftNav = !isShowLeftNav"
                        ><van-icon name="cross" size="30"
                    /></i>
                </div>

                <div class="left_nav_content">
                    <ul>
                        <li
                            v-for="item in left_nav_list"
                            :key="item.text"
                            class="menu_btn_hover"
							@click="left_nav_event(item.id)"
                        >
                            <i
                                ><van-icon
                                    :name="item.icon"
                                    color="#a4aaaf"
                                    size="25"
                            /></i>
                            <span>{{ item.text }}</span>
                        </li>
                    </ul>
                </div>

                <div class="left_nav_btn_group">
                    <div class="left_nav_bottom_btn menu_btn_hover">
                        <i
                            ><van-icon
                                name="comment-o"
                                color="#a4aaaf"
                                size="20" /></i
                        >Chat
                    </div>
                    <div class="left_nav_bottom_btn menu_btn_hover">
                        <i
                            ><van-icon
                                name="phone-o"
                                color="#a4aaaf"
                                size="20" /></i
                        >To call
                    </div>
                </div>
            </div>
        </transition>
		<coupon ref="coupon" :showLine="false"></coupon>
    </div>
</template>

<script>
import appHeader from "@/components/header";
import appFooter from "@/components/footer";
import coupon from "@/components/coupon"

export default {
    name: "index",
    components: {
        appHeader,
		appFooter,
		coupon
	},
    data() {
        return {
			user: this.$store.getters.getUerInfo(),
			isLogin: false,
            isShowLeftNav: false,
            left_nav_list: [
                {
					id: "user",
                    icon: "user-o",
                    text: "个人中心",
                    url: "",
                },
                {
					id: "addr",
                    icon: "wap-home-o",
                    text: "我的地址",
                    url: "",
                },
                {
					id: "collection",
                    icon: "star-o",
                    text: "我的收藏",
                    url: "",
                },
                {
					id: "order",
                    icon: "cash-back-record",
                    text: "账单流水",
                    url: "",
                },
                {
					id: "discount",
                    icon: "discount",
                    text: "优惠券",
                    url: "",
                },
            ],
        };
    },
    methods: {
		toLogin() {
			if(!this.isLogin)
				this.$router.push({"path": "/login"})
		},
		left_nav_event(type) {
			if(type == "discount"){
				this.$refs.coupon.showBox()
			}
		}
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left_nav {
    position: fixed;
    top: 0;
    width: 80%;
    height: 100vh;
    background: #fff;
    box-shadow: 2px 0px 100px #000000;
    z-index: 2000;

    .left_nav_head {
        position: relative;
        width: 100%;
        height: 90px;
        border-bottom: 1px solid #e5e7e9;

        i {
            top: 0;
            position: absolute;
            line-height: 90px;
            margin-left: 10px;
        }

        .userbox {
            position: relative;
            padding-left: 1.5rem;
            box-sizing: border-box;
            height: 100%;
            width: 100%;

            .userbox_logo {
                height: 100%;
                position: relative;
                float: left;
                z-index: 10000;
            }

            .userbox_logo img {
                height: 70%;
                position: relative;
                top: 15%;
            }

            .userbox_text {
                position: relative;
                height: 60%;
                top: 20%;
                font-size: 14px;
                padding-left: 80px;

                p:nth-child(1) {
                    font-weight: 700;
                    color: black;
                    font-size: 20px;
                    line-height: 25px;
                }

                p:nth-child(2) {
                    font-weight: 600;
                    color: #495560;
                    font-size: 15px;
                    line-height: 30px;
                }
            }
        }
    }

    .left_nav_content {
        position: relative;
        width: 100%;
        height: 100%;

        ul {
            margin-top: 30px;
        }

        ul li {
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding: 0 25px;
            line-height: 50px;

            i {
                float: left;
                height: 50px;
                line-height: 50px;
            }

            span {
                color: #525e69;
                margin-left: 30px;
            }
        }
    }

    .left_nav_btn_group {
        position: absolute;
        bottom: 40px;
        width: 80%;
        height: 45px;
        margin-left: 25px;
        border: 2px solid #dbdddf;
        border-radius: 10px;
        color: #525e69;
        font-weight: 600;
        font-size: 16px;
        line-height: 45px;

        div:nth-child(1) {
            border-right: 2px solid #dbdddf;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        .left_nav_bottom_btn {
            float: left;
            height: 100%;
            width: 50%;
            text-align: center;
            box-sizing: border-box;

            i {
                vertical-align: -2.5px;
                margin-right: 5px;
            }
        }
    }
}
.menu_btn_hover {
    transition: all 0.5s linear;

    &:hover {
        background-color: #eaeeee;
    }

    &:active {
        background-color: #cccccc;
    }
}
.slide-left-fade-enter-active,
.slide-left-fade-leave-active {
    transition: all 0.5s ease;
}
.slide-left-fade-enter, .slide-left-fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
