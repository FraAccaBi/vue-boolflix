<template>
  <div id="app" class="background">
      <HeaderComponent class="header"/>
      <MainComponent class="main overflow-auto"/>

    
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
  
  background-color: #212529ad;
}
.header{
  height: calc(100vh / 5);
}
.main{
  height: calc((100vh / 5) * 4);
  background-color: black;
}
.background{
  height: 100%;
  background-color: #212529ad;
}
</style>