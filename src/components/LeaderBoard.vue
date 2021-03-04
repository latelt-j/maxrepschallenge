<template>
  <div class="root">
    <div class="leaderboard">
      <div class="block-input">
        <div>
          <div class="block-title">
            <div class="score-title">MAX PULL UP</div>
            <img class="score-item-img" src="../assets/body-weight.png" width="50" />
          </div>
          <div v-for="(user, index) in leaderBoard.pullUp" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
            <img :src="require(`../assets/medal-${index}.png`)" width="50" />
            <div class="score-item-value">{{ displayScore(user, 'pullUp') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <div>
          <div class="block-title">
            <div class="score-title">MAX PUSH UP</div>
            <img class="score-item-img" src="../assets/workout.png" width="50" />
          </div>
          <div v-for="(user, index) in leaderBoard.pushUp" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
            <img :src="require(`../assets/medal-${index}.png`)" width="50" />
            <div class="score-item-value">{{ displayScore(user, 'pushUp') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <div>
          <div class="block-title">
            <div class="score-title">MAX DIPS</div>
            <img class="score-item-img" src="../assets/cardio.png" width="50" />
          </div>
          <div v-for="(user, index) in leaderBoard.dips" :key="`${user.displayName}-${index}`" class="score-item-block" :class="backgroundRating(index)">
            <img :src="require(`../assets/medal-${index}.png`)" width="50" />
            <div class="score-item-value">{{ displayScore(user, 'dips') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <div>
          <div class="block-title">
            <div class="score-title">MAX PLANK</div>
            <img class="score-item-img" src="../assets/plank.png" width="50" />
          </div>
          <div v-for="(user, index) in leaderBoard.sheathing" :key="user.displayName" class="score-item-block" :class="backgroundRating(index)">
            <img :src="require(`../assets/medal-${index}.png`)" width="50" />
            <div class="score-item-value">{{ displayScore(user, 'sheathing') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="letsgo">Damn dick heads you are so awesome! Can I took a selfi?  👱🏻‍♀️‍🤳🏻</div>
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
    displayScore(user, type) {
      return `${user.displayName.split(' ')[0]}: ${user[type]}`;
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
  align-items: center;
  justify-content: center;
}
.score-item {
  height: auto;
  width: 212px;
  background-color: white;
  margin: 0px 5px;
  color: #236EE8;
  font-size: 20px;
  text-align: center;
}
.block-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.score-title {
  color: white;
  font-weight: bold;
  font-size: 30px;
  border-bottom: white solid 2px;
}
.score-item-img {
  margin-left: 10px;
}
.score-item-block {
  font-size: 15px;
  font-weight: bold;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  padding-bottom: 5px;
}
.score-item-value {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.letsgo {
  font-size: 25px;
  font-weight: bold;
  color: white;
  margin-top: 50px;
  border-bottom: 1px solid white;
}
</style>
