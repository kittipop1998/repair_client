const student_api = 'api/v1/userprofile/'
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        async createUserprofile(context, params) {
            return await axios.post(`${userprofile_api}`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
        async getUserprofiles(context, params) {
            return await axios.get(`${userprofile_api}`, params = {params})
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async getUserprofile(context, id) {
            return await axios.get(`${userprofile_api}${id}/`, )
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async updateUserprofile(context, params) {
            return await axios.put(`${userprofile_api}${params.id}/`, params)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
        async deleteUserprofile(context, id) {
            return await axios.delete(`${userprofile_api}${id}/`, )
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        },
    }
}
