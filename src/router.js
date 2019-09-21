import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/components',
      name: 'components',
      component: () => import(/* webpackChunkName: "components" */ './views/Components.vue'),
    },
    {
      path: '/nwanaesthesia',
      name: 'NW Anaesthesia',
      component: () => import(/* webpackChunkName: "nwanaesthesia" */ './views/NWAnaesthesia.vue'),
    },
    {
      path: '/nwicm',
      name: 'NW ICM',
      component: () => import(/* webpackChunkName: "nwicm" */ './views/NWICM.vue'),
    },
    {
      path: '/manaesthesia',
      name: 'Mersey Anaesthesia',
      component: () => import(/* webpackChunkName: "manaesthesia" */ './views/MAnaesthesia.vue'),
    },
    {
      path: '/micm',
      name: 'Mersey ICM',
      component: () => import(/* webpackChunkName: "micm" */ './views/MICM.vue'),
    },
  ],
});
