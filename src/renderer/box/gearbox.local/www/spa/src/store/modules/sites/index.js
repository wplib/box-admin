const state = []

const mutations = {
  ADD_HOST (state, payload) {
    state.push({
      overview: payload.overview,
      database: payload.database,
      environment: payload.environment,
      wordpress: payload.wordpress,
      ssl: payload.ssl,
      utilities: payload.utilities
    })
  },

  REMOVE_HOST (state, payload) {
    let index = payload.index
    state.splice(index, 1)
  }
}

const actions = {
  addHost ({ commit }, payload) {
    commit('ADD_HOST', payload)
  },

  removeHost ({ commit }, payload) {
    commit('REMOVE_HOST', payload)
  }
}

const getters = {
  hasHosts: state => {
    return state.length > 0
  },
  allHosts: state => {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
