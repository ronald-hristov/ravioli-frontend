import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    login(state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearUser(state) {
      state.user = null
      localStorage.clear();
    },
  },
  actions: {
    fetchUser ({commit, state}) {
      if (state.user) {
        return
      }

      const user = JSON.parse(<string>localStorage.getItem('user'));
      if (user) {
        state.user = user;
        return
      }
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.user !== null
    }
  },
  modules: {
  }
})
