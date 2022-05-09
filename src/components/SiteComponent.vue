<template>
  <div>
    <HeaderComponent />
    <MainComponent />

    
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import MainComponent from "@/components/HeaderComponent.vue"

export default {
  name: 'SiteComponent',
  components: {
    HeaderComponent,
    MainComponent
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
