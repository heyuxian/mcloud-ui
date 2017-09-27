import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

import Index from '@/views/front/Index'

// User Views
import User from '@/views/user/User'

import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import LoginSuccess from '@/views/pages/LoginSuccess'
import Register from '@/views/pages/Register'
import store from '../store/store'

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
        name: 'Home',
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
            component: User
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
    path: '/login/success',
    name: 'LoginSuccess',
    component: LoginSuccess
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
    if (store.state.token) {
      console.log(store.state.token)
      next()
    } else {
      window.location.href = encodeURIComponent('http://localhost:8899/uaa/oauth/login?redirectUrl=http://localhost/#/login/success')
    }
  } else {
    next()
  }
})

export default router
