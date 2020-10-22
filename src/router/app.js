export default {
    path: '/app',
    component: () => import('../views/app/AppTemplate'),
    children: [
        {
            path: '',
            name: "Repair",
            component: () => import('../views/app/Repair')
        },
        {
            path: 'status',
            name: "Status",
            component: () => import('../views/app/Status/Status')
        },
        {
            path: 'inform',
            name: "Inform",
            component: () => import('../views/app/Status/Inform')
        },
        {
            path: 'progress',
            name: "Progress",
            component: () => import('../views/app/Status/Progress')
        },
        {
            path: 'completed',
            name: "Completed",
            component: () => import('../views/app/Status/Completed')
        },
        {
            path: 'cancel',
            name: "Cancel",
            component: () => import('../views/app/Status/Cancel')
        },
        {
            path: 'profile',
            name: "Profile",
            component: () => import('../views/app/Profile')
        },
        {
            path: ":id/details",
            name: "Details",
            component: () => import('../views/app/Status/Details')
        },
        {
            path: ":id/edit",
            name: "Edit",
            component: () => import('../views/app/Status/Edit')
        },


    ]
}