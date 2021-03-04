<template>
  <div class="root">
    <div class="form-input">
      <div class="block-input">
        <img class="img" src="../assets/body-weight.png" width="50" />
        <div class="score-item">
          <div>MAX PULL UP</div>
          <div class="item-value">{{ user.pullUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/workout.png" width="50" />
        <div class="score-item">
          <div>MAX PUSH UP</div>
          <div class="item-value">{{ user.pushUp || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/cardio.png" width="50" />
        <div class="score-item">
          <div>MAX DIPS</div>
          <div class="item-value">{{ user.dips || '-' }}</div>
        </div>
      </div>
      <div class="block-input">
        <img class="img" src="../assets/plank.png" width="50" />
        <div class="score-item">
          <div>SHEATHING</div>
          <div class="item-value">{{ user.sheathing || '-' }}</div>
        </div>
      </div>
    </div>
    <div class="letsgo" >Well done ma boy keep pushing!</div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'MyScore',
  computed: {
    ...mapState(['user'])
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
  height: 70px;
  width: 212px;
  background-color: white;
  margin: 0px 5px;
  color: #236EE8;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.item-value {
  color: #236EE8;
  font-size: 15px;
  font-weight: bold;
}
.letsgo {
  color: white;
  margin-top: 50px;
  border-bottom: 1px solid white;
}
</style>
