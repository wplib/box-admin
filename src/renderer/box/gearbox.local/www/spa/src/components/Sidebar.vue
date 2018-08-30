<template>
  <div
    class="wrapper sidebar has-text-centered"
    :class="getStateSidebar ? '' : 'is-white'"
  >
    <!-- Has Sidebar -->
    <div
      class="wrapper-links"
      v-if="getStateSidebar"
    >
      <router-link
        to="/"
        class="side-link tooltip is-tooltip-right"
        data-tooltip="Local Sites"
      >
        <i class="icon ion-md-home"></i>
      </router-link>

      <router-link
        to="/connect-wplib"
        class="side-link tooltip is-tooltip-right"
        data-tooltip="Connect to WPLib"
      >
        <i class="icon ion-md-wifi"></i>
      </router-link>

      <router-link
        to="/add-localsite"
        class="side-link stick-bottom tooltip is-tooltip-right"
        data-tooltip="Add Local Site"
      >
        <div class="is-white is-rounded">
          <i class="icon ion-md-add"></i>
        </div>
      </router-link>
    </div>

    <!-- Not Has Sidebar -->
    <div
      class="wrapper-links"
      v-else
    >
      <router-link to="/"
                   class="side-link"
      >
        <div class="is-white is-rounded has-text-grey-darker">
          <i class="icon ion-md-close"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters([
      'getStateSidebar'
    ])
  },
  mounted () {
    if (this.$route.path === '/add-localsite') {
      this.stateSidebar(false)
    }
  },
  methods: {
    ...mapActions([
      'stateSidebar'
    ])
  }
}
</script>

<style lang="scss">
    .sidebar {
        background: hsl(209, 79%, 27%);
        width: 100%;
        height: 100vh;
        color: #FFF;
        position: relative;
        .side-link {
            color: inherit;
            width: 100%;
            display: block;
            padding: 20px 7px;
            font: {
                size: 30px;
            }
            &.stick-bottom {
                position: absolute;
                bottom: 0;
            }

            .is-rounded.is-white {
                border-radius: 50px;
                color: hsl(209, 79%, 27%);
                width: 45px;
                margin: 0 auto;
            }
        }
    }
</style>
