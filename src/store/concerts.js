import Concert from './Concert'

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
    init(store) {
      const venues = [
        {
          id: 1,
          name: 'CBGB',
          city: 'New York'
        }
      ]
      const concerts = [
        {
          id: 1,
          date: new Date(Date.now()),
          venue: venues[0]
        },
        {
          id: 2,
          date: new Date('2019-04-04'),
          venue: venues[0]
        }
      ]
      Concert.create({ data: concerts })
    }
  },
  mutations: {
    fetching(state) {
      state.isFetching = true
    },
    fetched(state) {
      state.isFetching = false
      state.fetched = true
    },
    toggleSortDirection(state) {
      state.sortAscending = !state.sortAscending
    }
  }
}
