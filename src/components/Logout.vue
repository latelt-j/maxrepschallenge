<template>
  <div @click="logoutGoogleAuth()" style="position: absolute; right: 10px; top: 10px;" class="logoutButton">
    <div v-if="!isLoading" style="display: flex; align-items: center; justify-content: center; flex-direction: row; height: 10px">
      <div>Logout</div>
      <font-awesome-icon icon="door-open" style="margin-left: 5px" color="black"/>
    </div>
    <div v-else class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';

export default {
  name: 'Logout',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['isLoading'])
  },
  data() {
    return {
      ...mapActions(['logoutGoogleAuth'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logoutButton {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $secondary-color;
  padding: 10px;
  border-radius: 5px;
  color: black;
  width: 100px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  margin: 2px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
