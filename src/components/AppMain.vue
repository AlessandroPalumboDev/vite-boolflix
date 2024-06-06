<script>
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'AppMain',
  data() {
    return {
      store,
    };

  },

  methods:{
      searchMovie(){
        const params = {};
        params.api_key = this.store.apiKey;
        params.query = this.store.queryResearch;

        axios.get(this.store.apiResearchMovieUrl,{
          params,
        })
        .then((response) => {
          this.store.filmTrovati = response.data.results;
        });
      }
    }
};
</script>

<template>
    <input type="text" placeholder="Cerca" v-model="this.store.queryResearch" @keyup.enter="searchMovie">
    <button @click="searchMovie">cerca</button>
    <div>
      <ul v-for='film in this.store.filmTrovati'>
        <li>
          <span>Titolo:{{ film.title }}</span>
        </li>
        <li>
          <span>Titolo originale:{{ film.original_title }}</span>
        </li>
        <li>
          <span>Lingua:{{ film.original_language }}</span>
        </li>
        <li>
          <span>Voto:{{ film.vote_average }}</span>
        </li>
      </ul>
    </div>
</template>
    
<style scoped lang="scss">
div{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  ul{
    width: calc(100% / 3 - 100px);
    margin: 50px;

    li{
      margin: 5px 0;
    }
  }
}
</style>
    