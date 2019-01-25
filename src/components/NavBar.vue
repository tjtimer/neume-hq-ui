<template lang="pug">
  nav#nav
    router-link(to="/") home
    router-link(to="/concerts") concerts
    router-link(to="/about") about
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/_base.scss";

  @keyframes shine {
    from {
      color: $base-color;
    }
    to {
      color: $active-color;
    }
  }

  #nav {
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    align-items: center;
    padding: 3vw;
    a {
      font-weight: bold;
      font-size: 2.5vw;
      text-transform: capitalize;
      line-height: 2.8vw;
      padding: 0.2vw;
      &:hover {
        animation: shine 1s linear 0s infinite alternate;
      }
      &.router-link-exact-active {
        color: $highlight-color;
      }
  }
}
</style>
