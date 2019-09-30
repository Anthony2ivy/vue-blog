// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import my from '@/assets/css/my.css'

Vue.use(iView);

// The routing configuration

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data: function(){
    return {
      isLogin:false
    }
  },
  components: { App },
  template: '<App/>',
    render: h => h(App),
  watch: {
    'isLogin': function(newVal) {
      debugger;
      if (newVal) {
        if(this.$route.path == '/login'){
          this.$router.push('/main/home');
        }
      } else {
        if (this.$route.path != '/login') {
          this.$router.push( '/login');
        }
      }
    },
  },
});
