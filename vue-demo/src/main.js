// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

//Vue.set(state,"age",15)增加
//Vue.delete(state,'age')删除
let store = new Vuex.Store({
  state: {
    sum: 0,
    book: 0,
    bike: 0,
    flower: 0
    /* name: "jjw",
    age: "18" */
  },
  //修改
  mutations: {
    book(state, price) {
      state.book = price
      this.commit('sum')
    },
    bike(state, price) {
      state.bike = price
      this.commit('sum')
    },
    flower(state, price) {
      state.flower = price
      this.commit('sum')
    },
    sum(state) {
      state.sum = state.book + state.bike + state.flower
    }
  },
  //加工后供外界使用
  //this.$store.getters.fullInfo
  getters: {
    nameInfo(state) {
      return "姓名:" + state.name
    },
    fullInfo(state, getters) {
      return getters.nameInfo + '年龄:' + state.age
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
