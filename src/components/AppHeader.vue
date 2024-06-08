<script>
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'AppHeader',
  emits: ["cercaRisultati"],

  data() {
    return{
        store,
    }

  },





};
</script>

<template>
    <div>
        <h1>
            BOOLFLIX
        </h1>
        <div>
            <input type="text" placeholder="Cerca" v-model="this.store.queryResearch" @keyup.enter="$emit('cercaRisultati')">
            <button @click="$emit('cercaRisultati')">cerca</button>

        </div>

    </div>

</template>

<style scoped lang="scss">
@use '../assets/scss/partials/AppHeader.scss'


</style>