<template lang="pug">
  svg#bg(:class="layout" :width="width" :height="height" fill="black")
    defs
      clipPath(v-for="pos, idx in circles" :id="`cp-${idx}`" :key="`cp-${idx}`")
        circle(:id="`c-shape-${idx}`" :cx="pos[0]" :cy="pos[1]" :r="radius")
      clipPath(v-for="pos, idx in circles" :id="`ci-${idx}`" :key="`ci-${idx}`" :clip-path="`url(#cp-${idx})`")
        use(x="0" y="0" :xlink:href="`#c-shape-${idx+2}`")
      clipPath(v-for="pos, idx in circles" :id="`cii-${idx}`" :key="`cii-${idx}`" :clip-path="`url(#cp-${idx})`")
        use(x="0" y="0" :xlink:href="`#c-shape-${idx+4}`")
    circle(v-for="pos, idx in circles" :id="`circle-${idx}`" :key="`circle-${idx}`" :cx="pos[0]" :cy="pos[1]" :r="radius" stroke="rgb(33, 33, 33)" stroke-width="2" fill="none")
    rect(v-for="pos, idx in circles" v-if="idx === 1 || idx === 5" :width="width" :height="height" :clip-path="`url(#ci-${idx})`" :x="0" :y="0" fill="rgba(200, 100, 0, 0.3)")
    rect(v-for="pos, idx in circles" v-if="idx === 1 || idx === 3" :width="width" :height="height" :clip-path="`url(#cii-${idx})`" :x="0" :y="0" fill="rgba(200, 100, 0, 0.3)")
    rect(v-for="pos, idx in circles" v-if="idx === 2 || idx === 4" :width="width" :height="height" :clip-path="`url(#ci-${idx})`" :x="0" :y="0" fill="rgba(0, 100, 200, 0.3)")
    rect(v-for="pos, idx in circles" v-if="idx === 0 || idx === 4" :width="width" :height="height" :clip-path="`url(#cii-${idx})`" :x="0" :y="0" fill="rgba(0, 100, 200, 0.3)")
</template>

<script>
export default {
  name: 'circles-background',
  data() {
    return {
      size: [250, 250]
    }
  },
  computed: {
    layout() { return (this.size[0] > this.size[1]) ? 'landsccape' : 'portrait' },
    width() { return this.size[0] - 4 },
    height() { return this.size[1] - 4 },
    hHalf() { return (this.height / 2) },
    wHalf() { return (this.width / 2) },
    radius() { return Math.min(this.wHalf, this.hHalf) },
    circles() {
      if (this.layout === 'portrait') {
        return [
          [0, this.hHalf - this.wHalf], [this.wHalf, this.hHalf - this.wHalf], [this.width, this.hHalf - this.wHalf],
          [0, this.hHalf], [this.wHalf, this.hHalf], [this.width, this.hHalf],
          [0, this.hHalf + this.wHalf], [this.wHalf, this.hHalf + this.wHalf], [this.width, this.hHalf + this.wHalf]
        ]
      } else {
        return [
          [this.wHalf - this.hHalf, 0], [this.wHalf, 0], [this.wHalf + this.hHalf, 0],
          [this.wHalf - this.hHalf, this.hHalf], [this.wHalf, this.hHalf], [this.wHalf + this.hHalf, this.hHalf],
          [this.wHalf - this.hHalf, this.height], [this.wHalf, this.height], [this.wHalf + this.hHalf, this.height]
        ]
      }
    }
  },
  mounted() {
    this.size = [document.documentElement.clientWidth, document.documentElement.clientHeight]
  }
}
</script>

<style scoped>
#bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
}
</style>
