export default {

        path: '/manager',
        component: () => import('../views/manager/ManagerTemplate'),
        children: [

            {
                path: 'status_m',
                name: "Status_M",
                component:  () => import('../views/manager/Status/Status_M')
            },
            {
                path: 'inform_m',
                name: "Inform_M",
                component:  () => import('../views/manager/Status/Inform_M')
            },
            {
                path: 'wait_m',
                name: "Wait_M",
                component:  () => import('../views/manager/Status/Wait_M')
            },
            {
                path: 'progress_m',
                name: "Progress_M",
                component:  () => import('../views/manager/Status/Progress_M')
            },
            {
                path: 'completed_m',
                name: "Completed_M",
                component:  () => import('../views/manager/Status/Completed_M')
            },
            {
                path: 'cancel_m',
                name: "Cancel_M",
                component:  () => import('../views/manager/Status/Cancel_M')
            },
            {
                path: ":id/details_m",
                name: "Details_M",
                component:  () => import('../views/manager/Status/Details_M')
            },
            {
                path: 'profile_m',
                name: "Profile_M",
                component:  () => import('../views/manager/Profile_M')
            },
            {
                path: ":id/edit_m",
                name: "Edit_M",
                component:  () => import('../views/manager/Status/Edit_M')
            },
        ]



}