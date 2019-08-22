import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: 'login'
    },{
     path:'/login',
      name:'login',
      component:Login
    }
  ]
})
