<template>
  <div id="app">
    <Header/>
    <Utakmica v-for="utakmica in utakmice" :key="utakmica.id" :utakmica="utakmica"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Utakmica from '@/views/Utakmica.vue'

export default {
  name: 'App',
  components: {
    Header,
    Utakmica
  },

  data() {
    return {
      utakmice: [],
      takmicenjeId:  null
    }
  },

  mounted() {
    
    fetch(`http://localhost:8000/admin/utakmicas?takmicenjeId=${this.$route.params.id}`)
            .then( obj => obj.json() )
            .then( res => {
              this.utakmice = res; 
            });

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>