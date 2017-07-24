const state = {
  funds: 10000,
  gadgets: []
}

const mutations = {
  'BUY_GADGET' (state, {gadgetId, quantity, gadgetPrice}) {
    const record = state.gadgets.find(element => element.id === gadgetId)
    if (record) {
      record.quantity += quantity
    } else {
      state.gadgets.push({
        id: gadgetId,
        quantity: quantity
      })
    }
    state.funds -= gadgetPrice * quantity
  },
  'SELL_GADGET' (state, {gadgetId, quantity, gadgetPrice}) {
    const record = state.gadgets.find(element => element.id === gadgetId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.gadgets.splice(state.gadgets.indexOf(record), 1)
    }
    state.funds += gadgetPrice * quantity
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.gadgets = portfolio.gadgetPortfolio ? portfolio.gadgetPortfolio : []
  }
}

const actions = {
  sellGadget ({commit}, order) {
    commit('SELL_GADGET', order)
  }
}

const getters = {
  gadgetPortfolio (state, getters) {
    return state.gadgets.map(gadget => {
      const record = getters.gadgets.find(element => element.id === gadget.id)
      return {
        id: gadget.id,
        quantity: gadget.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
