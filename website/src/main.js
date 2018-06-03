// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AtComponents from 'at-ui'
import 'at-ui-style'
import common from '@/assets/css/common.css'
import my from '@/assets/css/my.css'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false;
Vue.use(AtComponents);
Vue.use(VueParticles);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
