<template>
  <div class="login-container">
    <div class="login-panel">
      <div class="login-title markdown-block">用户登录</div>
      <br/>
      <at-input v-model="username" size="large" placeholder="用户名"></at-input>
      <br/>
      <at-input v-model="password" size="large" type="password" placeholder="密码"></at-input>
      <br/>
      <at-alert message="用户名密码错误" type="error"  v-show="isPasswordWrong" style="margin-bottom: 20px" ></at-alert>
      <at-button type="primary" class="pull-right" size="large" @click="login()">登录</at-button>
      <br/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import config from '../config'

  export default {
    name: "Login",
    data: function () {
      return {
        username: '',
        password: '',
        isPasswordWrong:false
      };
    },
    methods: {
      login() {
        let self = this;
        axios.post(config.backEndUrl + '/rest/login', {
          username: self.username,
          password: self.password
        }).then(() => {
          self.$root.isLogin=true;
          self.isPasswordWrong=false;
        }).catch(e => {
          self.isPasswordWrong=true;
        });
      }
    },
    mounted:{
    }
  }
</script>

<style scoped>
  @import "../assets/css/root.css";

  .login-title {
    color: var(--brand-color);
    font-size: 25px;
    padding-left: 20px;
  }

  .markdown-block {
    border-left: 3px solid var(--brand-color);
  }

  .login-container {
    width: 100%;
    height: 100vh;
    padding-top: 1px;
    background-image: url('/static/imgs/login-back.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: auto;
  }

  .login-panel {
    width: 400px;
    margin: 250px auto 100px auto;
    border-radius: 5px;
    border: 1px solid white;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 50px;
  }
</style>
