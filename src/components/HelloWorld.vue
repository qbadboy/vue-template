<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link class="link" to="/page1">page1</router-link>
    <router-link class="link" to="/page2">page2</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.link{
  margin: 0 10px;
}
</style>
