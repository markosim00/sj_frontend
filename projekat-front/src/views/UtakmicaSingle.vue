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
    
    data(){
      return {
        utakmica: null
      }
    },

    mounted() {
      fetch(`http://localhost:8000/admin/utakmicas/${this.$route.params.id}`)
        .then( obj => obj.json() )
        .then( res => {
          this.utakmica = res;
        });
    }
  }

</script>

<style scoped>

  .pagination {
    justify-content: center;
  }

</style>