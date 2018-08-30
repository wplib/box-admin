<template>
  <div class="is-fullheight">
    <form-wizard
      shape="tab"
      color="#0F487D"
      title=""
      subtitle=""
      @on-complete="onComplete"
    >
      <tab-content
        title="Setup Site"
      >
        <site />
      </tab-content>
      <tab-content
        title="Setup Environment"
      >
        <environment />
      </tab-content>
      <tab-content
        title="Setup WordPress"
      >
        <word-press />
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import Site from '@/components/SetupSites/Site/Site'
import Environment from '@/components/SetupSites/Environment/Environment'
import WordPress from '@/components/SetupSites/WordPress/WordPress'

export default {
  name: 'AddLocalSite',
  components: {
    Site,
    Environment,
    WordPress
  },
  methods: {
    onComplete () {
      alert('Yay. Done!')
    }
  }
}
</script>

<style lang="scss">
  .vue-form-wizard {
    position: relative;
    height: calc(100vh - 15px);
    .wizard-card-footer {
      width: 100%;
      position: absolute;
      bottom: 0;

      .wizard-footer-left {
        button {
          color: rgb(15, 72, 125) !important;
          border: {
            color: #FFFFFF !important;
          }
          background: {
            color: #FFFFFF !important;
          }
        }
      }
    }

    .wizard-btn {
      border: {
        radius: 0 !important;
      }
    }
  }
</style>
