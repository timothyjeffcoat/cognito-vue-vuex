import Vue from 'vue'
import Vuex from 'vuex'

import gadgets from './modules/gadgets'
import portfolio from './modules/portfolio'

import * as actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  actions,
  modules: {
    gadgets,
    portfolio
  }
})
