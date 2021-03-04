<template>
  <div class="root">
    <div class="form-input">
      <div class="block-input">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX PULL UP</div>
            <img class="img" src="../assets/body-weight.png" width="50" />
          </div>
          <div class="item-value">{{ user.pullUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX PUSH UP</div>
            <img class="img" src="../assets/workout.png" width="50" />
          </div>
          <div class="item-value">{{ user.pushUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX DIPS</div>
            <img class="img" src="../assets/cardio.png" width="50" />
          </div>
          <div class="item-value">{{ user.dips || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">PLANK</div>
            <img class="img" src="../assets/plank.png" width="50" />
          </div>
          <div class="item-value">{{ user.sheathing || '-' }}</div>
        </div>
      </div>
    </div>
    <div class="letsgo">{{ labelLetsGo }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'MyScore',
  computed: {
    ...mapState(['user']),
    labelLetsGo() {
      return !this.user.sheathing ? "Eh man, stop sleeping and do your fuck'n challenge 🛌🏻" : "Well done ma boy keep pushing! 👀";
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
.block-title {
  display: flex;
  flex-direction: row;
}
.title-score {
  color: white;
  font-weight: bold;
  font-size: 30px;
}
.score-item {
  height: 70px;
  border: white solid 2px;
  border-radius: 15px;
  padding: 10px;
  margin: 0px 30px;
  color: #236EE8;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.item-value {
  color: white;
  font-size: 15px;
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
