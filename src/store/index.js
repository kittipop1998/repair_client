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
    state: {
        login_text : "Login"
    },
    mutations: {
        setLoginText(state,data) {
            state.login_text = data
        }
    },
    actions: {
        getDomitory: async function (context, params) {
            return await axios.get('api/Dormitorys/')
                .then((response) => {
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
            formData.append('imageBe', params.imageBe)
            formData.append('contact', params.contact)
            formData.append('desc', params.desc)
            formData.append('created_date', params.created_date)
            formData.append('status', params.status)
            formData.append('user', params.user)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('room_sel', params.room_sel)
            formData.append('room', params.room)
            formData.append('room_type', params.room_type)


            return await axios.post(`api/Repairs/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console.log(error, 'error')
                    return error
                });

        },

        getRepairs: async function (context, params) {
            return await axios.get('api/Repairs/', params={params})
                .then((response) => {
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
            const uri = this.state.avatar
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
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console.log(error, 'error')
                    return error
                });

        },


        getUserprofile: async function (context) {
            return await axios.get('rest-auth/user-profile/')
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });

        },



        updateUserprofile: async function (context, params) {
            console.log('params',params)
            const config = {
                method: 'PUT',
                body: formData,
            }
            const formData = new FormData();
            const uri = this.state.avatar
            if (typeof (params.userprofile.image) === 'object') {
                formData.append('image', params.userprofile.image)
            }
            formData.append('nameStudent', params.userprofile.nameStudent)
            formData.append('student_id', params.userprofile.student_id)
            formData.append('department', params.userprofile.department)
            formData.append('branch', params.userprofile.branch)
            formData.append('contact', params.userprofile.contact)
            formData.append('face_book', params.userprofile.face_book)

            return await axios.put(`api/rest-auth/user-profile/${params.id}/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.log(error, 'error')
                    return error
                });

        },


        saveUserprofile: async function (context, params) {
            const config = {
                method: 'POST',
                body: formData,
            }
            const formData = new FormData();
            formData.append('image', params.userprofile.image)
            formData.append('nameStudent', params.userprofile.nameStudent)
            formData.append('student_id', params.userprofile.student_id)
            formData.append('department', params.userprofile.department)
            formData.append('branch', params.userprofile.branch)
            formData.append('contact', params.userprofile.contact)
            formData.append('face_book', params.userprofile.face_book)

            return await axios.post('rest-auth/user-profile/', formData, config)
                .then((response) => {
                    console.log(response.data)
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console.log(error, 'error')
                    return error
                });

        },

        getDetails: async function (context, params) {
            return await axios.get('api/Repairs/', params = {params})

                .then((response) => {
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
            console.log('params',params)
            const config = {
                method: 'PUT',
                body: formData,
            }
            const formData = new FormData();
            if (typeof (params.imageBe) === 'object') {
                formData.append('imageBe', params.imageBe)
            }

            if (params.imageAf&& typeof (params.imageAf) === 'object') {
                formData.append('imageAf', params.imageAf)
            }

            formData.append('contact', params.contact)
            formData.append('desc', params.desc)
            formData.append('created_date', params.created_date)
            if(params.approve_data){
                formData.append('approve_data', params.approve_data)
            }
            if(params.completed_data){
                formData.append('completed_data', params.completed_data)
            }

            formData.append('status', params.status)
            formData.append('user', params.user)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('room_sel', params.room_sel)
            formData.append('room', params.room)
            formData.append('room_type', params.room_type)

            // console.log(FormData.completed_data,'in store')
            return await axios.put(`api/Repairs/${params.id}/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    console.log(error, 'error')
                    return error
                });

        },
        deleteRepair: async function (context, id) {
            return await axios.delete(`api/Repairs/${id}/`)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });
        },
        getStatus: async function (context,) {
            return await axios.get(`api/Status/`)
                .then((response) => {
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
