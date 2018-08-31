const state = {}

const mutations = {
  SET_OVERVIEW (state, payload) {
    state.overview = payload
  },

  SET_DATABASE (state, payload) {
    state.database = payload
  },

  SET_ENVIRONMENT (state, payload) {
    state.environment = payload
  },

  SET_WORDPRESS (state, payload) {
    state.wordpress = payload
  },

  SET_SSL (state, payload) {
    state.ssl = payload
  },

  SET_UTILITIES (state, payload) {
    state.utilities = payload
  },

  EMPTY_HOST (state, payload) {
    state = payload
  }
}

const actions = {
  setOverview ({ commit }, payload) {
    commit('SET_OVERVIEW', payload)
  },

  setDatabase ({ commit }, payload) {
    commit('SET_DATABASE', payload)
  },

  setEnvironment ({ commit }, payload) {
    commit('SET_ENVIRONMENT', payload)
  },

  setWordPress ({ commit }, payload) {
    commit('SET_WORDPRESS', payload)
  },

  setSsl ({ commit }, payload) {
    commit('SET_SSL', payload)
  },

  setUtilities ({ commit }, payload) {
    commit('SET_UTILITIES', payload)
  },

  resetHost ({ commit }, payload) {
    commit('EMPTY_HOST', payload)
  }
}

const getters = {
  getHost: state => state,
  hasHost: state => {
    return Object.keys(state).length > 0
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
