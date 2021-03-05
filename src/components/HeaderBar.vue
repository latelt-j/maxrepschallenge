<template>
  <div class="root">
    <Logout />
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('addscore')}" @click="goTo('addscore')">Add score</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('myscore')}" @click="goTo('myscore')">My score</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('leaderboard')}" @click="goTo('leaderboard')">Leaderboard</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('rules')}" @click="goTo('rules')">Rules (fr)</button>
    <div class="itemHeaderBar">Track body weight <span class="badge">soon</span></div>
  </div>
</template>

<script>
import Logout from "@/components/Logout";
export default {
  name: 'HeaderBoard',
  components: {
    Logout
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
button {
  border: none;
  outline:none;
}
button:hover {
  cursor: pointer;
  font-weight: bold;
}
.badge {
  background-color: $secondary-color;
  color: black;
  border-radius: 5px;
  padding: 2px;
}
</style>
