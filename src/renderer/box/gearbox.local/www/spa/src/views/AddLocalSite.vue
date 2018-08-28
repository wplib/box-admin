<template>
  <div class="is-vertical-center is-fullheight is-height-max">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-1 has-text-centered">What's Your Site Name?</h1>
        <div class="m-t-30 m-b-30">
          <div class="field">
            <div class="control">
              <input class="input has-text-centered is-size-3" type="text" placeholder="" autofocus>
            </div>
          </div>
          <hr>
          <div class="columns has-text-left">
            <div class="column is-6">
              <div class="field">
                <label for="siteDomain" class="label">Local Site Domain</label>
                <div class="control">
                  <input class="input has-text-left is-size-3" type="text" placeholder="" id="siteDomain">
                </div>
              </div>
            </div>
            <div class="column is-6">
              <div class="field">
                <label for="sitePath" class="label">Local Site Path</label>
                <div class="control">
                  <input class="input has-text-left is-size-3" type="text" placeholder="" id="sitePath">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="button-actions">
        <a href="#" class="button is-link is-outlined is-rounded m-l-5">
          Continue&nbsp;&nbsp;<i class="icon ion-md-arrow-round-forward"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddLocalSite',
  data () {
    return {}
  }
}
</script>

<style lang="scss"></style>
