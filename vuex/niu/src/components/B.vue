<template>
  <div class="hello">
    <router-link to="A">
        <h1>{{ msg }}</h1>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'B',
  data () {
    return {
      msg: 'B模板'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
