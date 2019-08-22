<template>
  <div id="app">
    <header class="admin-header">
      <div class="header-logo-text">MY BLOG</div>
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
        isLogin:false
      }
    },
    methods: {},
    mounted: function () {

    }
  }
</script>

<style>
  :root {
    --header-color: #2C405A;
    --header-height: 50px;
    --main-font:  -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    --brand-color: #6190E8;
  }
  #app{
  }

  body{
    font-family: var(--main-font);
  }
  .admin-header {
    background-color: var(--header-color);
    width: 100%;
    height: var(--header-height);
    display: flex;
    flex-direction: column;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
  }
  .header-logo-text{
    width: 200px;
    font-size: 20px;
    line-height: 20px;
    height: 20px;
    color: white;
    margin-left: 60px;
    font-family: 'Helvetica Neue';
  }

</style>
