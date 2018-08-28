<template>
  <div class="sidebar has-text-centered"
    v-bind:class="hideSidebar ? 'is-hidden' : ''"
  >
    <router-link to="/"
                 class="side-link tooltip is-tooltip-right"
                 data-tooltip="Local Sites"
    >
      <i class="icon ion-md-home"></i>
    </router-link>

    <router-link to="/connect-wplib"
                 class="side-link tooltip is-tooltip-right"
                 data-tooltip="Connect to WPLib"
    >
      <i class="icon ion-md-wifi"></i>
    </router-link>

    <router-link to="/add-localsite"
                 class="side-link stick-bottom tooltip is-tooltip-right"
                 data-tooltip="Add Local Site"
    >
      <div class="is-white is-rounded">
        <i class="icon ion-md-add"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {},
  data () {
    return {
      hideSidebar: false
    }
  }
}
</script>

<style lang="scss">
  .sidebar {
    background: #0F487D;
    width: 80px;
    height: calc(100vh + 12px);
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
      &:hover {
        background: rgba(0, 0, 0, .1);
      }

      .is-rounded.is-white {
        border-radius: 50px;
        color: #0F487D;
        width: 45px;
        margin: 0 auto;
      }
    }
  }
</style>
