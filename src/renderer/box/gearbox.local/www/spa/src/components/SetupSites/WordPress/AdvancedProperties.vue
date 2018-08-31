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
            <label for="multisite" class="label noselect">Is This WordPress Multisite</label>
            <select name="multisite" id="multisite" class="input default-size" v-model="multisite" @change="emitOption">
              <option value="no">No</option>
              <option value="subdirectory">Yes - Subdirectory</option>
              <option value="subdomain">Yes - Subdomain</option>
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
      },
      multisite: 'no'
    }
  },
  methods: {
    wrapperOptions () {
      this.wrapper.options = !this.wrapper.options
    },
    emitOption () {
      this.$events.$emit('environment:multisite', this.multisite)
    }
  }
}
</script>
