<template>
  <div id="wrapper">
    <img id="logo" src="~@/assets/images/logo.png" alt="WPLib Box">
    <main>
      <div class="text">
        <h1>Welcome to the WPLib Box</h1>
        <p>The Developer Experience Project for WordPress</p>
      </div>

      <!--<div class="left-side">-->
        <!--<span class="title">-->
          <!--Welcome to your new project!-->
        <!--</span>-->
        <!--<system-information></system-information>-->
      <!--</div>-->

      <!--<div class="right-side">-->
        <!--<div class="doc">-->
          <!--<div class="title">Getting Started</div>-->
          <!--<p>-->
            <!--electron-vue comes packed with detailed documentation that covers everything from-->
            <!--internal configurations, using the project structure, building your application,-->
            <!--and so much more.-->
          <!--</p>-->
          <!--<button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>-->
        <!--</div>-->
        <!--<div class="doc">-->
          <!--<div class="title alt">Other Documentation</div>-->
          <!--<button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>-->
          <!--<button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>-->
        <!--</div>-->
      <!--</div>-->
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding: 20px 80px;
    background: url('~@/assets/images/background.jpg') no-repeat center fixed;
    -webkit-background-size: cover; /* pour anciens Chrome et Safari */
    background-size: cover; /* version standardisée */

    #logo {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 123px;
    }

    main {
      display: flex;
      justify-content: space-between;
    }

    .text{
      width: 100vw;
      flex: 1 100%;
      text-align: center;
      color: white;
      padding-top: 90px;
      h1,p{
        padding: 10px 0;
        color: white;
      }
    }
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
