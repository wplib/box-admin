<template>
  <div class="is-vertical-center is-fullheight is-height-max has-text-centered">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="m-b-15 is-size-1">Looks like you hanven't created any sites yet!</h1>
      <router-link to="/add-localsite"
                   class="button is-link is-rounded "
      >
        <i class="icon ion-md-add"></i>&nbsp;&nbsp;Create a New Site
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>

<style lang="scss"></style>
