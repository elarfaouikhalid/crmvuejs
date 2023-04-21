import { createStore } from 'vuex';
import auth from './auth/index';
import employee from './employee/index';
import adminstrator from './adminstrator/index';

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {
  },
  modules: {
    auth,
    employee,
    adminstrator
  }
})
