const state = [
  {
    overview: {
      webServer: 'nginx',
      phpVersion: '7.1.7',
      mysqlVersion: '5.6.40',
      wordPressVersion: '4.9.8',
      siteName: 'test',
      siteDomain: 'test.local',
      sitePath: '~/Local Sites/test',
      multiSite: false
    },
    database: {
      host: 'localhost',
      name: 'local',
      username: 'root',
      password: 'root',
      remote: {
        host: '192.168.95.100',
        port: 4002
      }
    },
    wordPress: {
      usermame: 'root',
      password: 'root',
      email: 'developer@wplib.com'
    },
    ssl: {
      version: null,
      certificate: null
    },
    utilities: {
      mailHog: null
    }
  },
  {
    overview: {
      webServer: 'Apache',
      phpVersion: '7.2.5',
      mysqlVersion: '5.6.50',
      wordPressVersion: '5.1.2',
      siteName: 'sandbox',
      siteDomain: 'sandbox.local',
      sitePath: '~/Local Sites/sandbox',
      multiSite: false
    },
    database: {
      host: 'localhost',
      name: 'sandbox',
      username: 'root',
      password: 'root',
      remote: {
        host: '192.168.95.100',
        port: 4003
      }
    },
    wordPress: {
      usermame: 'root',
      password: 'root',
      email: 'developer@wplib.com'
    },
    ssl: {
      version: null,
      certificate: null
    },
    utilities: {
      mailHog: null
    }
  }
]

/*
const state = []
*/

const mutations = {}

const actions = {}

const getters = {
  hasHosts: state => {
    return state.length > 0
  },
  allHosts: state => {
    return state
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
