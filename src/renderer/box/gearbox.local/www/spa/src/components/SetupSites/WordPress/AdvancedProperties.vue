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
      <div class="columns has-text-left flex center">
        <div class="column is-5">
          <div class="field">
            <label for="webServer" class="label noselect">Is This WordPress Multisite</label>
            <select name="webServer" id="webServer" class="input default-size">
              <option value="">No</option>
              <option value="">Yes - Subdirectory</option>
              <option value="">Yes - Subdomain</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedProperties',
  data () {
    return {
      wrapper: {
        options: false
      }
    }
  },
  components: {},
  methods: {
    wrapperOptions () {
      this.wrapper.options = !this.wrapper.options
    }
  }
}
</script>
