import Person from './Person'

const people = {
  state: {
    isFetching: false,
    hasChanged: false,
    isSaving: false
  },
  actions: {
    async init(store) {
      const peopleData = [
        { id: Date.now() + 1, name: `Johnny-${Date.now()}`, email: `johnny-${Date.now()}@mail.com` },
        { id: Date.now() + 3, name: `Jenny-${Date.now()}`, email: `jenny-${Date.now()}@mail.com` }
      ]
      Person.create({ data: peopleData })
      store.commit('fetch')
      await Person.fetch()
      store.commit('fetched')
    }
  },
  mutations: {
    fetch: (state) => {
      state.isFetching = true
    },
    fetched: (state) => {
      state.isFetching = false
    }
  }
}
export default people
