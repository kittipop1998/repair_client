import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import success from "./modules/success";
import spinner from "./modules/spinner";
import error from "./modules/error";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getDomitory: async function (context,params) {
      return await axios.get('api/Dormitorys/')
          .then((response) => {
            console.log(response.data)
            return response.data
          }).catch((error) => {
            // context.dispatch("error/setError", error.response.data, {root: true});
              console(error,'error')
            return error
          });

    },
      getRoom: async function (context,params) {
          return await axios.get('api/Rooms/')
              .then((response) => {
                  console.log(response.data)
                  return response.data
              }).catch((error) => {
                  // context.dispatch("error/setError", error.response.data, {root: true});
                  console(error,'error')
                  return error
              });

      },
      getRepairType: async function (context,params) {
          return await axios.get('api/RepairType/')
              .then((response) => {
                  console.log(response.data)
                  return response.data
              }).catch((error) => {
                  // context.dispatch("error/setError", error.response.data, {root: true});
                  console(error,'error')
                  return error
              });

      },
      saveRepair: async function (context,params){
          return await axios.post('api/Repairs/', params)
              .then((response) => {
                  console.log(response.data)
                  return response.data
              }).catch((error) => {
                  // context.dispatch("error/setError", error.response.data, {root: true});
                  console(error,'error')
                  return error
              });

      }

      getUserprofile: async function () {
          return await axios.get('api/Userprofile/')
              .then((response) => {
                  console.log(response.data)
                  return response.data
              }).catch((error) => {
                  // context.dispatch("error/setError", error.response.data, {root: true});
                  console(error,'error')
                  return error
              });

      },

  },
    modules: {
        user: user,
        spinner: spinner,
        success: success,
        error: error,
    }
})
