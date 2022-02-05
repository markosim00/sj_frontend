<template>
  <div>
    <b-card>
      <b-card-text>{{ utakmica.domacin }}  {{ utakmica.rezDomacin }}</b-card-text>
      <b-card-text>{{ utakmica.gost }} {{ utakmica.rezGost }}</b-card-text>
      <b-card-text>{{ utakmica.dvorana }}</b-card-text>
      <b-card-text>{{ utakmica.datum }}</b-card-text>
      <b-card-text>{{ utakmica.vreme }}</b-card-text>
    </b-card>
  </div>
</template>

<script>

  export default {
    name: 'UtakmicaSingle',
    
    props: {
      utakmica: Object
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }

</style>