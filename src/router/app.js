export default {
    path: '/app',
    component: () => import('../views/app/AppTemplate'),
    children: [
        {
            path: '',
            name: "Repair",
            component:  () => import('../views/app/Repair')
        },
        {
            path: 'status',
            name: "Status",
            component:  () => import('../views/app/Status')
        },
        {
            path: 'profile',
            name: "Profile",
            component:  () => import('../views/app/Profile')
        },
        {
            path: 'details',
            name: "Details",
            component:  () => import('../views/app/Details')
        },
    ]
}