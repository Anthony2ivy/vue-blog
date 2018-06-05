<template>
  <div>
    <vue-particles class="full-back-img" :style="{backgroundImage : 'url('+introBackImgUrl+')'}"
                   :particles-number="50" :click-effect="false" color="#d2d2d2">
    </vue-particles>
    <h1 class="my-center-title" >{{blogName}}</h1>
    <h2 class="my-center-second-title" style="margin-top: 20px;margin-left: 70px">{{blogIntro}}</h2>
    <div class="my-double-circle-icon" :style="{marginTop : '120px',backgroundImage : 'url('+introIconImgUrl+')'}"></div>
    <div class="container">
      <div class="row at-row flex-center">
        <div class="col-md-6 my-col-container">
          <hr class="lite"/>
          <h2 class="my-intro-title">标签</h2>
          <br/>
          <div class="my-tag-group">
            <at-tag v-for="introTag in introTagList" color="#78A4FA" >{{introTag}}</at-tag>
          </div>
          <br/><br/>
          <hr class="lite"/>
          <br/>
          <h2 class="my-intro-title">关于我</h2>
          <img class="my-img-rectangle" :src="introIconImgUrl" style="margin-top: 30px;margin-bottom:10px;width: 70%">
          <p class="my-p">不写代码会死星人</p>
          <p class="my-p">新技术会让我狂热</p>
        </div>
        <div class="col-md-18 my-col-container">
          asdasd
        </div>
      </div>
    </div>
    <br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/><br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
  export default {
    name: "intro",
    data: function () {
      return {
        blogName:'MY BLOG',
        blogIntro:'—— 挣扎着在极客路上前进',
        introBackImgUrl:'static/imgs/back1.jpg',
        introIconImgUrl:'static/imgs/icon.jpg',
        introTagList:['前端','Vue','微服务','docker','webpack','express','CI']
      }
    }
  }
</script>

<style scoped>

</style>
