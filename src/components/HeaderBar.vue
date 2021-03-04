<template>
  <div class="root">
    <Logout />
    <div class="itemHeaderBar" @click="goTo('addscore')">Add score</div>
    <div class="itemHeaderBar" @click="goTo('myscore')">My score</div>
    <div class="itemHeaderBar" @click="goTo('leaderboard')">Leaderboard</div>
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.root {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.itemHeaderBar {
  background-color: transparent;
  padding: 10px;
  color: white;
}
</style>
