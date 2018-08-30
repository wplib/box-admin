<template>
  <div class="setup-site">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-2 has-text-centered noselect">What's Your Site Name?</h1>
        <div class="m-t-30 m-b-30">
          <div class="field">
            <div class="control">
              <input class="input has-text-centered is-size-3" type="text" placeholder="" autofocus>
            </div>
          </div>
        </div>
        <advanced-properties />
      </div>
    </div>
  </div>
</template>

<script>
import advancedProperties from '@/components/SetupSite/AdvancedProperties'

export default {
  name: 'SetupSite',
  data () {
    return {}
  },
  components: {
    advancedProperties
  }
}
</script>

<style scoped lang="scss">
  .setup-site {
    height: 70vh;
    display: flex;
    align-items: center;
  }
</style>
