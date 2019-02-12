<template lang="pug">
#concert-list.col
  h3 Concerts
  n-table.concert-list.col(
    v-if="concerts.length > 0"
    :items="concerts"
    @valueClick="valueClick" 
    @updateValue="updateConcert")
</template>

<script>
import NTable from "./NTable";
import Concert from "../store/Concert";
import Venue from "../store/Venue";

export default {
  name: "concert-list",
  components: { NTable },
  data() {
    return {
      venueDetailsAt: []
    };
  },
  computed: {
    concerts: () => Concert
                      .query()
                      .with('venue')
                      .orderBy('date', 'asc')
                      .all()
                      .map((c) => {
                        if (c.venueId != null) {
                          return {
                            ...c,
                            venue: c.venue.name
                          }
                        }
                        return {...c, venue: 'none'}
                      })
  },
  methods: {
    valueClick: function({ id, key }) {
      if (key === "venue") {
        if (this.venueDetailsAt.indexOf(id) < 0) {
          this.venueDetailsAt = [...this.venueDetailsAt, id];
        } else {
          const idx = this.venueDetailsAt.indexOf(id);
          this.venueDetailsAt = [
            ...this.venueDetailsAt.slice(0, idx),
            ...this.venueDetailsAt.slice(idx + 1)
          ];
        }
      }
    },
    updateConcert: async function({ id, key, value }) {
      const concert = new Concert({id, [key]: value})
      await concert.$save()
      await concert.$push()
    }
  },
  beforeCreate() {
    Concert.dispatch("init");
  }
};
</script>

<style lang="scss">
.concert-list {
  color: #5df;
}
</style>
