<script>
import axios from 'axios';
import { store } from './store';
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';



export default{
  name: 'MyApp',
  components:{
    AppMain,
    AppHeader,
  },
  data() {
    return {
      store,
    };
  },

  methods:{

searchFilm(){
  const params = {};
  params.api_key = this.store.apiKey;
  params.query = this.store.queryResearch;
  params.language = this.store.apiLingua;
  axios.get(this.store.apiResearchFilmUrl , {params}).then((response) => {
    this.store.filmTrovati = response.data.results;
  });
},


searchTv(){
  const params = {};
  params.api_key = this.store.apiKey;
  params.query = this.store.queryResearch;
  params.language = this.store.apiLingua;

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
  <header>
    <AppHeader @cercaRisultati="searchFilm(), searchTv()"/>
  </header>

  <main>
    <AppMain />
  </main>

</template>

<style scoped lang="scss">
main{
  max-width: 1200px;
  min-width: 1147px;
  margin: auto;
}
</style>

