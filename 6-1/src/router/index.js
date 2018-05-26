import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: 'home' */'@/pages/Home')
    },
    {
      path: '/todos',
      name: 'Todos',
      component: () => import(/* webpackChunkName: 'todo' */'@/pages/Todos')
    }
  ]
})
