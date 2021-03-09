<template>
  <div>
    <div class="flex flex-col items-center justify-around h-full">
      <div class="title">LET'S WOD</div>
      <div v-if="generatedWod">
        <div v-for="item in generatedWod" :key="item.type" class="wod" :class="{ 'is-gender': gender }"><div class="sets" :class="{ 'is-gender': gender }">{{ displaySets(item) }}</div> {{ item.type}}</div>
      </div>
      <div class="flex flex-col">
        <div class="flex flex-row">
          <label class="switch mr-2">
            <input @change="onChangeGender" type="checkbox">
            <span class="slider round"></span>
          </label>
          <div>I am a {{ displayGender }}</div>
        </div>
        <button class="submit" @click="onGenerateWod">GENERATE WOD</button>
      </div>
      <div class="footer-comment">Hey, good too see you there 😎</div>
    </div>
  </div>
</template>

<script>
import wod from './wod.json';
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      ...mapActions(['generateWod']),
      gender: 0,
    }
  },
  computed: {
    ...mapState(['generatedWod']),
    displayGender() {
      return this.gender ? "Girl 👱🏻‍♀️" : "Boy 🧔🏻";
    }
  },
  methods: {
    onGenerateWod() {
      this.generateWod(wod);
    },
    onChangeGender() {
      this.gender = !this.gender;
    },
    displaySets(item) {
      if (this.gender) {
        return item.sets - (item.isMain ? 10 : 15);
      }
      return item.sets;
    }
  }
}
</script>

<style scoped lang="scss">
  .submit {
    margin-top: 20px;
    background-color: black;
    border-radius: 10px;
    padding: 15px;
    color: $secondary-color;
    &.isDisabled {
      background-color: rgba($secondary-color, 0.3);
    }
    &.isLoading {
      background-color: transparent;
    }
  }
  .sets {
    text-align: center;
    background-color: black;
    color: $secondary-color;
    padding: 8px;
    width: 40px;
    height: 40px;
    margin-right: 5px;
    &.is-gender {
      background-color: $secondary-color;
      color: black;
    }
  }
  .wod {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
    background-color: $secondary-color;
    margin: 25px 0;
    padding-right: 5px;
    height: 30px;
    &.is-gender {
      background-color: black;
      color: $secondary-color;
    }
  }
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: $secondary-color;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $secondary-color;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>
