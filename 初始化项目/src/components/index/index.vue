<template>
  <div id="app">
    <v-header></v-header>
    
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../header/header'
  import footer from '../footer/footer'
  export default {
    components: {
      'v-header' : header,
      'v-footer' : footer
   }
  }
</script>
