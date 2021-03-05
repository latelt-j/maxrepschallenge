<template>
  <div class="root">
    <div class="title">Add your score</div>
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
    <div class="submit" @click="changeModalState()" :disabled="true" :class="{ 'isDisabled': !isFormValid, 'isLoading': isLoading }">
      <span v-if="!isLoading">SUBMIT THAT BITCH!</span>
      <div v-else class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
    <!-- use the modal component, pass in the prop -->
    <Modal v-if="showModal" @close="changeModalState()">
      <h3 slot="header">Warning 🧗🏻‍♂️</h3>
      <div slot="body">
        <div class="warning-alert">
          <font-awesome-icon icon="exclamation-triangle" style="margin-left: 5px" color="#E89C09"/>
          Warning: this is an alpha project, submitting a new score will erase the previous one!
        </div>
      </div>
      <div slot="footer">
        <div style="display: flex; justify-content: space-around">
          <button class="button" @click="onSubmit()">OK</button>
          <button class="button canceled" @click="changeModalState()">CANCELED</button>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Modal from './Modal.vue';

export default {
  name: 'AddScore',
  components: {
    Modal
  },
  data() {
    return {
      form: {
        pullUp: null,
        pushUp: null,
        dips: null,
        sheathing: null
      },
      showModal: false,
      ...mapActions(['submitReps'])
    }
  },
  computed: {
    isFormValid() {
      return this.form.pullUp && this.form.pushUp && this.form.dips && this.form.sheathing;
    },
    ...mapState(['user', 'isLoading'])
  },
  methods: {
    onChange(event, type) {
      this.form[type] = parseFloat(event.target.value);
    },
    async onSubmit() {
      if (this.isFormValid) {
        await this.submitReps(this.form);
        this.form = {};
        this.changeModalState();
        this.$router.push('myscore');
      }
    },
    changeModalState() {
      this.showModal = !this.showModal;
    }
  },
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
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form-input {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}
.block-input {
  background: linear-gradient(90deg, black 22%, transparent 22%);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: black solid 2px;
  border-radius: 15px;
  padding: 5px;
}
.block-input:focus-within {
  border: $secondary-color solid 2px;
  background: linear-gradient(90deg, $secondary-color 22%, transparent 22%);
}
input {
  cursor: pointer;
  outline: inherit;
  border: none;
  height: 50px;
  background-color: transparent;
  margin: 0px 5px;
  color: black;
  font-size: 20px;
  text-align: center;
}
.submit {
  margin-top: 50px;
  background-color: black;
  border-radius: 10px;
  padding: 15px;
  color: black;
  &.isDisabled {
    background-color: rgba($secondary-color, 0.3);
  }
  &.isLoading {
    background-color: transparent;
  }
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
  border: 4px solid black;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: black transparent transparent transparent;
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
button {
  border: none;
}
.button {
  &.canceled {
    background-color: #F7545B;
    color: black;
  }
  background-color: black;
  border-radius: 10px;
  padding: 10px;
  color: black;
  text-align: center;
}
</style>
