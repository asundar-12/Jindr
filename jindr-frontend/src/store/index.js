import { createStore } from 'vuex'

export default createStore({
  state: {
    logintype: "home"
  },
  mutations: {
    changeLoginType(state,type){
      state.logintype = type
    }
  },
  actions: {
  },
  modules: {
  }
})
