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
      <span>Voto:{{Math.ceil(Number(voto) / 2) }} 
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
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