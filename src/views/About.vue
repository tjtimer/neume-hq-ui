<template lang="pug">
  .about.col
    h1(ref="title") people
    .people.row
      person-card(v-for="(person, idx) in people" :key="`person-${idx}`" :person="person")
</template>

<script>
import { TimelineLite } from "gsap";
import PersonCard from "../components/PersonCard";
import Person from "../store/Person";
import { util } from 'chai'

export default {
  name: "about-view",
  components: {
    PersonCard
  },
  computed: {
    people: () => Person.query().with('friends').all()
  },
  beforeCreate() {
    Person.dispatch("init");
  },
  mounted() {
    const tl = new TimelineLite();
    const title = this.$refs["title"];
    tl.set(title, { perspective: 500 });
    tl.from(title, 2, {
      translateX: 100,
      translateZ: 200,
      rotationY: 90,
      opacity: 0
    });
  }
};
</script>

<style lang="scss">
.about {
  padding: 0.3vh 1.2vw;
  .people {
    flex-flow: wrap;
    padding: 0.3vh 1.2vw;
  }
}
</style>
