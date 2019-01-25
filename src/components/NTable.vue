<template lang="pug">
  .n-table.col
    ul.table-wrapper.col
      li.n-header
        ul.row
          li.col-name.col(v-for="key, idx in  columnNames" :key="`n-col-name-${idx}`")
            h2 {{ key }}
      li.n-item(v-for="item, iidx in items" :key="`n-item-${item.id}-${iidx}`")
        ul.row
          li.col-value.col(v-for="key, idx in  columnNames" :key="`n-key-${item.id}-${key}`")
            .n-value(@click.shift="toggleMenu(item.id, key)")
              p {{ item[key] }}
            .n-menu.row(v-if="showAt === `${item.id}-${key}`")
              button.more(type="button" @click="toggleDetails(item.id, key)") more
              button.edit(type="button" @click="toggleEdit(item, key)") edit
              button.close(type="button" @click="toggleMenu") close
            .n-edit.row(v-if="editAt === `${item.id}-${key}`")
              .edit-value
                input(
                  v-model="tmp"
                  type="text"
                  :placeholder="item[key]"
                  @keyup.esc="toggleEdit"
                  @keyup.enter="saveValue(item, key)")
              button.save(v-if="tmp !== item[key]" type="button" @click="saveValue(item, key)") save
              button.close(type="button" @click="toggleEdit") x
</template>

<script>
export default {
  name: 'n-table',
  props: ['columnNames', 'items'],
  data: () => {
    return {
      showAt: '',
      editAt: '',
      tmp: ''
    }
  },
  methods: {
    toggleDetails: function(item, key) {
      console.log(key)
      console.log(item[key])
    },
    toggleEdit: function(item, key) {
      if (item) {
        this.editAt = `${item.id}-${key}`
        this.tmp = item[key]
        this.showAt = ''
      } else {
        this.editAt = ''
        this.tmp = ''
      }
    },
    toggleMenu: function(id, key) {
      if (id) {
        this.showAt = `${id}-${key}`
      } else {
        this.showAt = ''
        this.editAt = ''
        this.tmp = ''
      }
    },
    saveValue: function(item, key) {
      if (item[key] !== this.tmp) this.$emit('updateValue', { id: item.id, key, value: this.tmp })
      this.toggleEdit()
    }
  }
}
</script>

<style lang="scss">
.n-menu {
  position: absolute;
  top: -3vh;
  right: 5vw;
  background: #333;
  border-radius: 3px;
}
.n-edit {
  position: absolute;
  top: -110%;
  left: 0;
  right: 0;
}
</style>
