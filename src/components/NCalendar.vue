<template lang="pug">
  .n-calendar.col
    .cal-header.controls.row
      button.prev.year(type="button" @click="prevYear") <<
      button.prev.month(type="button" @click="prevMonth") <
      p {{ currentMonth }} {{ curreentYear }}
      button.next.month(type="button" @click="nextMonth") >
      button.next.year(type="button" @click="nextYear") >>
    ul.cal-header.week-days.row
      li.week-day(v-for="name in weekDayNames" :key="`wd-${name}`")
        p {{ name }}
    ul.cal-body.col
      li.week-wrapper(v-for="")
        ul.week.row
          li.day(v-for="")
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

