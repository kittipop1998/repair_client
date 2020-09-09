export default {
    path: '/app',
    component: () => import('../views/officer/OfficerTemplate'),
    children: [
        {
            path: 'status_o',
            name: "Status_O",
            component:  () => import('../views/officer/Status/Status_O')
        },
        {
            path: 'profile_o',
            name: "Profile_O",
            component:  () => import('../views/officer/Profile_O')
        },
        {
            path: 'Technician_o',
            name: "Technician_O",
            component:  () => import('../views/officer/Technician_O')
        },




    ]
}