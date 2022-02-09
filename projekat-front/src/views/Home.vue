<template>
  <div id="app">
      <Utakmica v-for="utakmica in utakmice" :key="utakmica.id" :utakmica="utakmica"/>
  </div>
</template>

<script>

  import Utakmica from '@/views/Utakmica.vue'

  export default {
    name: 'Home',

    components: {
        Utakmica
    },
    
    data(){
        return {
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