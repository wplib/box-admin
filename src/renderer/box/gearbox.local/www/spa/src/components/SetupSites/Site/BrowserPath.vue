<template>
  <div>
    <div class="field">
      <label class="label noselect">Local Site Path</label>
      <div class="control">
        <div class="is-size-3 similar-input">
          <div class="columns">
            <div class="column is-three-fifths has-text-left noselect">
              <span class="is-size-6">~\Local Sites{{ localSitePath }}</span>
            </div>
            <div class="column has-text-right">
              <span
                class="is-size-6 is-capitalized has-text-weight-bold cursor pointer link-browser noselect"
                @click="chooseDirectory"
              >Browse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowserPath',
  data () {
    return {
      localSitePath: null
    }
  },
  methods: {
    chooseDirectory () {
      let element = document.querySelector('#chooseDirectory')
      if (element) {
        element.click()
      }
    },
    getPath (event) {}
  },
  mounted () {
    this.$events.listen('site:name', eventData => {
      if (eventData.length > 0) {
        this.localSitePath = '\\' + eventData
      } else {
        this.localSitePath = ''
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .link-browser {
    color: hsl(209, 79%, 27%);
    &:hover {
      color: darken(hsl(209, 79%, 27%), 30%) !important;
    }
  }
</style>
