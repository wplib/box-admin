<template>
  <div class="setup-wp">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-2 has-text-centered noselect">Setup WordPress</h1>
        <div class="m-t-30 m-b-30">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label for="siteDomain" class="label noselect">WordPress Username</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="text" placeholder="" id="siteDomain">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="siteDomain" class="label noselect">WordPress Password</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="text" placeholder="" id="siteDomain">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="siteDomain" class="label noselect">WordPress Email</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="text" placeholder="" id="siteDomain">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <advanced-properties/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdvancedProperties from './AdvancedProperties'

export default {
  name: 'setupWordpress',
  components: {
    AdvancedProperties
  }
}
</script>

<style lang="scss">
  .setup-wp {
    height: 70vh;
    display: flex;
    align-items: center;
  }
</style>
