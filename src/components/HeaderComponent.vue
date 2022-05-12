<template>
  <div class="p-2 bg-dark text-center">
      <img src="../../public/logo.png" alt="">
      <SearchBox 
      v-model="textSearch" @formSubmit="search"
      class="py-2"
      />
    
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
      state.textSearch = this.textSearch;
      state.toSearch = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>