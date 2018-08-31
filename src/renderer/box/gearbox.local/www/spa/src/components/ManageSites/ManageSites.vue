<template>
  <div class="is-height-max gray">
    <div class="local-sites">
      <div class="title has-text-centered m-b-15">
        <span class=" is-size-5 has-text-weight-normal noselect cursor default">Local Sites</span>
      </div>
      <div class="list-wrapper">
        <div v-for="(host, index) in allHosts" :key="index" class="item cursor pointer noselect" @contextmenu.prevent="$refs.menu.open($event, { index })">
          <p class="is-uppercase has-text-weight-semibold">&bullet;&nbsp;{{ host.overview.siteName }}</p>
        </div>
      </div>

      <vue-context ref="menu">
        <ul slot-scope="child">
          <li @click="onClick($event.target.innerText, child.data)">Delete</li>
        </ul>
      </vue-context>
    </div>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'

import { VueContext } from 'vue-context'

export default {
  name: 'ManageSites',
  methods: {
    ...mapActions([
      'removeHost'
    ]),
    /**
     * Alert the text of the menu item that was clicked on.
     * Console log the data sent from the menu.
     *
     * @param {string} text
     * @param {object} data
     */
    onClick (text, data) {
      this.removeHost(data)
    }
  },
  components: {
    VueContext
  },
  computed: {
    ...mapGetters([
      'allHosts'
    ])
  }
}
</script>

<style lang="scss">
.gray {
  background: lighten(#EDEDED, 5%);
}
</style>
