export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        getDomitory: async function (context, params) {
            return await axios.get('api/Dormitorys/')
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },
    }
}