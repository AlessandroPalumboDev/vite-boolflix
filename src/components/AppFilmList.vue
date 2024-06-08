<script>
import axios from 'axios';
import { store } from '../store';
import AppCard from './AppCard.vue'
export default {
  name: 'AppFilmList',
  data() {
    return {
      store,
    };

  },

  components:{
    AppCard,
  },

};
</script>

<template>
    <h2 v-if="store.filmTrovati.length">Lista Film della ricerca: "{{ store.queryResearch }}"</h2>
    <div class="lista">
        <AppCard class="card"
        v-for='film in this.store.filmTrovati'
        :copertina="store.apiCopertina + film.poster_path"
        :titolo="film.title"
        :titoloOriginale="film.original_title"
        :lingua="film.original_language"
        :voto="Math.ceil(Number(film.vote_average) / 2)"
        :descrizione="film.overview"
        />

    </div>


</template>

<style scoped lang="scss">
h2{
  padding: 10px 20px ;
  margin: 20px ;
  background-color: rgb(56, 55, 55);
  border-radius: 20px;
  color: rgb(211, 211, 211)

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

