<template>
  <div v-if="isNotified" class="absolute bottom-0.5 right-0.5 px-3 notification animate__animated animate__fadeInUp">
    <div class="flex items-center justify-center h-full">
      <span class="text-notification">Success: your reps has been updated</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    isNotified: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isNotified: {
      handler() {
        console.log('cococo');
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .notification {
    background-color: rgba(#caffbf, 0.3);
    border-radius: 15px;
    color: black;
    height: 70px;
    bottom: 35px;
    right: 5px;
  }
  .text-notification {
    border-left: black solid 5px;
    padding-left: 5px;
  }
</style>
