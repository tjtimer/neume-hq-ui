import Concert from './Concert'

export default {
  state: {
    isReady: false,
    isFetching: false,
    sortAscending: true,
    sortBy: '',
    filter: {},
    filterActive: []
  },
  actions: {
    async init(store) {
      await store.dispatch('load')
      store.commit('ready')
    },
    async load(store) {
      store.commit('fetch')
      await Concert.fetch()
      store.commit('fetched')
    },
    async create(store, data) {
      const concert = new Concert({ ...data })
      concert.$save()
      await concert.$persist()
    }
  },
  mutations: {
    ready(state) {
      state.isReady = true
    },
    fetching(state) {
      state.isFetching = true
    },
    fetched(state) {
      state.isFetching = false
    }
  }
}
