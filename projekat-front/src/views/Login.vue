<template>
  <div id="app">

    <b-form v-if="!token" @submit="onSubmit">
      <b-form-group label="User Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>


  export default {
    name: 'Login',
    
    data() {
      return {
        form: {
          name: '',
          password: '',
          token: ''
        }
      }
    },

    methods: {

      onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:9000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.form)
        }).then( res => res.json() )
            .then( tkn => {
                if (tkn.msg) {
                    alert(tkn.msg);
                } else {
                    this.token = tkn.token;
                    this.$router.push({ name: 'Home' });
                }
            });
      }
    }
  }
</script>

<style scoped>

</style>