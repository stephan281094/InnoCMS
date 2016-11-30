import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeType: null,
    lists: {
      module: [
        { id: 1, name: 'Articles' },
        { id: 2, name: 'Settings' }
      ],
      user: [
        { id: 1, name: 'Roy Bes' },
        { id: 2, name: 'Steffanys Gómez' },
        { id: 3, name: 'Stephan de Vries' }
      ]
    }
  },
  mutations: {
    SET_ACTIVE_TYPE (state, { type }) {
      state.activeType = type
    }
  },
  getters: {
    getActiveItems (state) {
      const { activeType, lists } = state

      return lists[activeType]
    }
  }
})

export default store
