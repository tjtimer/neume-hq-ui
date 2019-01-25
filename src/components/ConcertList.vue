<template lang="pug">
#concert-list
  h3 Concerts
  concert-item(v-for="(concert, idx) in concerts" :concert="concert" :key="idx")
</template>

<script>
import ConcertItem from './ConcertItem'
import Concert from '../store/Concert'

export default {
  name: 'concert-list',
  components: { ConcertItem },
  computed: {
    concerts() {
      const cs = Concert.query().with('venue').all()
      console.log(cs)
      return cs
    }
  },
  beforeCreate() {
    Concert.dispatch('init')
  }
}
</script>

<style scoped>

</style>
