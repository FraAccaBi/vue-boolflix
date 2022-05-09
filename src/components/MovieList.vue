<template>
  <div>
      <MovieComponent/>
    
  </div>
</template>

<script>
import MovieComponent from "@/components/MovieComponent.vue"
export default {
  name: 'MovieList',
  components: {
    MovieComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>