import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

import Index from '@/views/front/Index'

// User Views
import Client from '@/views/user/Client'
import User from '@/views/user/User'

import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'
import Register from '@/views/pages/Register'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/users/me',
    redirect: '/users/me/home',
    name: 'User Home',
    component: Full,
    children: [
      {
        path: 'home',
        name: 'User Home',
        component: User
      },
      {
        path: 'blog',
        name: 'User',
        meta: {
          auth: true
        },
        component: User
      },
      {
        path: 'client',
        name: 'Client',
        component: {
          render (c) {
            return c('router-view')
          }
        },
        children: [
          {
            path: 'list',
            name: 'Clients',
            component: Client
          }
        ]
      }
    ]
  },
  {
    path: '/error',
    redirect: '/404',
    name: 'Pages',
    component: {
      render (c) {
        return c('router-view')
      }
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: Page404
      },
      {
        path: '500',
        name: 'Page500',
        component: Page500
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new Router(
  {
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    routes: routes
  }
)

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.auth)) {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  } else {
    next()
  }
})

export default router
