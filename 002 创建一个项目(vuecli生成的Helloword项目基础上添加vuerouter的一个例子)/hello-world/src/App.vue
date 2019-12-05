<template>
  <div id="app">
    <h1>Hello App!</h1>
    <p>
      <router-link to="/">主页</router-link>
      <router-link to="/UserInfo">用户管理</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
