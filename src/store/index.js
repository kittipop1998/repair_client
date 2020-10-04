import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    getDomitory: async function () {
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
      getRoom: async function () {
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
      getRepairType: async function () {
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

  },
  modules: {

  }
})
