import Vue from 'vue';
import Router from 'vue-router'
import Home from './views/Home.vue'

// Vue.use(Router)
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
  ]
})