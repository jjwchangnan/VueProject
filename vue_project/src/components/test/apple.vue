<template>
  <div class="hello_apple">
    <h1>Apple</h1>
    <br>
    <router-link :to="{name: 'orange', params:{'type': 'good', color: 'red'}}" tag="button">Orange</router-link>
    <router-link :to="{name: 'banana'}" tag="button">Banana</router-link>
    <router-link :to="{name: 'car'}" tag="button">Car</router-link>
    <br>
    <br>
    <button @click="addPrice('apple')">add Apple</button>
    <button @click="addPrice('banana')">add Banana</button>
    <button @click="addPrice('car')">add Car</button>
    <br>
    <br>
    {{ count.sum }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'apple',
  data () {
    return {
      count: {
        apple: 0,
        banana: 0,
        car: 0,
        sum: 0
      },
    }
  },
  methods: {
    addPrice(type){
      let temp = this.count
      temp.apple += 1
      switch (type){
        case "apple":
          temp.apple++
          break;
        case "banana":
          temp.banana++
          break;
        case "car":
          temp.car++
          break;
        default:
          console.log("emmm")
          break;
      }
      temp.sum = temp.apple*10 + temp.banana*15 + temp.car*20
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
