<template>
  <div>
    <input type="text" v-model="textSearch" >
    <button @click=checkInput()>Search</button>
    <MovieComponent v-for="item in list" :key="item.id" 
    :country="item.original_language"
    :title="item.title"
    :originalTitle="item.original_title"
    :language="item.original_language"
    :score="item.vote_average"
    />
    
  </div>
</template>

<script>
import axios from "axios";
import MovieComponent from "@/components/MovieComponent.vue";

export default {
  name: 'MainComponent',
  components: {
    MovieComponent,   
  },
  data(){
    return{
      API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=0e2a0dcfa359ec4e7957327e178eadfd',
      list: null,
      error: null,
      textSearch: '',
      API_URL_WITH_PARAMETERS: '',
      country:'it',
      countryflag: []
      }
  },
  methods: {
    callAPI(){
      axios
      .get(this.API_URL_WITH_PARAMETERS)
      .then((response) =>{
        for (let i = 0; i < response.data.results.length; i++) {
          this.countryflag.push(response.data.results[i].original_language);
          console.log(this.countryflag,1);
        }
        
        this.list = response.data.results;
        //this.countryflag.push = response.data.results.
      })
      .catch((error)=>{
        console.error(error);
        error;
        this.error = `sorry there is a problem! ${error}`
      })
    },
    getInput(){
      console.log(this.textSearch);
      this.API_URL_WITH_PARAMETERS = `${this.API_URL}&language=${this.country}&query=${this.textSearch}`
      //console.log(this.API_URL_WITH_PARAMETERS);
      this.callAPI()
      this.textSearch = ''
    },
    checkInput(){
      this.list = null;
      if (this.textSearch != '') {
        this.getInput()
      } else {
        this.error = 'immetti qualcosa nella barra di ricerca'
        console.log(this.error);
      }
    }

  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>