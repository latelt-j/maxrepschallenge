<template>
  <div class="root">
    <Logout />
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('addscore')}" @click="goTo('addscore')">Add score</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('myscore')}" @click="goTo('myscore')">My score</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('leaderboard')}" @click="goTo('leaderboard')">Leaderboard</button>
    <button class="itemHeaderBar" :class="{'is-focus': isFocus('rules')}" @click="goTo('rules')">Rules (fr)</button>
    <div class="itemHeaderBar">Track body weight <span class="badge">soon</span></div>
  </div>
</template>

<script>
import Logout from "@/components/Logout";
export default {
  name: 'HeaderBoard',
  components: {
    Logout
  },
  methods: {
    goTo(target) {
      this.$router.push(target);
    },
    isFocus(target) {
      console.log()
      return this.$route.path === `/${target}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.root {
  height: 20px;
  padding: 15px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.itemHeaderBar {
  font-size: 16px;
  background-color: transparent;
  padding: 10px;
  color: white;
  &.is-focus {
    font-weight: bold;
    border-bottom: solid white 1px;
  }
}
button {
  border: none;
  outline:none;
}
button:hover {
  cursor: pointer;
  font-weight: bold;
}
.badge {
  background-color: #F7545B;
  border-radius: 5px;
  padding: 2px;
}
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
.snip1168 {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
.snip1168 * {
  box-sizing: border-box;
}
.snip1168 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  padding: 0;
}
.snip1168 a {
  padding: 0.5em 0;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
}
.snip1168 a:before,
.snip1168 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.snip1168 a:before {
  top: 0;
  display: block;
  height: 3px;
  width: 0%;
  content: "";
  background-color: #c0392b;
}
.snip1168 a:after {
  left: 0;
  top: 0;
  padding: 0.5em 0;
  position: absolute;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
  max-width: 0%;
  overflow: hidden;
}
.snip1168 a:hover:before,
.snip1168 .current a:before {
  opacity: 1;
  width: 100%;
}
.snip1168 a:hover:after,
.snip1168 .current a:after {
  max-width: 100%;
}
</style>
