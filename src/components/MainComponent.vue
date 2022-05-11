<template>
  <div>
    <!-- <input type="text" v-model="textSearch" >
    <button @click=checkInput()>Search</button> -->
    <MovieComponent v-for="(movie, index) in filtered" :key="index"
    :img="movie.poster_path" 
    :country="countryflag[index]"
    :title="movie.title"
    :originalTitle="movie.original_title"
    :language="movie.original_language"
    :score="movie.vote_average"
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
      list: null,
      seriesList:null,
      error: null,
      /* textSearch: '', */
      API_URL_WITH_PARAMETERS: '',
      API_SERIES_URL_PARAMETERS:'',
      country:'it',
      countryflag: [],
      countryflagSeries: []
      }
  },
  methods: {
    callAPI(){
      const requestOne = axios.get(this.API_URL_WITH_PARAMETERS);
      const requestTwo = axios.get(this.API_SERIES_URL_PARAMETERS);
      //console.log(requestTwo);
      axios
      .all([requestOne, requestTwo])
      .then(axios.spread((...responses) =>{
        //console.log(responses);
        for (let i = 0; i < responses[0].data.results.length; i++) {
          if (responses[0].data.results[i].original_language ===  'en') {
            this.countryflag.push('gb')
          } else {
          this.countryflag.push(responses[0].data.results[i].original_language);
          }
        }
        for (let i = 0; i < responses[1].data.results.length; i++) {
          if (responses[1].data.results[i].original_language ===  'en') {
            this.countryflagSeries.push('gb')
          } else {
          this.countryflagSeries.push(responses[1].data.results[i].original_language);
          }
        }
        
        this.list = responses[0].data.results;
        this.seriesList = responses[1].data.results
        //console.log(this.seriesList);
        //console.log(this.list);
      }))
      .catch((error)=>{
        console.error(error);
        error;
        this.error = `sorry there is a problem! ${error}`
      })
    },
    getInput(){
      state.textSearch = this.textSearch;
      console.log(this.textSearch);
      this.API_URL_WITH_PARAMETERS = `${this.API_URL}${this.textSearch}`;
      console.log(this.API_URL_WITH_PARAMETERS);
      this.API_SERIES_URL_PARAMETERS = `${this.API_SERIES_URL}${this.textSearch}`
      //console.log(this.API_URL_WITH_PARAMETERS);
      this.callAPI()
      this.textSearch = ''
    },
    checkInput(){
      this.list = null;
      if (this.textSearch != '') {
        this.getInput()
        this.filtered()
      } else {
        this.error = 'immetti qualcosa nella barra di ricerca'
        console.log(this.error);
      }
    },
   
     
      
    },
    computed: {
       filtered(){
    //console.log(state);
    //console.log(this.list);
      if(state.textSearch) {
        return this.list.filter(movie => {
          return movie.title.toLowerCase().includes(state.textSearch.toLowerCase())
        })
        
      } 
      else {
        return this.list
      }
      
    }
    },
    created(){ 
      
       if (state.textSearch != '') {
         console.log('una vittoria');
       } else {
         console.log('still a victory');
       }
    }

  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>