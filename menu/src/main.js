import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Router from 'vue-router'
let router = new Router({mode: 'history'})
import App from './App.vue';

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
    el:'#menu'
  },
  
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
