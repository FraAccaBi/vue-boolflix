<template>
  <div>
      <div class="card">
        <div class="title" >{{title}}</div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'MovieComponent',
  props: {
    title: String,
    originalTitle: String,
    language: String,
    score: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>