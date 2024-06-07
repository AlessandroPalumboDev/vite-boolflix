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
    <h2 >Lista Serie TV della ricerca: "{{ store.queryResearch }}"</h2>
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

</template>

<style scoped lang="scss">
h2{
  padding: 20px 0 10px 20px;
  background-color: grey;

}

div{
display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;

  .card{
    margin: 20px;    
  }
}
</style>