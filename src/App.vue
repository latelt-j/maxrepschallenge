<template>
  <div>
    <div id="app">
      <div v-if="isLogged">
        <HeaderBar />
        <router-view></router-view>
        <div class="powered">
          <div>Made with</div>
          <font-awesome-icon icon="heart" color="#F7545B" style="margin: 0 5px"/>
          <div>By Lajeanch - alpha v0.1</div>
        </div>
      </div>
      <div v-else>
        <div style="display: flex; align-items: center; flex-direction: row; height: 96vh; justify-content: center">
          <img src="./assets/hello.png" alt="hello" class="hello-hand animate__animated animate__flip" />
          <div style="display: flex; flex-direction: column">
            <span class="title animate__animated animate__slideInDown">Morning!</span>
            <span class="title animate__animated animate__slideInDown">How are you feeling?</span>
            <Login />
          </div>
        </div>
        <div class="powered">
          <div>Made with</div>
          <font-awesome-icon icon="heart" color="#F7545B" style="margin: 0 5px"/>
          <div>By Lajeanch - alpha v0.1</div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <img src="./assets/no-phone.png" width="200px" />
      <div class="mobile-text" style="margin-top: 30px;">Oups, this is an alpha project!</div>
      <div class="mobile-text">Developper is a bad guy that doesnt know mobile first...</div>
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
    if (this.user.token) {
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
$body-font-family: 'M PLUS Rounded 1c';
@media (max-width: 890px) {
  #app {
    display: none;
  }
  .mobile {
    font-family: $body-font-family, sans-serif !important;
    flex-wrap: wrap;
    font-weight: bold;
    height: 100vh;
    display: flex;
    background: #3190f5 url("./assets/fondo-azul.jpg") no-repeat center center;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
  .mobile-text {
    color: white;
  }
}
* {
  margin: 0;
  padding: 0;
}
@media (min-width: 900px) {
  #app {
    font-family: $body-font-family, sans-serif !important;
    flex-direction: row;
    background: #3190f5 url("./assets/fondo-azul.jpg") no-repeat center center;
    height: 100vh;
  }
  .hello-hand {
    width: 300px;
    height: 300px;
  }
  .title {
    font-size: 30px;
    color: white;
    font-weight: 400;
  }
  .mobile {
    display: none;
  }
  .powered {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 10px;
    color: white;
  }
}
</style>
