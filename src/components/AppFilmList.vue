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
    <h2 >FILM</h2>
    <div>
        <AppCard class="card"
        v-for='film in this.store.filmTrovati'
        :copertina="store.apiCopertina + film.poster_path"
        :titolo="film.title"
        :titoloOriginale="film.original_title"
        :lingua="film.original_language"
        :voto="Math.ceil(Number(film.vote_average) / 2)"
        />

    </div>


</template>

<style scoped lang="scss">
h2{
  text-align: center;
  margin: 20px 0 10px 0;
}

div{
display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  .card{
    margin: 25px;
    width: calc(100% / 3 - 50px);
  }
}

</style>