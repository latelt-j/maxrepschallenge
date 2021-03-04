<template>
  <div class="root">
    <img src="../assets/support.png" width="250px" />
    <div class="title">Youps! This page isn't known by our client...</div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style scoped lang="scss">
  .root {
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .title {
    margin-top: 50px;
    color: white;
    font-weight: bold;
    font-size: 30px;
  }
</style>
