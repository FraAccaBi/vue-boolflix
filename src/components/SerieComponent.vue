<template>
  <div v-if="img">
      <div class="card position-relative border-0 p-2 bg-dark">
        <img class="serie-img" :src='"https://image.tmdb.org/t/p/w342" + img' alt="">
        <div 
        class="hidden position-absolute h-100 text-light  d-flex flex-column justify-content-end pb-4">
          <div class="title text-uppercase">
            {{title}}
          </div>
          <div class="language">
            Original language:
            <country-flag :country=country size='small'/>
          </div>
          <div class="score" >
            Voto:
          <rate class="d-inline" :length="5" :value=value />
        </div>
      </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SerieComponent',
  props: {
    img: String,
    country: String,
    title: String,
    originalTitle: String,
    language: String,
    score: Number,
    value:Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/style.scss";
</style>