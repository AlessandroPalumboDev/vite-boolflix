<script>
export default{
    name: 'AppCard',
    props:[
        'copertina', 'titolo', 'titoloOriginale', 'lingua', 'voto', 'descrizione'
    ],



}
</script>

<template>
  <!-- CARD -->
  <div class="card">

    <!-- IMMAGINE COPERTINA -->
    <div >
      <img class="locandina"  :src="copertina" :alt='`Immagine di copertina di "-${titolo}-" non trovata`' >
    </div>

    <!-- INFO -->
    <div class="info">

      <!-- titolo -->
      <div>
        <span>Titolo:{{ titolo }}</span>
      </div>

      <!-- titolo originale -->
      <div>
        <span>Titolo originale:{{ titoloOriginale }}</span>
      </div>


    <!-- lingua -->
      <div>
        <img
          :src="`../public/bandiere/${lingua}.jpg`"
          :alt="lingua"
        />
      </div>

      <!-- voto -->
      <div>
        <span v-for="n in voto">
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span v-for="n in 5 - voto ">
          <font-awesome-icon icon="fa-regular fa-star" />
        </span>

      </div>
      
      <!-- descrizione -->
      <div>
        <p>
          Trama: {{ descrizione }}
        </p>
        </div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">

.card{
  height: 500px;
  width: 342px;
  padding: 0 30px;
  background-color: black;
  border: 1px solid white;
  color: white;

  &:hover .info{
    display: inline-block;
  }
  &:hover .locandina{
    display: none;
  }


}

.info{
  margin: 50px 0;
  height: calc(100% - 100px);
  display: none;
  overflow-y: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  }



img{
    width: 20px;
}

.locandina{
    width: 100%;
    object-fit:contain;
}


</style>