<template>
  <div>
      <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand to="/">LiveScore</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

            <b-nav-item-dropdown text="Takmicenja">
              <b-dropdown-item
                v-for="takmicenje in takmicenja"
                :key="takmicenje.id"
                :to="`/takmicenje/${takmicenje.id}`">
                {{ takmicenje.naziv }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
</template>

<script>

  export default {
    name: 'Header',

    data (){
      return {
        takmicenja: null
      }
    },
    
    props: {
      title: String
    },

    mounted() {
      fetch('http://localhost:8000/admin/takmicenjes')
        .then(obj => obj.json())
        .then(res => {
          this.takmicenja = res;
        });
    }
  }

</script>

<style scoped>

</style>