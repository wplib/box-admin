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
                v-model="domain"
              >
            </div>
          </div>
        </div>
        <div class="column is-6">
          <browser-path ref="browsePath" />
        </div>
      </div>
      <div class="columns">
        <div class="column is-12">
          <div class="field">
            <label for="blueprint" class="label noselect">Create site from Blueprint?</label>
            <select
              name="blueprint"
              id="blueprint"
              class="input default-size"
              v-model="bluePrint"
              @change="picBluePrint"
            >
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
import {
  mapActions
} from 'vuex'

import BrowserPath from './BrowserPath'

export default {
  name: 'AdvancedProperties',
  data () {
    return {
      wrapper: {
        options: false
      },
      domain: '',
      name: '',
      bluePrint: 0
    }
  },
  components: {
    BrowserPath
  },
  methods: {
    ...mapActions([
      'setOverview'
    ]),
    picBluePrint () {},
    wrapperOptions () {
      this.wrapper.options = !this.wrapper.options
    }
  },
  mounted () {
    this.$events.listen('site:name', siteName => {
      if (siteName.length > 0) {
        this.domain = siteName.replace(/[^A-Z0-9]+/ig, '') + '.local'
      } else {
        this.domain = ''
      }
    })
  }
}
</script>
