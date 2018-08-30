<template>
  <div class="is-vertical-center is-fullheight is-height-max has-text-centered">
    <div class="column is-half is-offset-one-quarter">
      <div class="noselect">
        <h1 class="m-b-5 is-size-1 cursor default">Connect to WpLib</h1>
        <strong class="is-size-5 has-text-grey cursor default">Your Wordpress Workflow!</strong>
        <div class="card m-t-30 m-b-30">
          <div class="card-content">
            <div class="content has-text-justified cursor default">
              WPLib Box is designed the be the EASIEST to use professional solution for local WordPress development. WPLib Box leverages the open-source tool Vagrant and either Oracle's open-source VirtualBox or commercial products from VMware.
            </div>
          </div>
        </div>
      </div>

      <div class="button-actions">
        <a href="#" class="button is-link is-rounded m-r-5">
          Login to Wplib
        </a>
        <button
          @click="openUrl"
          class="button is-link is-outlined is-rounded m-l-5"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConnectWpLib',
  methods: {
    openUrl () {
      this.$parent.openExternalUrl()
    }
  }
}
</script>

<style lang="scss"></style>
