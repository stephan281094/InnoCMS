import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Home from './containers/Home.vue'
import ModuleList from './containers/ModuleList.vue'
import UserList from './containers/UserList.vue'
import NotFound from './containers/NotFound.vue'
import Settings from './containers/Settings.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home },
    { path: '/settings', component: Settings,
      children: [
        {
          path: '/',
          redirect () {
            return 'modules'
          }
        },
        {
          meta: {
            transition: 'slide-right'
          },
          path: 'modules',
          component: ModuleList
        },
        {
          meta: {
            transition: 'slide-left'
          },
          path: 'users',
          component: UserList
        }
      ]
    },
    { path: '*', component: NotFound }
  ]
})
