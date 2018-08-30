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
              <input class="input has-text-left default-size" type="text" placeholder="" id="siteDomain">
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
            <select name="blueprint" id="blueprint" class="input default-size">
              <option value="">Don't use Blueprint</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
              <option value="">Option 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BrowserPath from '@/components/SetupSite/BrowserPath'

export default {
  name: 'AdvancedProperties',
  data () {
    return {
      wrapper: {
        options: false
      }
    }
  },
  components: {
    BrowserPath
  },
  methods: {
    wrapperOptions () {
      this.wrapper.options = !this.wrapper.options
    }
  }
}
</script>
