import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './containers/App.vue'
import store from './store'
import router from './router'
import * as filters from './filters'

sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({ router, store, ...App })

export { app, router, store }
