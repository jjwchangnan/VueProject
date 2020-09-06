<template>
  <div>
    <div>
      <ul>
        <li
          v-for="(item, index) in foot_link"
          :key="index"
          :class="{'foot_li' : item == '网商银行' ? false : true}"
        >
          <a href>{{ item }}</a>
        </li>
      </ul>
      <div style="clear:both"></div>
    </div>
    <div>
      <ul>
        <li
          v-for="(item, index) in foot_link2"
          :key="index"
          :class="{'foot_li2' : item == '知识产权' ? true : false}"
        >
          <a href>{{ item }}</a>
        </li>
      </ul>
      <span>© 2003-现在 Taobao.com 版权所有</span>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foot_link: [
        "阿里巴巴集团",
        "淘宝网",
        "天猫",
        "聚划算",
        "全球速卖通",
        "阿里巴巴国际交易市场",
        "1688",
        "阿里妈妈",
        "飞猪",
        "淘小铺",
        "阿里云计算",
        "AliOS",
        "阿里通信",
        "一淘",
        "万网",
        "高德",
        "UC",
        "友盟",
        "阿里安全",
        "虾米",
        "大麦网",
        "钉钉",
        "支付宝",
        "优酷",
        "土豆",
        "阿里健康",
        "阿里影业",
        "阿里体育",
        "网商银行",
      ],
      foot_link2: [
        "关于淘宝",
        "合作伙伴",
        "营销中心",
        "廉正举报",
        "联系客服",
        "开放平台",
        "诚征英才",
        "联系我们",
        "网站地图",
        "隐私权政策",
        "法律声明",
        "知识产权",
      ],
    };
  },
  methods: {
    showHtml(data, name) {
      this[name] = !data;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .app-foot > div {
        position: relative;
        margin: 0 auto;
        width: 1200px;
        border-top: 1px solid #ddd;
        padding: 10px 0;
    }

    .app-foot > div:nth-of-type(1) ul li {
        float: left;
        height: 27px;
        line-height: 27px;
    }

    .app-foot > div:nth-of-type(1) ul li a {
        margin: 0px 10px;
        color: #6c6c6c;
        font-size: 12px;
    }

    .app-foot > div:nth-of-type(1) ul li a:hover {
        color: #f40;
    }

    .app-foot .foot_li::after {
        content: "|";
        font-weight: 400;
        color: #ddd;
    }

    .app-foot > div:nth-of-type(2) ul li {
        float: left;
        height: 27px;
        line-height: 27px;
    }

    .app-foot > div:nth-of-type(2) ul li a {
        margin: 0px 10px;
        color: #6c6c6c;
        font-size: 12px;
    }

    .app-foot > div:nth-of-type(2) ul li a:hover {
        color: #f40;
    }

    .app-foot > div:nth-of-type(2) .foot_li2::after {
        content: "|";
        font-weight: 400;
        color: #ddd;
    }

    .app-foot > div:nth-of-type(2) span {
        margin-left: 30px;
        height: 29px;
        line-height: 29px;
        font-size: 12px;
        color: #9c9c9c;
    }
</style>
