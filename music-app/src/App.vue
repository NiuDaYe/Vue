<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <router-view></router-view>

  </div>
</template>

<script>
import MHeader from './components/m-header/m-header'
import Tab from './components/tab/tab'

export default {
  components: {
    MHeader,Tab
  }
}
</script>

<style>

</style>
