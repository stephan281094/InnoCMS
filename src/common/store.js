import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeType: null,
    modal: null,
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
    },
    SET_MODAL (state, modal) {
      state.modal = modal
    }
  },
  getters: {
    getActiveItems (state) {
      const { activeType, lists } = state

      return lists[activeType]
    },
    getItemById (state, getters) {
      const activeItems = getters.getActiveItems
      const matchedItems = activeItems.filter((item) => {
        return item.id === parseInt(state.route.params.id)
      })

      return matchedItems.length > 0 ? matchedItems[0] : false
    }
  }
})

export default store
