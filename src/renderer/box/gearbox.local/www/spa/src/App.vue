<template>
  <div id="app">
    <div class="container">
      <div class="columns is-gapless">
        <div class="column is-1 ">
          <sidebar />
        </div>
        <div class="column is-11">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {
  mapActions
} from 'vuex'

import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  },
  watch: {
    $route: function () {
      // Check if given route is true, if it is then hide Nav.
      if (this.$route.path !== '/add-localsite') {
        this.stateSidebar(true)
      } else {
        this.stateSidebar(false)
      }
    }
  },
  methods: {
    ...mapActions([
      'stateSidebar'
    ]),
    openExternalUrl () {
      /* This method is open url in default browser of operational system */
      window.open('https://wplib.github.io/box-docs/index.html', '_blank')
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/custom-variables';
  @import "~bulma/bulma";
  @import "~bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip";
  @import url("https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css");
  @import "./assets/scss/mixins";
  @import "./assets/scss/custom";
  @import "./assets/scss/helpers";
</style>
