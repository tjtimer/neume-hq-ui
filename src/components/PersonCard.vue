<template lang="pug">
  .person-card(:class="(showFriends === true) ? 'row' : 'col'" :ref="person.id")
    .self.col
      p.p-name {{ person.name }}
      p.p-email {{ person.email }}
      p.p-id {{ person.id }}
    .friends.col(v-if="person.friends.length > 0")
      p.toggle(@click="toggleFriends" :class="(showFriends === true) ? 'close' : 'show'")
      ul.col(v-show="showFriends")
        li.friend.col(v-for="friend, idx in person.friends" :class="`p-${person.id}`" :key="`${person.id}-friend-${friend.id}`")
          p.name(:class="`friend-${person.id}`") {{ friend.name }}
          p.since(:class="`friend-${person.id}`") {{ friend.since }}
</template>

<script>
import { TweenLite } from 'gsap' 
export default {
  name: "person-card",
  data: () => {
    return {
      showFriends: false,
      tlFriends: null
    }
  },
  props: ["person"],
  methods: {
    toggleFriends: function() {
      this.showFriends = !this.showFriends
      if (this.showFriends === true) {
        TweenLite
          .from(`.friend-${this.person.id}`, 
                2, 
                {
                  perspective: 500,
                  x: function(index, target) {
                    return (Math.random() - 0.5) * 3000
                  },
                  y: function(index, target) {
                    return (Math.random() - 0.5) * 1000
                  },
                  z: function(index, target) {
                    return (Math.random() - 0.5) * 2000
                  },
                  rotationX: function(index, target) {
                    return (Math.random() - 0.5) * 360
                  },
                  rotationY: function(index, target) {
                    return (Math.random() - 0.5) * 180
                  },
                  rotationZ: function(index, target) {
                    return (Math.random() - 0.5) * 360
                  },
                  scaleX: function(index, target) {
                    return Math.random() * 50
                  },
                  scaleY: function(index, target) {
                    return Math.random() * 50
                  },
                  opacity: 0
                }
          )
      }
    }
  }
};
</script>
<style lang="scss">
.person-card {
  background: rgba(#200, 0.7);
  display: inline-flex;
  flex: 1 1 25%; 
  border: 3px solid rgba(#600, 0.6);
  border-radius: 1.8vw;
  box-shadow: 0 2vw  3vw rgba(50, 15, 5, 0.75);
  color: aqua;
  font-size: 1.6vw;
  line-height: 2.6vw;
  padding: 2vw;
  order: 5;
  &.row {
    flex-flow: nowrap;
    flex: 1 0 75%;
    order: 1;
    max-height: 50vh;
  }
  .friends {
    font-size: 1.5vw;
    line-height: 2vw;
    ul {
      overflow-x: hidden;
      overflow-y: auto;
    }
    .show::after {
      content: 'friends';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
