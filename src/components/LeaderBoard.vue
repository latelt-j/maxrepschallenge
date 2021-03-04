<template>
  <div class="root">
    <div class="form-input">
      <div class="block-input">
        <img class="img" src="../assets/body-weight.png" width="50" />
        <div class="score-item">
          <div>MAX PULL UP</div>
          <div v-for="(user, index) in leaderBoard.pullUp" :key="user.displayName" class="item-value" :class="backgroundRating(index)">
            <div>{{ displayScore(user, 'pullUp') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/workout.png" width="50" />
        <div class="score-item">
          <div>MAX PUSH UP</div>
          <div v-for="(user, index) in leaderBoard.pushUp" :key="user.displayName" class="item-value" :class="backgroundRating(index)">
            <div>{{ displayScore(user, 'pushUp') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/cardio.png" width="50" />
        <div class="score-item">
          <div>MAX DIPS</div>
          <div v-for="(user, index) in leaderBoard.dips" :key="user.displayName" class="item-value" :class="backgroundRating(index)">
            <div>{{ displayScore(user, 'dips') }}</div>
          </div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/plank.png" width="50" />
        <div class="score-item">
          <div>SHEATHING</div>
          <div v-for="(user, index) in leaderBoard.sheathing" :key="user.displayName" class="item-value" :class="backgroundRating(index)">
            <div>{{ displayScore(user, 'sheathing') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="letsgo" >Damn dick heads you are so awesome!</div>
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
      return `${user.displayName.substring(0, 4)}: ${user[type]}`;
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
  height: 90vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
.item-value {
  font-size: 15px;
  font-weight: bold;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  display: flex;
}
.rank-first {
  background-color: #E8DA3A;
}
.rank-second {
  background-color: #97A0A8;
}
.rank-third {
  background-color: #B57B3A;
}
.letsgo {
  color: white;
  margin-top: 50px;
  border-bottom: 1px solid white;
}
</style>
