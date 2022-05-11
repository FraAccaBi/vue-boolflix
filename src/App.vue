<template>
  <div id="app">
      <HeaderComponent />
      <MainComponent />

    
  </div>
</template>

<script>

import MainComponent from "@/components/MainComponent.vue"
import HeaderComponent from "@/components/HeaderComponent.vue"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>