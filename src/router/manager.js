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
                path: 'notification_m2',
                name: "Notification_M2",
                component:  () => import('../views/manager/Status/Notification_M2')
            },
            {
                path: ":id/edit_m",
                name: "Edit_M",
                component:  () => import('../views/manager/Status/Edit_M')
            },
        ]



}