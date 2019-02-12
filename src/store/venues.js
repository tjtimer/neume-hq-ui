import Venue from './Venue'

export default {
  state: {
    fetched: false,
    isFetching: false,
    sortAscending: true,
    sortBy: '',
    filter: {},
    filterActive: []
  },
  actions: {
    async init(store) {
      store.commit('fetch')
      const { venues } = await Venue.fetch()
      console.log(venues)
      store.commit('fetched')
    }
  },
  mutations: {
    fetching(state) {
      state.isFetching = true
    },
    fetched(state) {
      state.isFetching = false
      state.fetched = true
    }
  }
}
