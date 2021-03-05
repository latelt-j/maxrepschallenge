<template>
  <div id="app" class="h-full min-h-screen flex flex-initial">
    <div v-if="isLogged" class="flex flex-initial justify-between flex-col w-full text-center">
      <HeaderBar />
      <router-view></router-view>
      <div class="flex flex-row items-center justify-end w-full">
        <div>Made with</div>
        <font-awesome-icon icon="heart" color="#F7545B" style="margin: 0 5px"/>
        <div class="author">By Lajeanch - <span class="badge">alpha v0.1</span></div>
      </div>
    </div>
    <div class="flex flex-initial justify-between flex-col w-full text-center" v-else>
      <div class="flex flex-initial flex-wrap justify-center content-center h-full">
        <div class="flex flex-wrap justify-center content-center items-center">
          <img src="./assets/hello.png" alt="hello" class="hello-hand animate__animated animate__zoomInDown" />
          <div class="flex flex-col items-center">
            <span class="title-logout animate__animated animate__slideInDown">Morning!</span>
            <span class="title-logout animate__animated animate__slideInDown">How are you feeling?</span>
            <Login />
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-end w-full">
        <div>Made with</div>
        <font-awesome-icon icon="heart" color="#F7545B" style="margin: 0 5px"/>
        <div class="author">By Lajeanch - <span class="badge">alpha v0.1</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Login from './components/Login.vue'
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'App',
  components: {
    Login,
    HeaderBar
  },
  mounted() {
    if (this.user.token && this.$route.path === '/') {
      this.$router.push('leaderboard');
    }
  },
  computed: {
    isLogged() {
      return this.user.token;
    },
    ...mapState(['user'])
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.login {
  height: calc(100% - 50px);
}
#app {
  font-family: $body-font-family, sans-serif !important;
  flex-direction: row;
  background: rgb(155,246,255);
  background: linear-gradient(330deg, rgba(155,246,255,1) 0%, rgba(160,196,255,1) 100%);
}
.hello-hand {
  width: 800px;
}
.title-logout {
  font-weight: 900;
  text-shadow: $secondary-color 2px 3px 0px;
  font-size: 50px;
  color: black;
}
.footer-comment {
  font-size: 25px;
  color: black;
  margin-top: 50px;
  border-bottom: 1px solid black;
}
.mobile {
  display: none;
}
.root-powered {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
}
.author {
  color: black;
  padding: 5px;
}
.badge {
  background-color: black;
  border-radius: 5px;
  padding: 5px;
  color: white;
}
</style>
