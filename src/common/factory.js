import ItemList from './components/ItemList.vue'

export const createList = function (type) {
  return {
    name: `${type}-list`,
    preFetch (store) {
      return store.commit('SET_ACTIVE_TYPE', { type })
    },
    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}

export default {
  createList
}
