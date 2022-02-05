import Vue from 'vue';
import VueRouter from 'vue-router';
import UtakmicaSingle from './views/UtakmicaSingle.vue'
import Takmicenje from './views/Takmicenje.vue'

Vue.use(VueRouter);

const routes = [
  {
      path: '/utakmica/:id',
      name: 'UtakmicaSingle',
      component: UtakmicaSingle
  },
  {
      path: 'takmicenje/:id',
      name: 'Takmicenje',
      component: Takmicenje
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;