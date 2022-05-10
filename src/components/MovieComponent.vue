<template>
  <div>
      <div class="card">
        <img src="`https://image.tmdb.org/t/p/original/ + ${img}`" alt="">
        <div class="title" >{{title}}</div>
        <div class="original" >{{originalTitle}}</div>
        <div class="country" ><country-flag :country=country size='medium'/></div>
        <div class="score" >{{score}}</div>
      </div>
    
  </div>
</template>

<script>

export default {
  name: 'MovieComponent',
  props: {
    img: String,
    title: String,
    originalTitle: String,
    country: String,
    score: Number,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>