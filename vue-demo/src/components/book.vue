<template>
  <div class="hello_book">
    <h1>Add Book</h1>
    <br>
    <h2>当前数量：{{ this.$store.state.book }}</h2>
    <input type="text" name="book" v-model="num">
    <button @click="addCount">add</button>
    <button @click="delCount">del</button>
    <br><br>
    <router-link :to="{name: 'price'}" tag="button">cancel</router-link>
  </div>
</template>

<script>
export default {
  name: 'book',
  data () {
    return {
      num: 0
    }
  },
  methods:{
    addCount(){
      let temp = this.$store.state.book
      temp += this.num*10
      this.$store.commit('book', temp)
    },
    delCount(){
      let temp = this.$store.state.book
      if(temp >= this.num*10)
        temp -= this.num*10
      else
        alert("error")
      this.$store.commit('book', temp)
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
