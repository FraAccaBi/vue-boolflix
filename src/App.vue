<template>
  <div id="app">
      <HeaderComponent class="header"/>
      <MainComponent class="main container-fluid"/>

    
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
#id{
  height: 100vh;
}
.header{
  max-height: calc(100vh / 5);
}
.main{
  
  background-color: black;
}
</style>