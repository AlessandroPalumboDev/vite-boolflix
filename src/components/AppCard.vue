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
    <div class="locandina">
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
          <font-awesome-icon icon="fa-solid fa-star" class="stellina"/>
        </span>
        <span v-for="n in 5 - voto ">
          <font-awesome-icon icon="fa-regular fa-star"  class="stellina"/>
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

@use '../assets/scss/partials/AppCard.scss'

</style>