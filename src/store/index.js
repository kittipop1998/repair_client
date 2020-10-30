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
        login_text : "Login",
        user_profile: null
    },
    mutations: {
        setLoginText(state,data) {
            state.login_text = data
        },
        setUser(state, data) {
            state.user_profile = data
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
            formData.append('note', params.note)
            formData.append('technician', params.technician)
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

        getRepairsM: async function (context, params) {
            return await axios.get(`/myrepair/${params.user_id}`, params={params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });
        },
        getRepairs: async function (context, params) {
            return await axios.get('api/Repairs/', params = {params})
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
            formData.append('position', params.position)
            formData.append('rebuilding', params.rebuilding)
            formData.append('nameRo', params.nameRo)
            formData.append('room_type', params.room_type)
            formData.append('domitory', params.domitory)
            formData.append('contact', params.contact)
            formData.append('face_book', params.face_book)

            return await axios.get('rest-auth/user-profile/', formData, config)
                .then((response) => {
                    context.commit('setUser', response.data)
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
            console.log('params',params.position)
            const config = {
                method: 'PUT',
                body: formData,
            }
            const formData = new FormData();
            const uri = this.state.avatar
            if (typeof (params.image) === 'object') {
                formData.append('image', params.image)
            }
            formData.append('nameStudent', params.nameStudent)
            formData.append('student_id', params.student_id)
            formData.append('position', params.position)
            formData.append('rebuilding', params.rebuilding)
            formData.append('department', params.department)
            formData.append('branch', params.branch)
            formData.append('contact', params.contact)
            formData.append('face_book', params.face_book)

            return await axios.put(`rest-auth/user-profile/`, formData, config)
                // console.log(formData)
                .then((response) => {
                    return response.data
                }).catch((error) => {
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
            formData.append('note', params.note)
            formData.append('desc', params.desc)
            formData.append('technician', params.technician)
            formData.append('created_date', params.created_date)
            if(params.wait_date){
                formData.append('wait_date', params.wait_date)
            }
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
        changestatus: async function (context, params) {
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
            formData.append('note', params.note)
            formData.append('desc', params.desc)
            formData.append('technician', params.technician)
            formData.append('created_date', params.created_date)
            if(params.wait_date){
                formData.append('wait_date', params.wait_date)
            }
            if(params.approve_data){
                formData.append('approve_data', params.approve_data)
            }
            if(params.completed_data){
                formData.append('completed_data', params.completed_data)
            }
            formData.append('user', params.user)
            formData.append('repair_type', params.repair_type)
            formData.append('domitory_sel', params.domitory_sel)
            formData.append('room_sel', params.room_sel)
            formData.append('room', params.room)
            formData.append('room_type', params.room_type)
            formData.append('status', 5)
            return await axios.put(`api/Repairs/${params.id}/`, formData, config)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    // context.dispatch("error/setError", error.response.data, {root: true});
                    console(error, 'error')
                    return error
                });
        },
        calcelRepair: async function (context, id) {
            return await axios.put(`api/Repairs/${id}/`)
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
