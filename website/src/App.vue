<template>
  <div id="app">
    <header class="my-header" :class="{'my-back-transparent': isTop}">
      <ul class="my-nav-list pull-right">
        <li class="my-nav-item" v-for="item in navItems" :class="{active : item.isActive}" @click="">{{item.name}}</li>
      </ul>
    </header>
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        navItems: [
          {name: '首页', isActive: true},
          {name: '博客', isActive: false},
          {name: '教程', isActive: false},
          {name: '联系我', isActive: false}],
        isTop: true
      }
    },
    methods: {},
    mounted: function () {
      var self=this;
      window.onscroll = function () {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 0) {
          if (self.isTop)
            self.isTop = false;
        } else {
          if (!self.isTop)
            self.isTop = true;
        }
      }
    }
  }
</script>

<style>

</style>
