import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar
  }
})
