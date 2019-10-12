<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
  import blogService from './services/blogService';

  export default {
    name: 'App',
    data: function() {
      return {
        navItems: [],
        isTop: true,
        mainTheme: 'dark',
        activeItem: this.$route.name,
        isLogin: false,
      };
    },
    methods: {},
    mounted: function() {
      let self = this;
      blogService.checkLogin().then(() => {
        self.$root.isLogin = true;
      }).catch(e => {
        debugger;
        self.$root.isLogin = false;
        if (this.$route.path != '/login') {
          this.$router.push( '/login');
        }
      });
      window.onscroll = function() {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 0) {
          if (self.isTop)
            self.isTop = false;
        } else {
          if (!self.isTop)
            self.isTop = true;
        }
      };
    },
  };
</script>

<style>
  body {
    font-family: "Microsoft YaHei", 微软雅黑, "MicrosoftJhengHei", 华文细黑, STHeiti, MingLiu;
  }

  .left-menu {
    min-height: 100vh;
    position: fixed;
  }

  .center-title {
    font-weight: 500;
    color: white;
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    margin-bottom: 20px;
  }

  .right-container {
    padding-left: 250px;
    padding-top: 10px;
    padding-right: 10px;
    background-color: rgb(238, 238, 238);
    height: 100vh;
  }

</style>
