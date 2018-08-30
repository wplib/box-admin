<template>
  <div>
    <div class="field">
      <label class="label noselect">Local Site Path</label>
      <div class="control">
        <div class="is-size-3 similar-input">
          <div class="columns">
            <div class="column is-three-fifths has-text-left noselect">
              <span class="is-size-6">~\Local Sites</span>
            </div>
            <div class="column has-text-right">
              <span
                class="is-size-6 is-capitalized has-text-weight-bold cursor pointer link-browser"
                @click="chooseDirectory"
              >Browse</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
    <input type="file" webkitdirectory mozdirectory msdirectory odirectory directory multiple id="chooseDirectory" class="is-hidden" @change="getPath">
    -->
  </div>
</template>

<script>
export default {
  name: 'BrowserPath',
  methods: {
    chooseDirectory () {
      let element = document.querySelector('#chooseDirectory')
      if (element) {
        element.click()
      }
    },
    getPath (event) {}
  }
}
</script>

<style scoped lang="scss">
  .link-browser {
    color: #3273dc;
    &:hover {
      color: darken(#3273dc, 30%) !important;
    }
  }
</style>
