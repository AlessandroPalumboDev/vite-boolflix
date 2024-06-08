<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from './AppCard.vue'
export default {
  name: 'AppTvList',
  data() {
    return{
        store,
    }

  },

  components:{
    AppCard,
  },

};
</script>

<template>
  <div class="container">
    <h2 v-if="store.filmTrovati.length">Lista Serie TV della ricerca: "{{ store.queryResearch }}"</h2>
    <div>
        <AppCard class="card"
        v-for='tv in this.store.tvTrovati'
        :copertina="store.apiCopertina + tv.poster_path"
        :titolo="tv.name"
        :titoloOriginale="tv.original_name"
        :lingua="tv.original_language"
        :voto="Math.ceil(Number(tv.vote_average) / 2)"
        :descrizione="tv.overview"

        />

    </div>

  </div>

</template>

<style scoped lang="scss">
h2{
  padding: 10px 20px ;
  margin: 20px ;
  background-color: rgb(56, 55, 55);
  border-radius: 20px;

}

div{
display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: grey;

  .card{
    margin: 20px;
    width: calc(100% / 3 - 40px);    
  }
}
</style>