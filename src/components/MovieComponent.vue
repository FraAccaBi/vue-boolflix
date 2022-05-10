<template>
  <div>
      <div class="card">
        
        <div class="title" >{{title}}</div>
        <div class="original" >{{originalTitle}}</div>
        <div class="language"><country-flag :country=country size='normal'/>{{language}}</div>
        <div class="score" >{{score}}</div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'MovieComponent',
  props: {
    country: String,
    title: String,
    originalTitle: String,
    language: String,
    score: Number,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>