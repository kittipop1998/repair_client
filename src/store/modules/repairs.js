export default {
    namespaced: true,
    state: {
    },
    mutations: {
    },
    actions: {
        getRepair: async function (context, id) {
            return await axios.get('api/Repairs/'+id+'/')
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