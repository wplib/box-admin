<template>
  <div class="is-height-max gray">
    <div class="local-sites">
      <div class="title has-text-centered m-b-15">
        <span class=" is-size-5 has-text-weight-normal noselect cursor default">Local Sites</span>
      </div>
      <div class="list-wrapper">
        <div v-for="(host, index) in allHosts" :key="index" class="item cursor pointer noselect">
          <p class="is-uppercase has-text-weight-semibold">&bullet;&nbsp;{{ host.overview.siteName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'ManageSites',
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
