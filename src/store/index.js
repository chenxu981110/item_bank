import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titType: '默认值'
  },
  mutations: {
    pushTitType (state, type) {
      console.log('state' + type)
      state.titType = type
    }
  },
  actions: {

  },
  modules: {
  }
})
