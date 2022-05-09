<template>
  <div>
      <MovieComponent v-for="item in list" :key="item" 
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
    MovieComponent
  },
  data(){
    return{
      query:'',
      API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=0e2a0dcfa359ec4e7957327e178eadfd&language=it-IT&query=batman',
      list: null,
      error: null
    }
  },
  methods: {
    callAPI(){
      axios
      .get(this.API_URL)
      .then((response) =>{
        console.log(response);
        this.list = response.data.results;
        console.log(this.list);
      })
      .catch((error)=>{
        console.error();
        error;
        this.error = `sorry there is a problem! ${error}`
      })
    }
  },
  mounted(){
    this.callAPI()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>