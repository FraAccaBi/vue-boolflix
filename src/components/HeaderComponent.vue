<template>
  <div>
      <SearchBox v-model="textSearch" @formSubmit="search"/>
    
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue"
import state from "@/state.js";
export default {
  name: 'HeaderComponent',
  components: {
    SearchBox
  },
  data() {
    return {
      textSearch: "",
    };
  },
  methods: {
    search() {
      //console.log('Searching ...');
      state.textSearch = this.textSearch;
      //console.log(state.textSearch);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>