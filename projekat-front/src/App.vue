<template>
  <div id="app">
    <Header :title="title"/>
    <Utakmica v-for="utakmica in utakmice" :key="utakmica.id" :utakmica="utakmica"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Utakmica from './components/Utakmica.vue'

export default {
  name: 'App',
  components: {
    Header,
    Utakmica
  },

  data() {
    return {
      title: 'Live score',
      utakmice: []
    }
  },

  mounted() {
    
    fetch('http://localhost:8000/admin/utakmicas')
        .then( obj => obj.json() )
        .then(res => {
          console.log(res);
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
