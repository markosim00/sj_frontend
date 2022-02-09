<template>
  <div>
    <b-card>
      <b-card-text>{{ utakmica.domacin }}  {{ utakmica.rezDomacin }}</b-card-text>
      <b-card-text>{{ utakmica.gost }} {{ utakmica.rezGost }}</b-card-text>
      <b-button :to="`/utakmica/${utakmica.id}`" pill variant="primary">Detalji</b-button>
    </b-card>
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

  .pagination {
    justify-content: center;
  }

</style>