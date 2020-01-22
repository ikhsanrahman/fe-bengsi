import Vue from 'vue'
import Vuex from 'vuex'

// simplified module import
// we won't need anymore to add modules one by one here they will be added automatically
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  plugins: [
    // createPersistedState({ storage: window.sessionStorage }),
  ]
})

export default store
