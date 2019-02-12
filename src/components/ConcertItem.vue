<template lang="pug">
.concert-item
  h3.date {{ concert.date }}
  p.venue
    span.name {{ concert.venue.name }}
    span.city {{ concert.venue.city }}
</template>

<script>
export default {
  name: 'ConcertItem',
  props: ['concert']
}
</script>

<style lang="scss">
.concert-item {
  display: flex;
  flex-flow: nowrap;
  flex: 1 100%;
  align-items: stretch;
  justify-content: center;
  padding: 1.5vh 3vw;
  font-size: 1.5rem;
  color: #ACF;
  .date {
    flex: 1 auto;
  }
  .venue {
    flex: 2 auto;
    flex-flow: nowrap;
    span {
      padding: 1.2vh 2vw;
    }
  }
}
</style>
