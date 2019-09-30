import Vue from 'vue';
import Router from 'vue-router';
import loginPage from '../pages/loginPage';
import lefMenu from  '../pages/leftMenu'
import homePage from  '../pages/homePage'
import blogsPage from '../pages/blogsPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: 'login',
    },{
      path: '/login',
      name: 'login',
      component: loginPage
    },{
      path: '/main',
      name: 'main',
      component: lefMenu,
      redirect:'mian/home'
    },
    {
      path: '/main/home',
      name: 'main.home',
      component: homePage
    }
  ],
});
