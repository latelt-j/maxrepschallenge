<template>
  <div class="flex flex-col items-center justify-around h-full">
    <div class="title">What about your score?</div>
    <div class="form-input w-full flex items-center justify-center flex-row flex-wrap content-between">
      <div class="block-input my-5">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX PULL UP</div>
            <img class="img" src="../assets/body-weight.png" width="50" />
          </div>
          <div class="item-value">{{ user.pullUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX PUSH UP</div>
            <img class="img" src="../assets/workout.png" width="50" />
          </div>
          <div class="item-value">{{ user.pushUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">MAX DIPS</div>
            <img class="img" src="../assets/cardio.png" width="50" />
          </div>
          <div class="item-value">{{ user.dips || '-' }}</div>
        </div>
      </div>
      <div class="block-input my-5">
        <div class="score-item">
          <div class="block-title">
            <div class="title-score">PLANK</div>
            <img class="img" src="../assets/plank.png" width="50" />
          </div>
          <div class="item-value">{{ user.sheathing || '-' }}</div>
        </div>
      </div>
    </div>
    <div class="footer-comment">{{ labelLetsGo }}</div>
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
}
.block-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block-title {
  display: flex;
  align-items: center;
  flex-direction: row;
}
.title-score {
  color: black;
  font-size: 20px;
  margin-right: 10px;
}
.score-item {
  border: solid black 2px;
  height: 100px;
  width: 250px;
  border-radius: 15px;
  padding: 10px;
  margin: 0px 30px;
  color: $secondary-color;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.item-value {
  color: black;
  font-size: 20px;
  font-weight: bold;
  background-color: $secondary-color;
  padding: 0 20px;
}
</style>
