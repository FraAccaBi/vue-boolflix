<template>
  <div>
      <SearchBox/>
    
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue"
export default {
  name: 'HeaderComponent',
  components: {
    SearchBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>