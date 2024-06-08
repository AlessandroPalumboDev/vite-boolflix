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


};
</script>

<template>
    <AppFilmList />
    <AppTvList />
</template>
    
<style scoped lang="scss">
header{
  background-color: black;
}
</style>
    