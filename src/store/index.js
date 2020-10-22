import Vue from 'vue'
import Vuex from 'vuex'
import user from "./modules/user";
import success from "./modules/success";
import spinner from "./modules/spinner";
import error from "./modules/error";
import userprofile from "./modules/userprofile";
import domitory from "./modules/domitory";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
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
        getRoom: async function (context, params) {
            return await axios.get('api/Rooms/')
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },
        getRepairType: async function (context,) {
            return await axios.get(`api/RepairType/`)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },
        saveRepair: async function (context, params) {
            const config = {
                method: 'POST',
                body: formData,
            }
            const formData = new FormData();
            const uri = this.state.avatar
            formData.append('image', params.image)
            formData.append('contact', params.contact)
            formData.append('desc', params.desc)
            formData.append('created_date', params.created_date)
            formData.append('status', params.status)
            formData.append('user_profile', params.user_profile)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('room_sel', params.room_sel)
            formData.append('room', params.room)
            formData.append('room_type', params.room_type)


            return await axios.post(`api/Repairs/`, formData, config)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console.log(error, 'error')
                    return error
                });

        },

        getRepairs: async function () {
            return await axios.get('api/Repairs/')
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },

        getUserprofiles: async function (context, params) {
            const config = {
                method: 'POST',
                body: formData,
            }
            const formData = new FormData();
            if (typeof (params.image) === 'object') {
                formData.append('image', params.image)
            }
            formData.append('nameStudent', params.nameStudent)
            formData.append('student_id', params.student_id)
            formData.append('department', params.department)
            formData.append('branch', params.branch)
            formData.append('nameRo', params.nameRo)
            formData.append('room_type', params.room_type)
            formData.append('domitory', params.domitory)
            formData.append('contact', params.contact)
            formData.append('face_book', params.face_book)

            return await axios.get('api/user-profile/', formData, config)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console.log(error, 'error')
                    return error
                });

        },


        getUserprofile: async function (context, id) {
            return await axios.get('api/user-profile/' + id + '/')
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },



        updateUserprofile: async function (context, params) {
            const config = {
                method: 'PUT',
                body: formData,
            }
            const formData = new FormData();
            if (typeof (params.image) === 'object') {
                formData.append('image', params.image)
            }
            formData.append('nameStudent', params.nameStudent)
            formData.append('student_id', params.student_id)
            formData.append('department', params.department)
            formData.append('branch', params.branch)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('nameRo', params.nameRo)
            formData.append('room_type', params.room_type)
            formData.append('face_book', params.face_book)


            return await axios.put(`api/user-profile/${params.id}/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.log(error, 'error')
                    return error
                });

        },

        // getUserprofileDetails: async function (context, params) {
        //     return await axios.get('api/user-profile/', params = {params})
        //
        //         .then((response) => {
        //             console.log(response.data)
        //             return response.data
        //         }).catch((error) => {
        //             // context.dispatch("error/setError", error.response.data, {root: true});
        //             console(error, 'error')
        //             return error
        //         });
        //
        // },

        // SaveUserprofile: async function (context, params) {
        //     const config = {
        //         method: 'POST',
        //         body: formData,
        //     }
        //     const formData = new FormData();
        //     const uri = this.state.avatar
        //     formData.append('image', params.image)
        //     formData.append('nameUs', params.nameUs)
        //     formData.append('yearUs', params.yearUs)
        //     formData.append('department', params.department)
        //     formData.append('branch', params.branch)
        //     formData.append('user_profile', params.user_profile)
        //     formData.append('repair_type', params.repair_type)
        //     formData.append('domitory_sel', params.domitory_sel)
        //     formData.append('room_sel', params.room_sel)
        //     formData.append('nameRo', params.nameRo)
        //     formData.append('room_type', params.room_type)
        //
        //
        //     return await axios.post('api/user-profiles/', formData, config)
        //         .then((response) => {
        //             console.log(response.data)
        //             return response.data
        //         }).catch((error) => {
        //             // context.dispatch("error/setError", error.response.data, {root: true});
        //             console.log(error, 'error')
        //             return error
        //         });
        //
        // },
        //

        getDetails: async function (context, params) {
            return await axios.get('api/Repairs/', params = {params})

                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },
        getRepair: async function (context, id) {
            return await axios.get('api/Repairs/' + id + '/')
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });
        },
        updateRepair: async function (context, params) {
            const config = {
                method: 'PUT',
                body: formData,
            }
            const formData = new FormData();
            if (typeof (params.image) === 'object') {
                formData.append('image', params.image)
            }
            formData.append('contact', params.contact)
            formData.append('desc', params.desc)
            formData.append('created_date', params.created_date)
            formData.append('status', params.status)
            formData.append('user_profile', params.user_profile)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('room_sel', params.room_sel)
            formData.append('room', params.room)
            formData.append('room_type', params.room_type)


            return await axios.put(`api/Repairs/${params.id}/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.log(error, 'error')
                    return error
                });

        },
        deleteRepair: async function (context, id) {
            console.log(id, 'store')
            return await axios.delete(`api/Repairs/${id}/`)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });
        },

            },
            modules: {
                user: user,
                    spinner: spinner,
                    success: success,
                    error: error,
                    domitory: domitory,
                    userprofile: userprofile,
            }
        })
