<template>
  <div>
    <div class="burger-menu">
      <div class="title-mobile">MAX REPS CHALLENGE</div>
      <Slide>
        <span :class="{'is-focus-burger-menu': isFocus('addscore')}" @click="goTo('addscore')">Add score</span>
        <span :class="{'is-focus-burger-menu': isFocus('myscore')}" @click="goTo('myscore')">My score</span>
        <span :class="{'is-focus-burger-menu': isFocus('leaderboard')}" @click="goTo('leaderboard')">Leaderboard</span>
        <span :class="{'is-focus-burger-menu': isFocus('rules')}" @click="goTo('rules')">Rules (fr)</span>
        <span :class="{'is-focus-burger-menu': isFocus('wod')}" @click="goTo('wod')">WOD</span>
        <div>Track body <span class="badge">soon</span></div>
        <div @click="logoutGoogleAuth()">Logout</div>
      </Slide>
    </div>
    <div class="header-bar root m-2">
      <Logout />
      <button class="itemHeaderBar" :class="{'is-focus': isFocus('addscore')}" @click="goTo('addscore')">Add score</button>
      <button class="itemHeaderBar" :class="{'is-focus': isFocus('myscore')}" @click="goTo('myscore')">My score</button>
      <button class="itemHeaderBar" :class="{'is-focus': isFocus('leaderboard')}" @click="goTo('leaderboard')">Leaderboard</button>
      <button class="itemHeaderBar" :class="{'is-focus': isFocus('rules')}" @click="goTo('rules')">Rules (fr)</button>
      <button class="itemHeaderBar" :class="{'is-focus': isFocus('wod')}" @click="goTo('wod')">WOD</button>
      <div class="itemHeaderBar">Track body weight <span class="badge">soon</span></div>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
import { mapActions } from "vuex";

import Logout from "@/components/Logout";
export default {
  name: 'HeaderBoard',
  components: {
    Logout,
    Slide
  },
  data() {
    return {
      ...mapActions(['logoutGoogleAuth'])
    }
  },
  methods: {
    goTo(target) {
      this.$router.push(target);
    },
    isFocus(target) {
      console.log()
      return this.$route.path === `/${target}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.root {
  height: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.itemHeaderBar {
  font-size: 16px;
  background-color: transparent;
  padding: 10px;
  color: black;
  &.is-focus {
    color: $secondary-color;
    font-weight: bold;
    border-bottom: solid $secondary-color 1px;
  }
}
.is-focus-burger-menu {
  color: $secondary-color;
  font-weight: bold;
}
button:focus {outline:0;}
button:hover {
  font-weight: bold;
}
.badge {
  background-color: $secondary-color;
  color: black;
  border-radius: 5px;
  padding: 2px;
}
.burger-menu {
  display: none;
}
@media (max-width: 855px) {
  .header-bar {
    display: none;
  }
  .burger-menu {
    display: flex;
    height: 100px;
    width: 100%;
    background-color: black;
    justify-content: center;
    align-items: center;
  }
  .title-mobile {
    color: #caffbf;
    font-size: 24px;
  }
}

</style>
