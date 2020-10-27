<template>
    <div id="app_login">
        <!-- <app-header></app-header> -->
        <div id="login-group">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    clickable
                    :class="{ 'input-bgcolor': true }"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <br />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    clickable
                    placeholder="密码"
                    :class="{ 'input-bgcolor': true }"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-form>
            <div id="btn-group">
                <van-button
                    round
                    block
                    color="linear-gradient(to right, #ffb01c, #ff7c2d)"
                    native-type="button"
                    @click="onSubmit"
                >
                    立即登录
                </van-button>
                <p>还没有账号？点击<a href="#">立刻注册</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import appHeader from "@/components/header";

export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
        };
	},
    components: {
        appHeader,
    },
    methods: {
        onSubmit() {
            this.$axios
                .get("/static/user.json")
                .then((res) => {
                    this.doLogin(res.data);
                })
                .catch((e) => {
                    console.log("获取数据失败");
                });
        },
        doLogin(data) {
            for (const key in data) {
                if ((data[key].username = this.username))
                    if ((data[key].password = this.password)) {
                        this.$store.commit("setUser", data[key]);
                        this.$router.push({ path: "/" });
                    } else alert("error");
                else alert("error");
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
html,
body {
    width: 100%;
    height: 100%;
}
#app_login {
    height: 100vh;
    background: url("../assets/img/login_bg.png") no-repeat;
    background-size: 100%;
}
#login-group {
    position: relative;
    margin: 0 auto;
    height: auto;
    width: 85vw;
    top: 20%;
}
#btn-group {
    margin: 50px 20px 20px 20px;
    text-align: center;

    p {
        margin-top: 8px;
        font-size: 12px;
        letter-spacing: 1px;

        a {
            color: #177fff;
        }
    }
}
</style>
