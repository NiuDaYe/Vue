<template>
  <div id="firstcomponent">
    <h1>I am firstcomponent page</h1>
    <a> write by {{ author }} </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: "牛玉磊"
    }
  }
}
</script>

<style>
</style>
