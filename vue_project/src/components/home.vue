<template>
    <div>
        <div class="search_box">
            <div>
                <div class="search_img">
                    <img :src="search_img.imgSrc" :alt="search_img.title" />
                </div>
                <div class="search_input_box">
                    <div>
                        <ul>
                            <li class="li_active">宝贝</li>
                            <li>天猫</li>
                            <li>店铺</li>
                        </ul>
                        <div style="clear:both"></div>
                    </div>
                    <div>
                        <input type="text" />
                        <div class="search_btn">搜索</div>
                        <div class="search_icon">
                            <i class="el-icon-camera"></i>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li v-for="(item, index) in search_list" :key="index">
                                <a :href="item.url">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
        <div class="content_box">
            <div class="theme_tag">
                <h2>主题市场</h2>
                <template v-for="(item, index) in tag_list">
                    <ul :key="index" :class="{'end_class' : index == 'third' ? false : true}">
                        <li v-for="(list, index) in item" :key="index">
                            <a :href="list.url">{{ list.name }}</a>
                        </li>
                    </ul>
                </template>
            </div>

            <div class="all_nav">
                <div class="left_nav">
                    <ul>
                        <li v-for="(item, index) in left_nav_list" :key="index">
                            <span v-for="(list, key) in item" :key="key">
                                <a :href="list.url">{{ list.name }}</a>
                                <span v-if="key == Object.keys(item).length-1 ? false : true">/</span>
                            </span>
                            <i class="el-icon-arrow-right"></i>
                        </li>
                    </ul>
                </div>
                <div class="mid_nav_left">
                    <div class="mid_nav_left_top">
                        <my-carousel :number="carousel.length" :isShowNav="true" box_heigth="280px">
                            <div v-for="(item, index) in carousel" :key="index">
                                <img :src="item.imgSrc" alt />
                            </div>
                        </my-carousel>
                    </div>
                    <div class="mid_nav_left_bot">
                        <div class="tmall_head">
                            <img src="../assets/tmall_carousel/tmall_head.png" alt="" height="100%">
                        </div>
                        <my-carousel :number="carousel_tmall.length" :isShowNav="false" box_heigth="197px">
                            <div v-for="(item, index) in carousel_tmall" :key="index">
                                <img width="260px" v-for="(list, index) in item" :key="index" :src="list.imgSrc" alt />
                            </div>
                        </my-carousel>
                    </div>
                </div>
                <div class="mid_nav_right">
                    <div class="mid_nav_right_top"></div>
                    <div class="mid_nav_right_bot"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCarousel from "./tools/myCarousel";

var SonCarousel = {
  template: '<div class="carousel_content" :style="carousel_style"></div>'
}

export default {
    components: {
        MyCarousel,
    },
    created: function () {
        this.add_carousel(this.carousel)
        this.add_carousel(this.carousel_tmall)
    },
    data() {
        return {
            search_img: {
                imgSrc: require("../assets/search_img.gif"),
                title: "搜索框图标",
            },
            search_list: [
                {
                    name: "新款连衣裙",
                    url: "",
                },
                {
                    name: "四件套",
                    url: "",
                },
                {
                    name: "潮流T恤",
                    url: "",
                },
                {
                    name: "时尚女鞋",
                    url: "",
                },
                {
                    name: "短裤",
                    url: "",
                },
                {
                    name: "男士外套",
                    url: "",
                },
                {
                    name: "半身裙",
                    url: "",
                },
                {
                    name: "墙纸",
                    url: "",
                },
                {
                    name: "行车记录仪",
                    url: "",
                },
                {
                    name: "新款男鞋",
                    url: "",
                },
                {
                    name: "耳机",
                    url: "",
                },
                {
                    name: "时尚女包",
                    url: "",
                },
                {
                    name: "沙发",
                    url: "",
                },
            ],
            tag_list: {
                first: [
                    {
                        name: "天猫",
                        url: "",
                    },
                    {
                        name: "聚划算",
                        url: "",
                    },
                    {
                        name: "天猫超市",
                        url: "",
                    },
                ],
                second: [
                    {
                        name: "淘抢购",
                        url: "",
                    },
                    {
                        name: "电器城",
                        url: "",
                    },
                    {
                        name: "司法拍卖",
                        url: "",
                    },
                    {
                        name: "淘宝心选",
                        url: "",
                    },
                    {
                        name: "兴农脱贫",
                        url: "",
                    },
                ],
                third: [
                    {
                        name: "飞猪旅行",
                        url: "",
                    },
                    {
                        name: "智能生活",
                        url: "",
                    },
                    {
                        name: "苏宁易购",
                        url: "",
                    },
                ],
            },
            left_nav_list: [
                [
                    {
                        name: "女装",
                        url: "",
                    },
                    {
                        name: "内衣",
                        url: "",
                    },
                    {
                        name: "家居",
                        url: "",
                    },
                ],
                [
                    {
                        name: "女鞋",
                        url: "",
                    },
                    {
                        name: "男鞋",
                        url: "",
                    },
                    {
                        name: "箱包",
                        url: "",
                    },
                ],
                [
                    {
                        name: "母婴",
                        url: "",
                    },
                    {
                        name: "童装",
                        url: "",
                    },
                    {
                        name: "玩具",
                        url: "",
                    },
                ],
                [
                    {
                        name: "男装",
                        url: "",
                    },
                    {
                        name: "运动户外",
                        url: "",
                    },
                ],
                [
                    {
                        name: "美妆",
                        url: "",
                    },
                    {
                        name: "彩妆",
                        url: "",
                    },
                    {
                        name: "个护",
                        url: "",
                    },
                ],
                [
                    {
                        name: "手机",
                        url: "",
                    },
                    {
                        name: "数码",
                        url: "",
                    },
                    {
                        name: "企业",
                        url: "",
                    },
                ],
                [
                    {
                        name: "大家电",
                        url: "",
                    },
                    {
                        name: "生活电器",
                        url: "",
                    },
                ],
                [
                    {
                        name: "零食",
                        url: "",
                    },
                    {
                        name: "生鲜",
                        url: "",
                    },
                    {
                        name: "茶酒",
                        url: "",
                    },
                ],
                [
                    {
                        name: "厨具",
                        url: "",
                    },
                    {
                        name: "收纳",
                        url: "",
                    },
                    {
                        name: "清洁",
                        url: "",
                    },
                ],
                [
                    {
                        name: "家纺",
                        url: "",
                    },
                    {
                        name: "家饰",
                        url: "",
                    },
                    {
                        name: "鲜花",
                        url: "",
                    },
                ],
                [
                    {
                        name: "图书音像",
                        url: "",
                    },
                    {
                        name: "文具",
                        url: "",
                    },
                ],
                [
                    {
                        name: "医药保健",
                        url: "",
                    },
                    {
                        name: "出口",
                        url: "",
                    },
                ],
                [
                    {
                        name: "汽车",
                        url: "",
                    },
                    {
                        name: "二手车",
                        url: "",
                    },
                    {
                        name: "用品",
                        url: "",
                    },
                ],
                [
                    {
                        name: "装修",
                        url: "",
                    },
                    {
                        name: "建材",
                        url: "",
                    },
                    {
                        name: "家具",
                        url: "",
                    },
                ],
                [
                    {
                        name: "手表",
                        url: "",
                    },
                    {
                        name: "眼镜",
                        url: "",
                    },
                    {
                        name: "珠宝饰品",
                        url: "",
                    },
                ],
            ],
            carousel: [
                {
                    id: 1,
                    imgSrc: require("../assets/home_carousel/carousel_1.jpg"),
                },
                {
                    id: 2,
                    imgSrc: require("../assets/home_carousel/carousel_2.jpg"),
                },
                {
                    id: 3,
                    imgSrc: require("../assets/home_carousel/carousel_3.jpg"),
                },
                {
                    id: 4,
                    imgSrc: require("../assets/home_carousel/carousel_4.jpg"),
                },
            ],
            carousel_tmall: [
                [
                    {
                        id: 1,
                        imgSrc: require("../assets/tmall_carousel/Tmall_1.jpg"),
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/tmall_carousel/Tmall_2.jpg"),
                    },
                ],
                [
                    {
                        id: 1,
                        imgSrc: require("../assets/tmall_carousel/Tmall_3.jpg"),
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/tmall_carousel/Tmall_4.jpg"),
                    },
                ],
                [
                    {
                        id: 1,
                        imgSrc: require("../assets/tmall_carousel/Tmall_5.jpg"),
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/tmall_carousel/Tmall_6.jpg"),
                    },
                ],
                [
                    {
                        id: 1,
                        imgSrc: require("../assets/tmall_carousel/Tmall_7.jpg"),
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/tmall_carousel/Tmall_8.jpg"),
                    },
                ],
                [
                    {
                        id: 1,
                        imgSrc: require("../assets/tmall_carousel/Tmall_9.jpg"),
                    },
                    {
                        id: 2,
                        imgSrc: require("../assets/tmall_carousel/Tmall_10.jpg"),
                    },
                ],
            ]
        };
    },
    methods: {
        add_carousel: function (data) {
            var temp = data
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
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content_box {
    width: 100%;
    height: auto;
}

.search_box {
    background-color: white;
    width: 100%;
    height: 140px;
}

.search_box > div {
    position: relative;
    margin: 0 auto;
    width: 1200px;
}

.search_img {
    float: left;
    width: 190px;
    height: 140px;
}

.search_img img {
    width: 100%;
}

.search_input_box {
    float: right;
    width: 1010px;
    height: 140px;
    padding: 10px 70px;
    box-sizing: border-box;
}

.search_input_box > div {
    width: 100%;
}

.search_input_box > div:nth-of-type(1) {
    margin-top: 25px;
}

.search_input_box > div:nth-of-type(1) > ul {
    margin-left: 15px;
    position: relative;
    top: 2px;
}

.search_input_box > div:nth-of-type(1) > ul li {
    color: #f40;
    text-align: center;
    float: left;
    width: 36px;
    height: 22px;
    line-height: 22px;
    margin-right: 4px;
    cursor: pointer;
    font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}

.search_input_box > div:nth-of-type(1) > ul li:hover {
    background: #ffeee5;
}

.search_input_box > div:nth-of-type(1) > ul .li_active {
    color: #fff;
    font-weight: 700;
    background-image: -webkit-linear-gradient(left, #ff9000 0, #ff5000 100%);
    background-image: -o-linear-gradient(left, #ff9000 0, #ff5000 100%);
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff9000', endColorstr='#ffff5000', GradientType=1);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.search_input_box > div > input {
    padding: 6px 50px 6px 5px;
    text-indent: 10px;
    height: 24px;
    line-height: 24px;
    width: 472px;
    border: 2px solid #ff5000;
    border-right: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    outline: 0;
    background: #fff;
}

.search_btn {
    display: inline-block;
    border: 2px solid #ff5000;
    border-left: 0px;
    width: 70px;
    text-indent: 10px;
    padding: 0px 8px 0px 0px;
    height: 36px;
    line-height: 36px;
    position: relative;
    left: -3px;
    top: 2px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #ff4200;
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
    cursor: pointer;
    text-align: center;
}

.search_icon {
    position: relative;
    display: inline-block;
}

.search_icon i {
    position: absolute;
    left: -120px;
    font-size: 24px;
    color: #a59e9e;
    top: -15px;
    cursor: pointer;
}

.search_input_box > div:nth-of-type(3) ul li {
    float: left;
    margin: 3px 3px;
    font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
    color: #3c3c3c;
}

.search_input_box > div:nth-of-type(3) ul li a:hover {
    color: #f40;
}

.content_box {
    width: 1200px;
    position: relative;
    height: auto;
    margin: 0 auto;
}

.theme_tag {
    height: 30px;
    width: 100%;
    line-height: 27px;
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
}

.theme_tag h2 {
    width: 190px;
    text-align: center;
    font-size: 16px;
    height: 100%;
    line-height: 30px;
    background: #ff5000;
    color: white;
    float: left;
}

.theme_tag ul {
    float: left;
}

.end_class::after {
    content: "|";
    color: white;
}

.theme_tag ul li {
    float: left;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    font-size: 16px;
    color: white;
}

.all_nav {
    width: 100%;
    height: 521px;
}

.left_nav {
    width: 190px;
    box-sizing: border-box;
    height: 100%;
    border-left: #ff5000 solid 1px;
    border-right: #ff5000 solid 1px;
    border-bottom: #ff5000 solid 1px;
    background-color: white;
    padding: 5px 0;
    float: left;
}

.left_nav > ul > li {
    width: 100%;
    height: 100%;
    height: 34px;
    text-align: center;
    transition: background-color 0.5s, color 0.5s;
    color: #666;
}

.left_nav > ul > li:hover {
    background-color: #ffe4dc;
    color: #ff5000;
}

.left_nav > ul > li > span > a:hover {
    text-decoration: underline;
}

.left_nav > ul > li > i {
    float: right;
    line-height: 34px;
    margin-right: 5px;
    font-size: 12px;
}

.left_nav > ul > li > span > a {
    font: 15px tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
    line-height: 34px;
}

.left_nav > ul > li > span > span {
    font-size: 17px;
}

.mid_nav_left {
    float: left;
    width: 520px;
    height: 521px;
    padding: 10px 0 0 10px;
}

.mid_nav_right {
    float: left;
    width: 160px;
    height: 521px;
    padding: 10px 0 0 10px;
}

.mid_nav_left_top {
    float: left;
    width: 100%;
    height: 280px;
}

.mid_nav_left_bot {
    float: left;
    width: 100%;
    height: 230px;
}

.mid_nav_right_top {
    float: left;
    width: 100%;
    height: 280px;
}

.mid_nav_right_bot {
    float: left;
    width: 100%;
    height: 230px;
}

.tmall_head{
    width: 100%;
    height: 28px;
    padding: 5px 0 0 0;
    box-sizing: border-box;
    border-bottom: 3px solid #ff1648;
    margin-bottom: 5px;
}

.tmall_head img {
    position: relative;
    top: 2px;
}
</style>
