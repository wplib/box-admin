<template>
  <div class="is-fullheight">
    <form-wizard
      shape="tab"
      color="#0F487D"
      title=""
      subtitle=""
    >
      <tab-content title="Setup Site">
        <setup-site></setup-site>
      </tab-content>
      <tab-content title="Setup Environment">
        <setup-environment></setup-environment>
      </tab-content>
      <tab-content title="Setup WordPress">
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import setupSite from '@/components/SetupSite/SetupSite'
import setupEnvironment from '@/components/SetupEnvironment/SetupEnvironment'

export default {
  name: 'AddLocalSite',
  data () {
    return {}
  },
  components: {
    setupSite,
    setupEnvironment
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
    }
  }
</style>
