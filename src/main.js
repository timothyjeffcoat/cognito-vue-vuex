import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'
import Confirm from '@/components/Confirm.vue'
import Dashboard from '@/components/Dashboard.vue'
import PasswordChange from '@/components/PasswordChange.vue'
import PasswordReset from '@/components/PasswordReset.vue'
import PasswordResetConfirm from '@/components/PasswordResetConfirm.vue'
import CognitoAuth from '@/cognito'
import config from '@/config'
import { store } from './store/store'

const cognitoAuth = new CognitoAuth(config)

function requireAuth (to, from, next) {
  cognitoAuth.isAuthenticated((err, loggedIn) => {
    console.log('requireAuth login check', err, loggedIn)
    if (err) return next()
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  })
}

Vue.use(VueRouter)
Vue.use(CognitoAuth)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/confirm', component: Confirm },
    { path: '/change_password', component: PasswordChange, beforeEnter: requireAuth },
    { path: '/reset_password', component: PasswordReset },
    { path: '/confirm_reset_password', component: PasswordResetConfirm },
    { path: '/logout',
      beforeEnter (to, from, next) {
        cognitoAuth.logout()
        next('/')
      }
    }
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cognitoAuth,
  store,
  template: '<App/>',
  components: { App }
})
