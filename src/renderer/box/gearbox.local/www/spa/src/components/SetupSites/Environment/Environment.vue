<template>
  <div class="setup-environment">
    <div class="column is-8 is-offset-2">
      <div class=" ">
        <h1 class="m-b-5 is-size-2 has-text-centered noselect">Choose Your Environment</h1>
        <div class="m-t-30 m-b-30 has-text-centered">
          <div class="columns is-gapless">
            <div class="column">
              <div class="select-option cursor pointer noselect"
                   :class="wrapper.option.preferred ? 'active' : ''"
                   @click="chooseOption('preferred')"
              >
                Preferred
              </div>
            </div>
            <div class="column">
              <div class="select-option cursor pointer noselect"
                   :class="wrapper.option.custom ? 'active' : ''"
                   @click="chooseOption('custom')"
              >
                Custom
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column has-text-centered"
                 v-if="wrapper.option.preferred"
            >
              <div class="has-text-grey-dark noselect cursor default">
                <strong
                  class="has-text-grey-dark"
                >PHP</strong> 7.1.7&nbsp;&nbsp;&verbar;&nbsp;&nbsp;<strong
                class="has-text-grey-dark"
              >WebServer</strong> nginx + Varnish &nbsp;&nbsp;&verbar;&nbsp;&nbsp; <strong
                class="has-text-grey-dark"
              >MySql</strong> 5.6
              </div>
            </div>
            <div class="column has-text-centered"
                 v-else-if="wrapper.option.custom"
            >
              <hr>
              <div class="columns has-text-left">
                <div class="column">
                  <div class="field">
                    <label for="phpVersion" class="label noselect">PHP Version</label>
                    <select name="phpVersion" v-model="environment.phpVersion" class="input default-size" id="phpVersion">
                      <option value="7.2.4">7.2.4</option>
                      <option value="7.1.7">7.1.7</option>
                      <option value="7.0.14">7.0.14</option>
                      <option value="7.0.1">7.0.0</option>
                      <option value="5.6.29">5.6.29</option>
                      <option value="5.5.34">5.5.34</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label for="webServer" class="label noselect">Web Server</label>
                    <select name="webServer" id="webServer" v-model="environment.webServer" class="input default-size">
                      <option value="nginx">nginx</option>
                      <option value="apache">Apache</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label for="mysqlVersion" class="label noselect">MySql Version</label>
                    <select name="mysqlVersion" id="mysqlVersion" v-model="environment.mysqlVersion" class="input default-size">
                      <option value="5.6">5.6</option>
                      <option value="5.5">5.5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <span
                    class="has-text-grey-dark noselect cursor default"
                  ><strong class="has-text-grey-dark">heads up!</strong> we'll need to download dependencies to enable this environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  name: 'SetupEnvironment',
  data () {
    return {
      wrapper: {
        option: {
          preferred: true,
          custom: false
        }
      },
      environment: {
        phpVersion: '7.1.7',
        webServer: 'nginx',
        mysqlVersion: '5.6'
      }
    }
  },
  mounted () {
    this.$events.listen('commit', eventData => {
      this.setEnvironment(this.environment)
    })
  },
  methods: {
    ...mapActions([
      'setEnvironment'
    ]),
    chooseOption (event) {
      switch (event) {
      case 'custom': {
        this.wrapper.option.preferred = false
        this.wrapper.option.custom = true

        break
      }

      default: {
        this.wrapper.option.preferred = true
        this.wrapper.option.custom = false

        this.environment = {
          phpVersion: '7.1.7',
          webServer: 'nginx',
          mysqlVersion: '5.6'
        }

        break
      }
      }
    }
  }
}
</script>

<style lang="scss">
.setup-environment {
  height: 70vh;
  display: flex;
  align-items: center;
}

.select-option {
  font: {
    size: 1.2em;
  }
  border: {
    width: 2px;
    style: solid;
    color: #ededed;
  }
  padding: 1.5em 0;
  position: relative;

  &.active {
    border: {
      color: hsl(209, 79%, 27%);
    }
  }
}
</style>
