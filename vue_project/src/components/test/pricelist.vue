<template>
  <div class="hello_price">
    <h1>Price List</h1>
    <br>
    <br>
    <table>
      <tr>
        <th>book</th>
        <th>bike</th>
        <th>flower</th>
        <th>Price</th>
      </tr>
      <tr>
        <td>{{ $store.state.book }}</td>
        <td>{{ $store.state.bike }}</td>
        <td>{{ $store.state.flower }}</td>
        <td>{{ $store.state.sum }}</td>
      </tr>
      <tr>
        <td><router-link :to="{name: 'book'}" tag="button">add book</router-link></td>
        <td><router-link :to="{name: 'bike'}" tag="button">add bike</router-link></td>
        <td><router-link :to="{name: 'flower'}" tag="button">add flower</router-link></td>
        <td></td>
      </tr>
    </table>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'price',
  data(){
    return {

    }
  },
  computed: {
    price (){
      this.pricesum = this.$store.state.sum
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
table {
  width: 31.25rem;
  height: 5rem;
  margin: 0 auto;
}

table th {
  background-color: #42B983;
  color: aliceblue;
}
</style>
