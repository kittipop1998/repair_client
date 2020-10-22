export default {
    path: '/admin',
    component: () => import('../views/admin/AdminTemplate'),
    children: [
        {
            path: 'repair_admin',
            name: "Repair_Admin",
            component:  () => import('../views/admin/Repair_Admin')
        },
        {
            path: 'status_A',
            name: "Status_A",
            component:  () => import('../views/admin/Status/Status_A')
        },
        {
            path: 'inform_a',
            name: "Inform_A",
            component:  () => import('../views/admin/Status/Inform_A')
        },
        {
            path: 'progress_a',
            name: "Progress_A",
            component:  () => import('../views/admin/Status/Progress_A')
        },
        {
            path: 'wait_a',
            name: "Wait_A",
            component:  () => import('../views/admin/Status/Wait_A')
        },
        {
            path: 'completed_a',
            name: "Complated_A",
            component:  () => import('../views/admin/Status/Complated_A')
        },
        {
            path: 'cancel_a',
            name: "Cancel_A",
            component:  () => import('../views/admin/Status/Cancel_A')
        },
        {
            path: 'profile_a',
            name: "Profile_Admin",
            component:  () => import('../views/admin/Profile_Admin')
        },
        {
            path: 'details_a',
            name: "Details_A",
            component:  () => import('../views/admin/Status/Details_A')
        },
        {
            path: 'notification_a',
            name: "Notification_A",
            component:  () => import('../views/admin/Status/Notification_A')
        },
    ]
}
