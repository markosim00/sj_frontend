<template>
  <div id="app">

    <b-form v-if="!token" @submit="onSubmit">
      <b-form-group label="Email address:" label-for="email">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>

      <b-form-group label="User Name:" label-for="name">
        <b-form-input id="name" v-model="form.name" placeholder="Enter name" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-dropdown id="privilege" text="Privilege" class="m-md-2">
        <b-dropdown-item>Admin</b-dropdown-item>
        <b-dropdown-item>Moderator</b-dropdown-item>
        <b-dropdown-item>Registered user</b-dropdown-item>
      </b-dropdown>
      <br>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>


  export default {
    name: 'Register',
    
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          privilege: '',
          token: ''
        }
      }
    },

    methods: {

      onSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:9000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.form)
        })
            .then( res => res.json() )
            .then( el => {
                this.token = el.token;
                this.$router.push({ name: 'Home' });
            });
      }
    }
  }
</script>

<style scoped>

</style>