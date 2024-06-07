<script>
export default{
    name: 'AppCard',
    props:[
        'copertina', 'titolo', 'titoloOriginale', 'lingua', 'voto'
    ],



}
</script>

<template>
<div>
  <ul >
    <li>
      <img :src="copertina" :alt='`Immagine di copertina di "-${titolo}-" non trovata`' class="copertina">
    </li>
    <li>
      <span>Titolo:{{ titolo }}</span>
    </li>
    <li>
      <span>Titolo originale:{{ titoloOriginale }}</span>
    </li>
    <li>
      <img
        :src="`../public/bandiere/${lingua}.jpg`"
        :alt="lingua"
      />
    </li>
    <li>
      <span>Voto: {{ voto }}
        <span v-for="n in voto">
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span v-for="n in 5 - voto ">
          <font-awesome-icon icon="fa-regular fa-star" />
        </span>
      </span>
    </li>
  </ul>
</div>
</template>

<style scoped lang="scss">

img{
    width: 20px;
}

.copertina{
    width: 100%;
    max-height: 400px;
    object-fit:cover;
}


</style>