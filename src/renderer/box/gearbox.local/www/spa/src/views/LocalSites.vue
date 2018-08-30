<template>
  <div class="columns is-gapless" :class="{ 'is-height-max is-vertical-center has-text-centered' : !hasHosts }">
    <div class="column is-12" v-if="!hasHosts">
      <h1 class="m-b-15 is-size-1 noselect cursor default">Looks like you hanven't <br>created any sites yet!</h1>
      <router-link to="/add-localsite"
                   class="button is-link is-rounded "
      >
        <i class="icon ion-md-add"></i>&nbsp;&nbsp;Create a New Site
      </router-link>
    </div>
    <div v-else class="column is-one-quarter">
      <manage-sites />
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

import ManageSites from '@/components/ManageSites/ManageSites'

export default {
  name: 'LocalSites',
  components: {
    ManageSites
  },
  computed: {
    ...mapGetters([
      'hasHosts'
    ])
  }
}
</script>

<style lang="scss"></style>
