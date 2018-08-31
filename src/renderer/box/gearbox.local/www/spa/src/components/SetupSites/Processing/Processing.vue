<template>
  <div class="is-vertical-center is-fullheight is-height-max has-text-centered">
    <div class="column">
      <div class="noselect">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'Processing',
  mounted () {
    this.checkHost()
  },
  methods: {
    ...mapActions([
      'addHost',
      'resetHost'
    ]),
    checkHost () {
      let setData = {
        ssl: {
          version: null,
          certificate: null
        },
        utilities: {
          mailHog: null
        }
      }

      let addHost = this.getHost

      _.assign(addHost, setData)

      this.addHost(addHost)
      this.resetHost({})
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters([
      'getHost',
      'hasHost'
    ])
  }
}
</script>

<style lang="scss">
  .loader {
    border: 5px solid #f3f3f3; /* Light grey */
    border-top: 5px solid hsl(209, 79%, 27%); /* Blue */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    margin: auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
