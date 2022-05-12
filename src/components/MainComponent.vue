<template>
  <div class="d-flex flex-wrap justify-content-center bg-dark">
    <MovieComponent v-for="(movie, index) in list" :key="index"
    :img="movie.poster_path" 
    :country="countryflag[index]"
    :title="movie.title"
    :originalTitle="movie.original_title"
    :language="movie.original_language"
    :score="movie.vote_average"
    :value="(movie.vote_average / 2)"
    
    />
    <SerieComponent v-for="(item, index) in seriesList" :key="index"
    :img="item.poster_path" 
    :country="countryflagSeries[index]"
    :title="item.name"
    :originalTitle="item.original_name"
    :language="item.original_language"
    :score="item.vote_average"
    />
  </div>
</template>

<script>
import axios from "axios";
import state from "@/state.js";
import MovieComponent from "@/components/MovieComponent.vue";
import SerieComponent from "@/components/SerieComponent.vue";

export default {
  name: 'MainComponent',
  components: {
    MovieComponent,  
    SerieComponent 
  },
  data(){
    return{
      API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=0e2a0dcfa359ec4e7957327e178eadfd&language=it_IT&query=',
      API_SERIES_URL: 'https://api.themoviedb.org/3/search/tv?api_key=0e2a0dcfa359ec4e7957327e178eadfd&language=it_IT&query=',
      list: [],
      seriesList:[],
      error: null,
      /* textSearch: '', */
      API_URL_WITH_PARAMETERS: '',
      API_SERIES_URL_PARAMETERS:'',
      country:'it',
      countryflag: [],
      countryflagSeries: []
      }
  },
  watch: {
    toSearch(newValue) {
      if(newValue){
        state.toSearch = false;
        if(state.textSearch != '') {
          this.getInput()
        }
      } 
    }
  },
  computed: {
    toSearch(){
      return state.toSearch;
    }
  },
  methods: {
    callAPI(){
      const requestOne = axios.get(this.API_URL_WITH_PARAMETERS);
      const requestTwo = axios.get(this.API_SERIES_URL_PARAMETERS);
      axios
      .all([requestOne, requestTwo])
      .then(axios.spread((...responses) =>{
        let responseMovie = responses[0].data.results
        let responseSerie = responses[1].data.results
        for (let i = 0; i < responseMovie.length; i++) {
          if (responseMovie[i].original_language ===  'en') {
            this.countryflag.push('gb')
          } else {
          this.countryflag.push(responseMovie[i].original_language);
          }
        }
        this.list = responseMovie
        for (let i = 0; i < responseSerie.length; i++) {
          if (responseSerie[i].original_language ===  'en') {
            this.countryflagSeries.push('gb')
          } else {
          this.countryflagSeries.push(responseSerie[i].original_language);
          }
        }
        this.seriesList = responseSerie
        console.log(responseSerie, responseMovie);
      }))
      .catch((error)=>{
        console.error(error);
        error;
        this.error = `sorry there is a problem! ${error}`
      })
    },
    getInput(){
      console.log("cerco");
      this.textSearch = state.textSearch
      this.API_URL_WITH_PARAMETERS = `${this.API_URL}${this.textSearch}`;
      this.API_SERIES_URL_PARAMETERS = `${this.API_SERIES_URL}${this.textSearch}`
      this.callAPI()
      }
  }
}
</script>

<style lang="scss">

</style>