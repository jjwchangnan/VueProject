<template>
  <div class="hello_orange">
    <h1>Orange</h1>
    <router-link :to="{name: 'apple'}" tag="button">Apple</router-link>
    <router-link :to="{name: 'car'}" tag="button">Car</router-link>
    <br>
    <br>
    <button @click="getData">Show Console</button>
  </div>
</template>

<script>
export default {
  name: 'orange',
  methods: {
    getData(){
     console.log(this.$route.params)
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
