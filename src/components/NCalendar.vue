<template lang="pug">
  .n-calendar.col
    .cal-header
      h3 Calendar
    .cal-body
      h3 Body
</template>
<script>
export default {
  name: 'n-calendar',
  props: ['events']
}
</script>
<style lang="scss">
.n-calendar {
  color: #ADF;
  background: #312;
}
</style>

