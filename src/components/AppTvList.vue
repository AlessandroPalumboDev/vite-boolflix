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
    <h2>SERIE TV</h2>
    <div>
        <AppCard class="card"
        v-for='tv in this.store.tvTrovati'
        :copertina="store.apiCopertina + tv.poster_path"
        :titolo="tv.name"
        :titoloOriginale="tv.original_name"
        :lingua="tv.original_language"
        :voto="Math.ceil(Number(tv.vote_average) / 2)"
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