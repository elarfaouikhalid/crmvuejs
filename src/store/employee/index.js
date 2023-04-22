import axios from "axios";
import swal from 'sweetalert';  

export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
    id: null,
    checktoken: null,
    employeeemail: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },
    setUser(state, data) {
      state.user = data
    },
    setIdCompany(state, id) {
        state.id = id
    },
    setInvitationToken(state, checktoken) {
        state.checktoken = checktoken
    },
    setEmail(state, email) {
        state.employeeemail = email
    }
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user
    },
    checkInvitation(state) {
        return state.checktoken
    },
    getEmail(state) {
        return state.employeeemail
    }
  },
  actions: {
    async Invitationcheck({ dispatch, commit }, token) {
      try {
            const response = await axios.get(`employee/invite/${token}`);
            commit("setInvitationToken", response.data.token)
            commit("setEmail", response.data.email)
            swal({
              title: "Error!",
              text: error.response.data.success,
              icon: "error",
              button: "OK",
            });
      } catch (error) {
        swal({
            title: "Error!",
            text: error.response.data.errors,
            icon: "error",
            button: "OK",
          });
        
      }
    },
    async createAccount({ dispatch, commit }, employeedata) {
        try {
              const response = await axios.post("account/complete", employeedata);
        } catch (error) {
          swal({
              title: "Error!",
              text: error.response.data.errors,
              icon: "error",
              button: "OK",
            });
          
        }
      },
    
  }
}
