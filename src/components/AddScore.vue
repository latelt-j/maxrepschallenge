<template>
  <div class="root">
    <div class="form-input">
      <div class="block-input">
        <img class="img" src="../assets/body-weight.png" width="50" />
        <input type="number" @input="onChange($event, 'pullUp')" :value="form.pullUp">
      </div>
      <div class="block-input">
        <img class="img" src="../assets/workout.png" width="50" />
        <input type="number" @input="onChange($event, 'pushUp')" :value="form.pushUp">
      </div>
      <div class="block-input">
        <img class="img" src="../assets/cardio.png" width="50" />
        <input type="number" @input="onChange($event, 'dips')" :value="form.dips">
      </div>
      <div class="block-input">
        <img class="img" src="../assets/plank.png" width="50" />
        <input type="number" @input="onChange($event, 'sheathing')" :value="form.sheathing">
      </div>
    </div>
    <div class="warning-alert">
      <font-awesome-icon icon="exclamation-triangle" style="margin-left: 5px"/>
      Warning: this is an alpha project, submitting a new score will erase the previous one!
    </div>
    <div class="submit" @click="onSubmit" :disabled="true" :class="{ 'isDisabled': !isFormValid, 'isLoading': isLoading }">
      <span v-if="!isLoading">SUBMIT THAT BITCH!</span>
      <div v-else class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: 'AddScore',
  data() {
    return {
      form: {
        pullUp: null,
        pushUp: null,
        dips: null,
        sheathing: null
      },
      ...mapActions(['submitReps'])
    }
  },
  computed: {
    isFormValid() {
      return this.form.pullUp && this.form.pushUp && this.form.dips && (this.form.sheathing && new RegExp("[0-9]{2}:[0-9]{2}").test(this.form.sheathing));
    },
    ...mapState(['user', 'isLoading'])
  },
  methods: {
    onChange(event, type) {
      this.form[type] = parseInt(event.target.value);
    },
    async onSubmit() {
      if (this.isFormValid) {
        await this.submitReps(this.form);
        this.form = {};
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
input {
  cursor: pointer;
  outline: inherit;
  border: white solid 2px;
  height: 50px;
  background-color: transparent;
  margin: 0px 5px;
  color: white;
  font-size: 20px;
  text-align: center;
}
.submit {
  margin-top: 50px;
  background-color: white;
  padding: 10px;
  color: #236EE8;
  &.isDisabled {
    background-color: rgba(255, 255, 255, 0.3);
  }
  &.isLoading {
    background-color: transparent;
  }
}
.warning-alert {
  color: #E89C09;
  margin-top: 50px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 32px;
  height: 32px;
  margin: 4px;
  border: 4px solid #fff;
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
