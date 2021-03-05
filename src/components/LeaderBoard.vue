<template>
  <div class="flex flex-col items-center justify-around h-full">
    <div class="title">SO WHERE ARE YOU. SATISFY?</div>
    <div class="w-full flex items-center justify-around flex-row flex-wrap content-between">
      <div class="block-input my-5">
        <div class="block-title">
          <div class="score-title">MAX PULL UP</div>
          <img class="score-item-img" src="../assets/body-weight.png" width="50" />
        </div>
        <div v-for="(user, index) in leaderBoard.pullUp" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
          <img :src="require(`../assets/medal-${index}.png`)" width="40" />
          <div class="score-item-name">{{ displayName(user) }}</div>
          <div class="score-item-value">{{ displayScore(user, 'pullUp') }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="block-title">
          <div class="score-title">MAX PUSH UP</div>
          <img class="score-item-img" src="../assets/workout.png" width="50" />
        </div>
        <div v-for="(user, index) in leaderBoard.pushUp" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
          <img class="score-item-img" :src="require(`../assets/medal-${index}.png`)" width="40" />
          <div class="score-item-name">{{ displayName(user) }}</div>
          <div class="score-item-value">{{ displayScore(user, 'pushUp') }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="block-title">
          <div class="score-title">MAX DIPS</div>
          <img class="score-item-img" src="../assets/cardio.png" width="50" />
        </div>
        <div v-for="(user, index) in leaderBoard.dips" :key="`${user.displayName}-${index}`" class="score-item-block" :class="backgroundRating(index)">
          <img :src="require(`../assets/medal-${index}.png`)" width="40" />
          <div class="score-item-name">{{ displayName(user) }}</div>
          <div class="score-item-value">{{ displayScore(user, 'dips') }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="block-title">
          <div class="score-title">MAX PLANK</div>
          <img class="score-item-img" src="../assets/plank.png" width="50" />
        </div>
        <div v-for="(user, index) in leaderBoard.sheathing" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
          <img :src="require(`../assets/medal-${index}.png`)" width="40" />
          <div class="score-item-name">{{ displayName(user) }}</div>
          <div class="score-item-value">{{ displayScore(user, 'sheathing') }}</div>
        </div>
      </div>
    </div>
    <div class="footer-comment">Damn dick heads you are so awesome! Can I took a selfi?  👱🏻‍♀️‍🤳🏻</div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'LeaderBoard',
  data() {
    return {
      ...mapActions(['getLeaderBoard'])
    }
  },
  computed: {
    ...mapState(['leaderBoard'])
  },
  async mounted() {
    await this.getLeaderBoard();
  },
  methods: {
    displayName(user) {
      return `${user.displayName.split(' ')[0]}`;
    },
    displayScore(user, type) {
      return `${user[type]}`;
    },
    backgroundRating(rank) {
      switch (rank) {
        case 0:
          return 'rank-first';
        case 1:
          return 'rank-second';
        case 2:
          return 'rank-third';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
.root {
  display: flex;
  height: calc(100% - 50px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.leaderboard {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}
.block-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 280px;
}
.score-item {
  height: auto;
  width: 212px;
  background-color: black;
  margin: 0px 5px;
  color: black;
  font-size: 20px;
  text-align: center;
}
.block-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.score-title {
  color: black;
  font-size: 30px;
  border-bottom: black solid 2px;
}
.score-item-img {
  margin-left: 10px;
}
.score-item-block {
  font-size: 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
.score-item-name {
  color: black;
  font-size: 20px;
  margin: 0 5px;
}
.score-item-value {
  background-color: black;
  padding: 0 10px;
  color: $secondary-color;
  font-size: 20px;
  font-weight: bold;
}
</style>
