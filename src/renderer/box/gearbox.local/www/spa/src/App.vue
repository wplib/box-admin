<template>
  <div id="app">
    <div class="container is-fullhd">
      <div class="row columns">
        <div class="column is-1 is-paddingless-y">
          <sidebar></sidebar>
        </div>
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
  @import "~bulma/bulma";
  @import "~bulma-extensions/bulma-tooltip/dist/css/bulma-tooltip";
  @import url("https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css");
  @import "./assets/scss/mixins";
  @import "./assets/scss/custom";
</style>
