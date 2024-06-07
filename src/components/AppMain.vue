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
      searchFilm(){
        const params = {};
        params.api_key = this.store.apiKey;
        params.query = this.store.queryResearch;

        axios.get(this.store.apiResearchFilmUrl,{
          params,
        })
        .then((response) => {
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
    <button @click="searchFilm(), searchTv()">cerca</button>

    <h2 >FILM</h2>

    <div>
      <ul v-for='film in this.store.filmTrovati'>
        <li>
          <img :src="store.apiCopertina + film.poster_path" :alt='`Immagine di copertina di "-${film.title}-" non trovata`' class="copertina">
        </li>
        <li>
          <span>Titolo:{{ film.title }}</span>
        </li>
        <li>
          <span>Titolo originale:{{ film.original_title }}</span>
        </li>
        <li>
          <img
            :src="`../public/bandiere/${film.original_language}.jpg`"
            :alt="film.original_language"
          />
        </li>
        <li>
          <span>Voto:{{Math.ceil(Number(film.vote_average) / 2) }} 
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>
        </li>
      </ul>
    </div>

    <h2>SERIE TV</h2>

    <div>
      <ul v-for='tv in this.store.tvTrovati'>
        <li>
          <img :src="store.apiCopertina + tv.poster_path" :alt='`Immagine di copertina di "-${tv.name}-" non trovata`' class="copertina">
        </li>
        <li>
          <span>Titolo:{{ tv.name }}</span>
        </li>
        <li>
          <span>Titolo originale:{{ tv.original_name }}</span>
        </li>
        <li>
          <img
            :src="`../public/bandiere/${tv.original_language}.jpg`"
            :alt="tv.original_language"
          />
        </li>
        <li>
          <span>Voto:{{Math.ceil(Number(tv.vote_average) / 2) }} 
            <font-awesome-icon icon="fa-solid fa-star" />
            <font-awesome-icon icon="fa-regular fa-star" />
          </span>
        </li>
      </ul>
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

  ul{
    width: calc(100% / 3 - 50px);
    margin: 25px;
    li{
      margin: 5px 0;
      
      img{
        width: 20px;
      }

      .copertina{
        width: 100%;
        max-height: 400px;
        object-fit:contain;
      }
    }
  }
}
</style>
    