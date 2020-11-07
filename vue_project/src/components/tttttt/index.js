import Home from './Home.vue'
// install方法必须有
export default{
    install:function(Vue) {
        Vue.component('Home',Home);
    }
}