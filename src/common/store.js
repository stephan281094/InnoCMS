import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeType: null,
    lists: {
      module: [
        { name: 'Articles' },
        { name: 'Settings' }
      ],
      user: [
        { name: 'Roy Bes' },
        { name: 'Stephan de Vries' },
        { name: 'Steffanys Gómez' }
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
