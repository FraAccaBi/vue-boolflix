<template>
  <div>
    <form @submit.prevent="$emit('formSubmit')">
      <input 
        type="search" 
        :value="textSearch"
        @input="$emit('input', $event.target.value)" 
        @keyup="$emit('formSubmit', textSearch)"
        class="p-1 mx-1 rounded"
      />
      <button 
        type="submit"
        :disabled="textSearch < 1"
        class="p-1 mx-1 rounded text-danger fw-bold"
      >
        SEARCH
      </button>
    
    </form>
      
  </div>
</template>

<script>

export default {
  name: 'SearchBox',
  
  props: {
    textSearch: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>