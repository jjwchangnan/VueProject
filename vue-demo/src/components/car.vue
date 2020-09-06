<template>
  <div class="hello_car">
    <h1>Car</h1>
    <br>
    <router-link :to="{name: 'apple'}" tag="button">Apple</router-link>
    <router-link :to="{name: 'orange', params:{'type': 'good', color: 'red'}}" tag="button">Orange</router-link>
    <router-link :to="{name: 'carson'}" tag="button">CarSon</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>