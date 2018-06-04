<template>
  <div>
    <vue-particles class="full-back-img" :style="{backgroundImage : 'url('+introBackImgUrl+')'}"
                   :particles-number="50" :click-effect="false" color="#d2d2d2">
    </vue-particles>
    <h1 class="my-center-title">MY BLOG</h1>
    <div > </div>
    <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  export default {
    name: "intro",
    data: function () {
      return {
        introBackImgUrl:'static/imgs/back1.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
