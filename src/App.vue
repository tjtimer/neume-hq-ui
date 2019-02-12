<template lang="pug">
  #app(:class="layout")
    nav-bar
    router-view(:key="$route.fullPath")
</template>

<script>
import { timeout } from "async-csp";
import NavBar from "./components/NavBar";
export default {
  name: "app",
  data() {
    return {
      size: [0, 0],
      isResizing: false
    };
  },
  components: { NavBar },
  computed: {
    layout: function() {
      return this.size[0] > this.size[1] ? "landscape" : "portrait";
    }
  },
  methods: {
    watchSize: async function() {
      window.removeEventListener("resize", this.watchSize);
      let before = this.size;
      let now = [0, 0];
      this.isResizing = true;
      while (true) {
        now = [window.innerWidth, window.innerHeight];
        if (before[0] === now[0] && before[1] === now[1]) {
          break;
        }
        before = [...now];
        await timeout(50);
      }
      this.size = [...now]
      this.isResizing = false;
      window.addEventListener("resize", this.watchSize);
    }
  },
  mounted() {
    this.watchSize();
  }
};
</script>

<style lang="scss">
@import "assets/style/_base.scss";

#app {
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 0 1vw;
  overflow-x: hidden;
  text-align: center;
  background: linear-gradient(to bottom right, rgb(25, 10, 0), rgb(5, 2, 0));
}
</style>
