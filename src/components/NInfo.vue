<template lang="pug">
  .info
    p {{ body }}
</template>

<script>
export default {
  name: 'n-info',
  props: ['title', 'body']
}
</script>
