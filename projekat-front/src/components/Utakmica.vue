<template>
  <div>
    <ul>
      <li>Domacin: {{ utakmica.domacin }}</li>
      <li>Gost: {{ utakmica.gost }}</li>
      <li>Rezultat domacin: {{ utakmica.rezDomacin }}</li>
      <li>Rezultat gost: {{ utakmica.rezGost }}</li>
      <li>Dvorana: {{ utakmica.dvorana }}</li>
      <li>Datum: {{ utakmica.datum }}</li>
      <li>Vreme: {{ utakmica.vreme }}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Utakmica',
    
    props: {
      utakmica: Object
    }
  }

</script>

<style scoped>

  .image {
    margin-top: 10px;
    border-style: dashed;
    border-radius: 15px;
  }

</style>