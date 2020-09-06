<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <price></price> -->
    <router-view></router-view>
    <!-- <router-view name="car"></router-view> -->
  </div>
</template>

<script>
  import Price from '@/components/pricelist'

  export default {
    name: 'App',
    components:{
      Price
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
