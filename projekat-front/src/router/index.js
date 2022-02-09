import Vue from 'vue';
import VueRouter from 'vue-router';
import UtakmicaSingle from '@/views/UtakmicaSingle.vue'
import Takmicenje from '@/views/Takmicenje.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'

Vue.use(VueRouter);

const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home
  },
  {
      path: '/utakmica/:id',
      name: 'UtakmicaSingle',
      component: UtakmicaSingle
  },
  {
      path: '/takmicenje/:id',
      name: 'Takmicenje',
      component: Takmicenje
  },
  {
      path: '/login',
      name: 'Login',
      component: Login
  },
  {
      path: '/register',
      name: 'Register',
      component: Register
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;