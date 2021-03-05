<template>
  <div class="google-btn animate__animated animate__slideInDown" @click="onLogin()" style="margin-top: 40px">
    <div class="google-icon-wrapper">
      <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
    </div>
    <p class="btn-text"><b>Sign in with google</b></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      ...mapActions(['loginWithGoogle'])
    }
  },
  methods: {
    async onLogin() {
      await this.loginWithGoogle();
      this.$router.push('leaderboard');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$white: #fff;
$google-blue: black;
$button-active-blue: black;

button { border:none; }

.google-btn {
  margin-left: 35px;
  width: 184px;
  height: 42px;
  background-color: $google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
.google-icon-wrapper {
  position: absolute;
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: $white;
}
.google-icon {
  position: absolute;
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
}
.btn-text {
  float: right;
  margin: 11px 11px 0 0;
  color: $white;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: "Roboto";
}
&:hover {
   box-shadow: 0 0 6px $google-blue;
 }
&:active {
   background: $button-active-blue;
 }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>
