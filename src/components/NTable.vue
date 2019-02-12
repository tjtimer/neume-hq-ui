import { formatError } from '@vuex-orm/plugin-graphql'
<template lang="pug">
  ul.n-table.col
    li.n-header.col
      ul.row
        li.n-col-name(
          v-for="key, idx in  columnNames" 
          :key="`n-col-name-${idx}`" 
          @click="hideColumn(key)")
          h3 {{ key }}
      ul.row
        li.n-col-name-hidden(
          v-for="colName, idx in columnsHidden" 
          :key="`n-col-name-hidden-${idx}`" 
          @click="showColumn(idx)")
          p {{ colName }}
    li.n-item(
      v-for="item, idx in items" 
      :key="`n-item-${item.id}`")
      ul.row
        li.n-col-value.col(
          v-for="key, idx in columnNames" 
          :key="`n-key-${item.id}-${key}`")
          .n-value(
            @click.shift="toggleMenu(item.id, key)" 
            @click="$emit('valueClick', {id: item.id, key})") 
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
  name: "n-table",
  props: ["items"],
  data: () => {
    return {
      showAt: "",
      editAt: "",
      tmp: "",
      columnsHidden: [],
      showForm: false
    };
  },
  computed: {
    columnNames: function() {
      return Object.keys(this.items[0])
        .filter(key => this.columnsHidden.indexOf(key) === -1 && !/\$/.test(key))
    }
  },
  methods: {
    toggleDetails: function(item, key) {
      console.log(key);
      console.log(item[key]);
    },
    toggleEdit: function(item, key) {
      if (item) {
        this.editAt = `${item.id}-${key}`;
        this.tmp = item[key];
        this.showAt = "";
      } else {
        this.editAt = "";
        this.tmp = "";
      }
    },
    toggleMenu: function(id, key) {
      if (id) {
        this.showAt = `${id}-${key}`;
      } else {
        this.showAt = "";
        this.editAt = "";
        this.tmp = "";
      }
    },
    saveValue: function(item, key) {
      if (item[key] !== this.tmp)
        this.$emit("updateValue", { id: item.id, key, value: this.tmp });
      this.toggleEdit();
    },
    hideColumn: function(key) {
      this.columnsHidden = [...this.columnsHidden, key];
    },
    showColumn: function(idx) {
      this.columnsHidden = [
        ...this.columnsHidden.slice(0, idx),
        ...this.columnsHidden.slice(idx + 1)
      ];
    },
    toggleItemForm: function() {
      this.showForm = !this.showForm
    }
  }
};
</script>

<style lang="scss">
.n-table {
  .row {
    flex-flow: nowrap;
    align-items: stretch;
    justify-content: stretch;
  }
}
.n-value {
  cursor: pointer;
}
.n-menu {
  position: absolute;
  top: -100%;
  right: 0;
  background: #333;
  border-radius: 3px;
}
.n-edit {
  position: absolute;
  top: -100%;
  right: 0;
}
</style>
