export default {
    path: '/admin',
    component: () => import('../views/admin/AdminTemplate'),
    children: [
        {
            path: '',
            name: "Repair",
            component:  () => import('../views/admin/Repair_Admin')
        },
        {
            path: 'status',
            name: "Status",
            component:  () => import('../views/admin/Status/Status')
        },
        {
            path: 'inform',
            name: "Inform",
            component:  () => import('../views/admin/Status/Inform')
        },
        {
            path: 'progress',
            name: "Progress",
            component:  () => import('../views/admin/Status/Progress')
        },
        {
            path: 'wait',
            name: "Wait",
            component:  () => import('../views/admin/Status/Wait')
        },
        {
            path: 'completed',
            name: "Completed",
            component:  () => import('../views/admin/Status/Complated')
        },
        {
            path: 'cancel',
            name: "Cancel",
            component:  () => import('../views/admin/Status/Cancel')
        },
        {
            path: 'profile',
            name: "Profile",
            component:  () => import('../views/admin/Profile_Admin')
        },
        {
            path: 'details',
            name: "Details",
            component:  () => import('../views/admin/Status/Details')
        },
        {
            path: 'notification',
            name: "Notification",
            component:  () => import('../views/admin/Status/Notification')
        },
    ]
}
