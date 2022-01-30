import { createStore } from 'vuex'

export default createStore({
  state: {
    logintype: "home"
  },
  mutations: {
    changeLoginType(type){
      state.logintype = type
    }
  },
  actions: {
  },
  modules: {
  }
})
