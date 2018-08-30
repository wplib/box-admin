<template>
  <div>
    <div class="columns">
      <div class="column has-text-centered">
        <div class="behind-line cursor pointer" @click="wrapperOptions">
          <span class="">Advanced Options <i class="icons" :class="wrapper.options ? 'ion-ios-arrow-up' : 'ion-ios-arrow-down'"></i></span>
        </div>
      </div>
    </div>
    <div
      :class="wrapper.options ? '' : 'is-hidden'"
    >
      <div class="columns">
        <div class="column">
          {{ getSiteName }}
        </div>
      </div>
      <div class="columns has-text-left">
        <div class="column is-6">
          <div class="field">
            <label for="siteDomain" class="label noselect">Local Site Domain</label>
            <div class="control">
              <input
                class="input has-text-left default-size"
                type="text"
                placeholder=""
                id="siteDomain"
                v-model="siteDomain"
                @input="updateSiteDomain"
                @change="updateSiteDomain"
              >
            </div>
          </div>
        </div>
        <div class="column is-6">
          <browser-path />
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <div class="field">
            <label for="blueprint" class="label noselect">Create site from Blueprint?</label>
            <select name="blueprint" id="blueprint" class="input default-size" v-model="bluePrint">
              <option value="0">Don't use Blueprint</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowserPath from './BrowserPath'

export default {
  name: 'AdvancedProperties',
  data () {
    return {
      wrapper: {
        options: false
      },
      siteDomain: '',
      bluePrint: 0
    }
  },
  components: {
    BrowserPath
  },
  methods: {
    wrapperOptions () {
      this.wrapper.options = !this.wrapper.options
    },
    updateSiteDomain () {
      return false
    }
  },
  mounted () {
    this.$events.listen('site:name', siteName => {
      if (siteName.length > 0) {
        this.siteDomain = siteName + '.local'
      } else {
        this.siteDomain = ''
      }
    })
  },
  computed: {
    getSiteName () {
      return ''
    }
  }
}
</script>
