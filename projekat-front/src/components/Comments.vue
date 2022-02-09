<template>
  <div>
    <h4>User Comments</h4>

    <div>
      <b-form-input
        v-model="comment"
        placeholder="Say something..."
        @keydown.enter="onSubmit"
      ></b-form-input>

      <!---<b-card v-for="comment in utakmica.comments" :title="comment.user.name" :key="comment.id">
        <b-card-text>
          {{ comment.body }}
        </b-card-text>
      </b-card>-->
    </div>
    <!--<p v-else>You must be signed in to leave a comment</p>-->
  </div>
</template>

<script>


  export default {
    name: 'Comments',

    props: {
      utakmica: Object,
      token: String
    },

    data() {
      return {
        comment: ''
      }
    },

    methods: {
      

      onSubmit() {
        this.$socket.emit('comment', { body: this.comment, utakmicaId: this.utakmica.id, token: this.token });
        this.comment = '';
      }
    }
  }

</script>

<style scoped>
  .card {
    margin-top: 10px;
    text-align: left;
  }

  .card-title {
    margin-bottom: 0px;
  }

  .card-body {
    padding-bottom: 5px;
  }
</style>