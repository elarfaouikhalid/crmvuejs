import axios from "axios";
// import swal from 'sweetalert';  

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    isAdmin: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, data) {
      state.user = data
    },
    setIsAdmin(state, isAdmin) {
      state.isAdmin = isAdmin
    }
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user
    },
    isadmin(state) {
      return state.isAdmin
    }
  },
  actions: {
    async signin({ dispatch, commit }, credentials) {
      try {
        if(credentials) {
            const response = await axios.post('login', credentials);
            return dispatch("attempt", response.data.token)
        }
      } catch (error) {
        
      }
    },
    async attempt({ commit, state }, token) {
      try {
        // console.log(state.user);
        // debugger
        if(token) {
          commit('setToken', token)
        }
        if(!state.token) { 
          return;
        }
        if(token) {
          const response = await axios.get("auth/user-profile")
          commit('setUser', response.data)
          commit('setIsAdmin', response.data.is_admin)
        }

      } catch (error) {
        commit('setUser', null)
        commit('setToken', null)
      }
    },
  }
}
