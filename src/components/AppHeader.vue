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
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: black;
    h1{
        color: red;
    }
    div{
        input, button{
            padding: 10px 15px;
            border-radius: 20px;
            margin-inline: 10px;
        }
    }

}
</style>