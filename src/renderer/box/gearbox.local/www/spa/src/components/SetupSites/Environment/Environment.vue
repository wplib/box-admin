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
                    <select name="phpVersion" class="input default-size" id="phpVersion">
                      <option selected="selected" value="7_2_4">7.2.4</option>
                      <option value="7_1_0">7.1.0</option>
                      <option value="7_0_14">7.0.14</option>
                      <option value="7_0_5">7.0.5</option>
                      <option value="7_0_4">7.0.4</option>
                      <option value="7_0_3">7.0.3</option>
                      <option value="7_0_2">7.0.2</option>
                      <option value="7_0_1">7.0.1</option>
                      <option value="5_6_29">5.6.29</option>
                      <option value="5_6_20">5.6.20</option>
                      <option value="5_6_19">5.6.19</option>
                      <option value="5_6_18">5.6.18</option>
                      <option value="5_6_17">5.6.17</option>
                      <option value="5_6_2">5.6.2</option>
                      <option value="5_5_34">5.5.34</option>
                      <option value="5_5_33">5.5.33</option>
                      <option value="5_5_32">5.5.32</option>
                      <option value="5_5_31">5.5.31</option>
                      <option value="5_5_18">5.5.18</option>
                      <option value="5_5_5">5.5.5</option>
                      <option value="5_5_0_a6">5.5.0.a6</option>
                      <option value="5_5_0_a_5">5.5.0.a.5</option>
                      <option value="5_5_0_a_2">5.5.0.a.2</option>
                      <option value="5_4_34">5.4.34</option>
                      <option value="5_4_21">5.4.21</option>
                      <option value="5_4_13">5.4.13</option>
                      <option value="5_4_12">5.4.12</option>
                      <option value="5_4_11">5.4.11</option>
                      <option value="5_4_10">5.4.10</option>
                      <option value="5_4_9">5.4.9</option>
                      <option value="5_4_8">5.4.8</option>
                      <option value="5_4_7">5.4.7</option>
                      <option value="5_4_6">5.4.6</option>
                      <option value="5_4_5">5.4.5</option>
                      <option value="5_4_4">5.4.4</option>
                      <option value="5_4_3">5.4.3</option>
                      <option value="5_4_2">5.4.2</option>
                      <option value="5_4_1">5.4.1</option>
                      <option value="5_4_0">5.4.0</option>
                      <option value="5_3_29">5.3.29</option>
                      <option value="5_3_27">5.3.27</option>
                      <option value="5_3_23">5.3.23</option>
                      <option value="5_3_22">5.3.22</option>
                      <option value="5_3_21">5.3.21</option>
                      <option value="5_3_20">5.3.20</option>
                      <option value="5_3_19">5.3.19</option>
                      <option value="5_3_18">5.3.18</option>
                      <option value="5_3_17">5.3.17</option>
                      <option value="5_3_16">5.3.16</option>
                      <option value="5_3_15">5.3.15</option>
                      <option value="5_3_14">5.3.14</option>
                      <option value="5_3_13">5.3.13</option>
                      <option value="5_3_12">5.3.12</option>
                      <option value="5_3_11">5.3.11</option>
                      <option value="5_3_10">5.3.10</option>
                      <option value="5_3_2">5.3.2</option>
                      <option value="5_3_1">5.3.1</option>
                      <option value="5_3_0">5.3.0</option>
                      <option value="5_2_17">5.2.17</option>
                      <option value="5_2_16">5.2.16</option>
                      <option value="5_1_6">5.1.6</option>
                      <option value="5_1_5">5.1.5</option>
                      <option value="5_0_5">5.0.5</option>
                      <option value="5_0_4">5.0.4</option>
                      <option value="4_4_9">4.4.9</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label for="webServer" class="label noselect">Web Server</label>
                    <select name="webServer" id="webServer" class="input default-size">
                      <option value="">nginix</option>
                      <option value="">Apache</option>
                    </select>
                  </div>
                </div>
                <div class="column">
                  <div class="field">
                    <label for="mysqlVersion" class="label noselect">MySql Version</label>
                    <select name="mysqlVersion" id="mysqlVersion" class="input default-size">
                      <option value="">5.6</option>
                      <option value="">5.5</option>
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
export default {
  name: 'SetupEnvironment',
  data () {
    return {
      wrapper: {
        option: {
          preferred: true,
          custom: false
        }
      }
    }
  },
  methods: {
    chooseOption (event) {
      if (event) {
        switch (event) {
        case 'custom': {
          this.wrapper.option.preferred = false
          this.wrapper.option.custom = true

          break
        }

        case 'preferred': {
          this.wrapper.option.preferred = true
          this.wrapper.option.custom = false

          break
        }

        default: {
          this.wrapper.option.preferred = true
          this.wrapper.option.custom = false

          break
        }
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
