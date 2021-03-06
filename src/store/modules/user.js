export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser: function (state, data) {
            state.user = data
        },
        setUserProfile: function (state, data) {
            state.user.profile = data
        }
    },
    actions: {
        getUserToken: async function (context, params) {
            // clear old access_token
            delete axios.defaults.headers.common["Authorization"];
            localStorage.clear()

            let data = await axios.post(`/rest-auth/login/`, params)
                .then((response) => {
                    // console.log("response", response.data)
                    localStorage.setItem('access_token', response.data.key)
                    axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
            return data
        },
        getUser: async function (context) {
            return await axios.get(`/rest-auth/user-profile/`)
                .then((response) => {
                    context.commit('setUser', response.data)
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        async logout(context) {
            return await axios.post(`/rest-auth/logout/`)
                .then((response) => {
                    // console.log("response", response.data)
                    delete axios.defaults.headers.common["Authorization"];
                    localStorage.clear()
                    return response.data
                })
                .catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },

        registerUser: async function (context, params) {
            localStorage.clear()  // clear old access_token because it invalid token if send request with token
            let url = (params.is_staff)?'/admin_register/':'/rest-auth/registration/';
            return await axios.post(url, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.error(error)
                    return null
                })
        },
    }
}
