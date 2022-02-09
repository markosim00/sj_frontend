<template>
  <div>
    <Utakmica v-for="utakmica in utakmice" :key="utakmica.id" :utakmica="utakmica"/>
  </div>
</template>

<script>
import Utakmica from '@/views/Utakmica.vue'

export default {
  name: 'App',
  components: {
    Utakmica
  },

  data() {
    return {
      utakmice: [],
      takmicenjeId:  null
    }
  },

  mounted() {

    console.log(this.$route.params);
    
    fetch(`http://localhost:8000/admin/utakmicas?takmicenjeId=${this.$route.params.id}`)
            .then( obj => obj.json() )
            .then( res => {
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