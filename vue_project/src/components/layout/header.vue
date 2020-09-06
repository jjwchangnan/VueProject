<template>
  <div>
    <div class="app-head-top">
      <div>
        <div
          class="head_left_box"
          @mouseenter="show_country = !show_country"
          @mouseleave="show_country = !show_country"
        >
          <div>
            中国大陆
            <i class="el-icon-arrow-down"></i>
          </div>
          <ul v-show="show_country" class="country">
            <li v-for="(item, index) in list" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div
          class="head_left_box"
          @mouseenter="show_user = !show_user"
          @mouseleave="show_user = !show_user"
        >
          <div>
            {{ username }}
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="user-box" v-show="show_user">
            <div>
              <a href>账号管理</a>&nbsp; | &nbsp;
              <a href>退出</a>
            </div>
            <div class="user_head">
              <div>
                <img :src="head_user.imgSrc" alt="用户头像" />
              </div>
              <div>
                <p>淘气值：689</p>
                <p>普通会员</p>
              </div>
            </div>
            <div>
              <a href>查看你的专属权益</a>
            </div>
          </div>
        </div>
        <div class="head_left_box app_enter">
          <div>
            <a href>手机逛淘宝</a>
          </div>
        </div>
        <div
          class="head_right_box"
          @mouseenter="show_nav = !show_nav"
          @mouseleave="show_nav = !show_nav"
        >
          <div>
            网站导航
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="taobao_position" v-show="show_nav">
            <div class="taobao-nav">
              <div v-for="(lists, index) in nav_type" :key="index" :style="lists.isEnd">
                <h4 :style="{color: lists.color}">{{ lists.name }}</h4>
                <ul>
                  <li v-for="(item, index) in lists.list" :key="index" :style="lists.lineCount">
                    <a href>{{ item }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="head_right_box"
          @mouseenter="show_help = !show_help"
          @mouseleave="show_help = !show_help"
        >
          <div>
            联系客服
            <i class="el-icon-arrow-down"></i>
          </div>
          <div class="taobao_position help_box" v-show="show_help">
            <ul>
              <li>消费者客服</li>
              <li>卖家客服</li>
            </ul>
          </div>
        </div>
        <div class="head_right_box app_enter">
          <div>
            <a href>购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="app-head-bottom">
      <div>
        <img :src="adv_img.imgSrc" alt="headlogo" />
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    data() {
        return {
        show_country: false,
        show_user: false,
        show_nav: false,
        show_help: false,
        show_shop: false,
        head_user: {
            imgSrc: require("../../assets/user_head.jpg"),
            title: "用户头像",
        },
        adv_img: {
            imgSrc: require('../../assets/head_top.png'),
            title: "农村淘宝",
        },
        username: "灬风广陌",
        list: [
            "美国",
            "韩国",
            "马来西亚",
            "法国",
            "德国",
            "英国",
            "意大利",
            "西班牙",
            "加拿大",
            "匈牙利",
            "俄罗斯",
            "荷兰",
        ],
        nav_type: {
            type_a: {
            name: "主题市场",
            list: [
                "女装",
                "男装",
                "内衣",
                "鞋靴",
                "箱包",
                "婴童",
                "家电",
                "数码",
                "手机",
                "美妆",
                "珠宝",
                "眼镜",
                "手表",
                "运动",
                "户外",
                "乐器",
                "游戏",
                "动漫",
                "影视",
                "美食",
                "鲜花",
                "宠物",
                "农资",
                "房产",
                "装修",
                "建材",
                "家居",
                "百货",
                "汽车",
                "二手车",
                "办公",
                "定制",
                "教育",
                "卡券",
                "本地",
            ],
            isEnd: {
                borderRight: "1px solid #eee",
            },
            lineCount: {
                width: "24.9%",
            },
            color: "#FF5500",
            },
            type_b: {
            name: "特色市场",
            list: [
                "全球购",
                "极有家",
                "阿里拍卖",
                "淘宝众筹",
                "飞猪",
                "农资",
                "天天特卖",
                "Outlets",
                "淘抢购",
                "试用",
                "量贩团",
                "阿里翻译",
            ],
            isEnd: {
                borderRight: "1px solid #eee",
            },
            lineCount: {
                width: "33.3%",
            },
            color: "#A0B959",
            },
            type_c: {
            name: "阿里APP",
            list: [
                "淘宝",
                "天猫",
                "支付宝",
                "聚划算",
                "飞猪",
                "蚂蚁聚宝",
                "闲鱼",
                "淘小铺",
                "阿里钱盾",
                "钉钉",
                "高德地图",
                "虾米音乐",
                "淘票票",
                "菜鸟裹裹",
                "阿里云",
                "网商银行",
                "阿里邮箱",
                "阿里众包",
            ],
            isEnd: {
                borderRight: "1px solid #eee",
            },
            lineCount: {
                width: "33.3%",
            },
            color: "#DF61AB",
            },
            type_d: {
            name: "精彩推荐集",
            list: [
                "余额宝",
                "大牌捡宝",
                "淘公仔",
                "浏览器",
                "淘宝香港",
                "淘宝台湾",
                "淘宝全球",
                "淘宝东南亚",
                "闺蜜淘货",
                "大众评审",
                "淘工作",
                "阿里巴巴认证",
            ],
            isEnd: {
                borderRight: "0px solid #eee",
            },
            lineCount: {
                width: "49.9%",
            },
            color: "#52A0E5",
            },
        },
        };
    },
    methods: {
        
    },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app-head-top {
    width: 100%;
    height: 35px;
    }

    .app-head-top > div {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    }

    .head_left_box {
    width: 80px;
    height: 100%;
    float: left;
    /* display: inline-block; */
    font: 12px/2.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
    }

    .head_right_box {
    width: 80px;
    height: 100%;
    float: right;
    /* display: inline-block; */
    font: 12px/2.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
    }

    .head_left_box {
    color: #6c6c6c;
    }

    /* 头部公用样式 */
    .head_left_box > div:first-child,
    .head_right_box > div:first-child {
    width: 100%;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    }

    .head_left_box > div:first-child:hover,
    .head_right_box > div:first-child:hover {
    background-color: white;
    }

    .head_left_box > div:first-child i,
    .head_right_box > div:first-child i {
    margin-left: 5px;
    }
    /* 头部公用样式 */

    /* 地区选择 */
    .country {
    width: 250px;
    position: absolute;
    background-color: white;
    padding-top: 5px;
    height: 300px;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 10001;
    }

    .country li {
    width: 100%;
    height: 35px;
    padding-left: 7px;
    box-sizing: border-box;
    cursor: pointer;
    }

    .country li:hover {
    background-color: #f0f2f5;
    }
    /* 地区选择 */

    /* 用户信息 */
    .user-box {
    width: 250px;
    height: auto;
    position: absolute;
    background-color: white;
    padding: 5px 10px;
    color: #3c3c3c;
    z-index: 10001;
    }

    .user-box a:hover {
    color: #f40;
    }

    .user-box > div:first-child {
    height: 20px;
    text-align: right;
    line-height: 20px;
    }

    .user_head {
    height: 70px;
    }

    .user_head div {
    float: left;
    }

    .user_head > div:first-child {
    width: 40%;
    height: auto;
    }

    .user_head > div:first-child img {
    width: 60px;
    border-radius: 60px;
    position: relative;
    margin: 0 auto;
    display: block;
    }

    .user_head > div:nth-of-type(2) {
    padding-left: 5px;
    height: 80%;
    position: relative;
    top: 15%;
    }

    .user_head > div:nth-of-type(2) p {
    height: 20px;
    line-height: 20px;
    }

    .user-box > div:nth-of-type(3) {
    height: 35px;
    width: 100%;
    text-align: center;
    }

    .user-box > div:nth-of-type(3) a {
    display: block;
    position: relative;
    left: 5%;
    top: 5px;
    width: 90%;
    height: 25px;
    line-height: 25px;
    border: 1px solid #ffe8de;
    background: #fff0e8;
    }
    /* 用户信息 */

    /* APP入口 */
    .app_enter:hover {
    color: #f40;
    }

    .app_enter > div:first-child:hover {
    background-color: #f0f2f5;
    }

    .app_enter {
    text-align: center;
    }
    /* APP入口 */

    /* 顶部广告 */
    .app-head-bottom {
    width: 100%;
    height: 70px;
    background-color: #e71b1b;
    }

    .app-head-bottom > div {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    }
    /* 顶部广告 */

    /* 网站导航 */
    .taobao_position {
    z-index: 10001;
    position: relative;
    }

    .taobao-nav {
    overflow: hidden;
    position: absolute;
    right: 0;
    left: auto;
    width: 1200px;
    height: auto;
    line-height: normal;
    border: 1px solid #eee;
    background: #fff;
    padding: 10px 0 25px 0;
    }

    .taobao-nav > div {
    padding: 0 8px;
    width: 24.9%;
    overflow: hidden;
    float: left;
    box-sizing: border-box;
    }

    .taobao-nav > div h4 {
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    color: #fc4200;
    margin-bottom: 5px;
    }

    .taobao-nav > div ul li {
    float: left;
    text-align: center;
    }

    .taobao-nav > div ul li a {
    position: relative;
    float: left;
    height: 30px;
    line-height: 30px;
    margin: 0 2px;
    padding: 0 8px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    }

    .taobao-nav > div:nth-of-type(1) ul li a:hover {
    background-color: #ff5500;
    color: white;
    }

    .taobao-nav > div:nth-of-type(2) ul li a:hover {
    background-color: #a0b959;
    color: white;
    }

    .taobao-nav > div:nth-of-type(3) ul li a:hover {
    background-color: #df61ab;
    color: white;
    }

    .taobao-nav > div:nth-of-type(4) ul li a:hover {
    background-color: #52a0e5;
    color: white;
    }
    /* 网站导航 */

    /* 客服中心 */
    .help_box ul {
    position: absolute;
    background-color: white;
    width: 80px;
    padding: 5px 0;
    }

    .help_box ul li {
    padding: 2px 7px;
    box-sizing: border-box;
    cursor: pointer;
    }

    .help_box ul li:hover {
    background-color: #f0f2f5;
    }
    /* 客服中心 */
</style>
