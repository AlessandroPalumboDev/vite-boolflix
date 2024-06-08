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
    <h2 v-if="this.store.filmTrovati.length">Lista Film della ricerca: "{{ store.queryResearch }}"</h2>
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
@use '../assets/scss/partials/AppList'

</style>

