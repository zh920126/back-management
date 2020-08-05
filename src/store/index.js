import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: sessionStorage.getItem('token') || '',
    userinfo: JSON.parse(sessionStorage.getItem('userInfo')) || {},
    userRights: JSON.parse(sessionStorage.getItem('userRights')) || []
  },
  mutations: {
    getToken (state, data) {
      state.token = data
      sessionStorage.setItem('token', data)
    },
    getUserInfo (state, data) {
      state.userinfo = data
      sessionStorage.setItem('userInfo', JSON.stringify(state.userinfo))
    },
    userRights (state, data) {
      state.userRights = data
      sessionStorage.setItem('userRights', JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
