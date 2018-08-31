<template>
  <div class="setup-site">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-2 has-text-centered noselect">What's Your Site Name?</h1>
        <div class="m-t-30 m-b-30">
          <div class="field">
            <div class="control">
              <input class="input has-text-centered is-size-3" type="text" placeholder="" autofocus
                     v-model="site.name"
                     @input="emitSiteName"
              >
            </div>
          </div>
        </div>
        <advanced-properties ref="advancedProperties" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

import AdvancedProperties from './AdvancedProperties'

export default {
  name: 'SetupSite',
  data () {
    return {
      site: {
        name: '',
        localSiteDomain: null,
        localSitePath: null,
        bluePrint: false
      }
    }
  },
  components: {
    AdvancedProperties
  },
  mounted () {
    this.$events.listen('commit', eventData => {
      this.setOverview({
        siteName: this.site.name,
        sitePath: this.site.localSitePath,
        siteDomain: this.site.localSiteDomain,
        bluePrint: this.site.bluePrint
      })
    })
  },
  methods: {
    ...mapActions([
      'setOverview'
    ]),
    emitSiteName () {
      this.$events.emit('site:name', this.site.name)
      if (this.$refs.advancedProperties !== undefined) {
        this.site.localSitePath = this.$refs.advancedProperties.$refs.browsePath.localSitePath
        this.site.localSiteDomain = this.$refs.advancedProperties.domain
        this.site.bluePrint = this.$refs.advancedProperties.bluePrint
      }
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss">
  .setup-site {
    height: 70vh;
    display: flex;
    align-items: center;
  }
</style>
