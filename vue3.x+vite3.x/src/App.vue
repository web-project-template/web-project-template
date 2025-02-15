<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
  <div class="app-nav">
    <router-link to="/index">后台-主页</router-link>
    <router-link to="/system/user">后台-系统-用户</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/signin">注册</router-link>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .app-nav {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    background-color: #f7f7f7;
    border: 1px solid #e4e4e4;
    color: black;
    text-align: left;
  }

  .app-nav a {
    display: block;
    padding: 16px;
    color: #151515;
    border-bottom: 1px solid white;
    line-height: 1.6;
    text-decoration: none;
  }

  .app-nav a:last-child {
    border-right: 0;
  }

  .app-nav a.active {
    color: #57bf6a;
  }
</style>