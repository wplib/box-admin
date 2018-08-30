<template>
  <div class="is-vertical-center is-fullheight is-height-max has-text-centered">
    <div class="column is-12">
      <h1 class="m-b-15 is-size-1 noselect">Looks like you hanven't <br>created any sites yet!</h1>
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
