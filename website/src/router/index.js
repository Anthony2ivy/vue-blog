import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/intro'
import blogs from '@/components/blogs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'intro',
      redirect: 'intro'
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: blogs
    },
  ]
})
