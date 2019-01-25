<template lang="pug">
  #concert-view
    concert-list
</template>

<script>
import ConcertList from '../components/ConcertList'

export default {
  name: 'Concert',
  components: { ConcertList }
}
</script>

<style lang="scss" scoped>

</style>
