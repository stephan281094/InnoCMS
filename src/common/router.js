import Vue from 'vue'
import Router from 'vue-router'

import { createList } from './factory'

// Containers
import Home from './containers/Home.vue'
import NotFound from './containers/NotFound.vue'
import Settings from './containers/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/', component: Home
    },
    {
      path: '/settings',
      component: Settings,
      children: [
        {
          path: '/',
          redirect () {
            return 'modules'
          }
        },
        {
          path: 'modules',
          component: createList('module'),
          meta: {
            transition: 'slide-right'
          }
        },
        {
          path: 'users',
          component: createList('user'),
          meta: {
            transition: 'slide-left'
          }
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
