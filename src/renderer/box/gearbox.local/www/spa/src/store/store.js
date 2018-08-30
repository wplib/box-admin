import Vue from 'vue'
import Vuex from 'vuex'

import sidebar from './modules/sidebar/index'
import sites from './modules/sites/index'
import setupSites from './modules/setupSites/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sidebar,
    sites,
    setupSites
  }
})
