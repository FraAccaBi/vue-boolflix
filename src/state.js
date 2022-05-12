// Importa Vue
import Vue from 'vue'
// crea un oggetto usando .observable
const state = Vue.observable({
    textSearch: '',
    toSearch: false
})
// esporta lo state
export default state