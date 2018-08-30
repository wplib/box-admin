const state = {
  showSidebar: true
}

const mutations = {
  SET_STATE_SIDEBAR (state, payload) {
    // bool
    state.showSidebar = payload
  }
}

const actions = {
  stateSidebar ({ commit }, payload) {
    commit('SET_STATE_SIDEBAR', payload)
  }
}

const getters = {
  getStateSidebar: state => state.showSidebar
}

export default {
  state,
  mutations,
  actions,
  getters
}
