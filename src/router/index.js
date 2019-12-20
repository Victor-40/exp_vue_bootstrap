import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Status from '../components/Status.vue';
import FindSetups from '../components/FindSetups.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'helloWorld',
    component: HelloWorld,
  },
  {
    path: '/status',
    name: 'status',
    component: Status,
  },
  {
    path: '/find',
    name: 'find',
    component: FindSetups,
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
