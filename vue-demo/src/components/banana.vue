<template>
  <div class="hello_banana">
    <h1>Banana</h1>
    <router-link :to="{name: 'apple'}" tag="button">Apple</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'banana',
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
