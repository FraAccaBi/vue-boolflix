<template>
  <div>
      <MovieComponent 
      :title="list.title"
      :originalTitle="list.original_title"
      :language="list.budget"
      :score="list.vote_average"
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
      API_URL: 'https://api.themoviedb.org/3/movie/550?api_key=0e2a0dcfa359ec4e7957327e178eadfd&language=it-IT&query=spiderman&page=1&include_adult=false',
      list= null,
      error=null
    }
  },
  methods: {
    callAPI(){
      axios
      .get(this.API_URL)
      .then((response) =>{
        this.list = response.data.response;
        console.log(this.list);
      })
      .catch((error)=>{
        console.error();
        error;
        this.error = `sorry there is a probleme! ${error}`
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