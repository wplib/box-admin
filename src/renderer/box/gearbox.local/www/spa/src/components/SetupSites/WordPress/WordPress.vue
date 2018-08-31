<template>
  <div class="setup-wp">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-2 has-text-centered noselect">Setup WordPress</h1>
        <div class="m-t-30 m-b-30">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label for="wordpressUsername" class="label noselect">WordPress Username</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="text" placeholder="" id="wordpressUsername" v-model="wordpress.username">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="wordpressPassword" class="label noselect">WordPress Password</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="password" placeholder="" id="wordpressPassword" v-model="wordpress.password">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label for="wordpressEmail" class="label noselect">WordPress Email</label>
                <div class="control">
                  <input class="input has-text-left default-size" type="text" placeholder="" id="wordpressEmail" v-model="wordpress.email">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <advanced-properties ref="advancedPropertie" />
            </div>
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

import AdvancedProperties from './AdvancedProperties'

export default {
  name: 'setupWordpress',
  data () {
    return {
      wordpress: {
        username: '',
        password: '',
        email: 'dev@wplib.local',
        multisite: 'no'
      }
    }
  },
  mounted () {
    this.$events.listen('commit', eventData => {
      if (this.$refs.advancedPropertie !== undefined) {
        this.wordpress.multisite = this.$refs.advancedPropertie.multisite
      }
      this.setWordPress(this.wordpress)
      this.$router.push('/processing')
    })
  },
  components: {
    AdvancedProperties
  },
  methods: {
    ...mapActions([
      'setWordPress'
    ])
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
