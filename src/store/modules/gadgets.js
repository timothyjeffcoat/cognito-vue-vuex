import gadget from '../../data/gadgets'

const state = {
  gadgets: []
}

const mutations = {
  'SET_GADGET' (state, gadget) {
    state.gadgets = gadget
  },
  'RND_GADGET' (state) {
    state.gadgets.forEach(gadget => {
      gadget.price = Math.round(gadget.price * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  buyGadget: ({commit}, order) => {
    commit('BUY_GADGET', order)
  },
  initGadget: ({commit}) => {
    commit('SET_GADGET', gadget)
  },
  randomizeGadget: ({commit}) => {
    commit('RND_GADGET')
  }
}

const getters = {
  gadget: state => {
    return state.gadgets
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
