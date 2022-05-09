<template>
  <div>
      <MovieList/>
    
  </div>
</template>

<script>
import MovieList from "@/components/MovieComponent.vue"
export default {
  name: 'MainComponent',
  components: {
    MovieList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>