<template lang="pug">
  #app
    circles-background
    nav-bar
    router-view
</template>

<script>
import CirclesBackground from './components/CirclesBackground'
import NavBar from './components/NavBar'
export default {
  name: 'app',
  components: { CirclesBackground, NavBar }
}
</script>

<style lang="scss">
  @import 'assets/style/_base.scss';

  #app {
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #000;
  }
</style>
