import Vue from 'vue'

export const loadData = ({commit}) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        const gadgets = data.gadgets
        const funds = data.funds
        const gadgetPortfolio = data.gadgetPortfolio

        const portfolio = {
          gadgetPortfolio,
          funds
        }

        commit('SET_GADGETS', gadgets)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}
