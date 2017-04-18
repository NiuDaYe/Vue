<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{msg}}
    <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent>
  </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent ,secondcomponent}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img{
    width: 40px;
  }
}
</style>
