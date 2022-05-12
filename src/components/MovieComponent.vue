<template>
  <div>
      <div class="card position-relative">
        <img class="movie-img" :src='"https://image.tmdb.org/t/p/original" + img' alt="" >
        <div class="hidden position-absolute bottom-0 text-light">
          <div class="title">Movie title: {{title}}</div>
          <div class="original" >Original title: {{originalTitle}}</div>
          <div class="language"><country-flag :country=country size='normal'/>Original language: {{language}}</div>
          <div class="score" >Average score: {{score}}</div>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'MovieComponent',
  props: {
    img:String,
    country: String,
    title: String,
    originalTitle: String,
    language: String,
    score: Number,
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hidden{
  opacity: 0;
  &:hover{
    opacity: 1;
  }
}
.card{
  width: calc(100vw / 5);
}
</style>