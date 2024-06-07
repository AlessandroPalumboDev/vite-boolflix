<script>
import axios from 'axios';
import { store } from '../store';
import AppFilmList from './AppFilmList.vue'
import AppTvList from './AppTvList.vue'
export default {
  name: 'AppMain',
  data() {
    return {
      store,
    };
  },
  
  components:{
    AppFilmList,
    AppTvList,
  },

  methods:{

    searchFilm(){
      const params = {};
      params.api_key = this.store.apiKey;
      params.query = this.store.queryResearch;

      axios.get(this.store.apiResearchFilmUrl , {params}).then((response) => {
        this.store.filmTrovati = response.data.results;
      });
    },


    searchTv(){
      const params = {};
      params.api_key = this.store.apiKey;
      params.query = this.store.queryResearch;

      axios.get(this.store.apiResearchTvUrl,{
        params,
      })
      .then((response) => {
        this.store.tvTrovati = response.data.results;
      });
    }
  }
};
</script>

<template>
    <input type="text" placeholder="Cerca" v-model="this.store.queryResearch" @keyup.enter="searchFilm(), searchTv()">
    <button @click="searchFilm(), searchTv()">Cerca</button>
    <AppFilmList />
    <AppTvList/>


</template>
    
<style scoped lang="scss">

</style>
    