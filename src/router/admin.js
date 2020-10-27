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
            path: 'status_a',
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
            path: 'user_admin',
            name: "User_Admin",
            component:  () => import('../views/admin/User_Admin')
        },
        {
            path: 'student_admin',
            name: "Student_Admin",
            component:  () => import('../views/admin/Student_Admin')
        },
        {
            path: 'manager_admin',
            name: "Manager_Admin",
            component:  () => import('../views/admin/Manager_Admin')
        },
        {
            path: 'user_admin',
            name: "User_Admin",
            component:  () => import('../views/admin/User_Admin')
        },
        {
            path: 'statistic_a',
            name: "Statistic_A",
            component:  () => import('../views/admin/Statistic_A')
        },
        {
            path: 'id/details_a',
            name: "Details_A",
            component:  () => import('../views/admin/Status/Details_A')
        },
        {
            path: 'id/editProfile_a',
            name: "EditProfile_A",
            component:  () => import('../views/admin/Profile_A/EditProfile_A')
        },
        {
            path: 'id/createProfile_a',
            name: "CreateProfile_A",
            component:  () => import('../views/admin/Profile_A/CreateProfile_A')
        },
        {
            path: 'id/edit_a',
            name: "Edit_A",
            component:  () => import('../views/admin/Status/Edit_A')
        },
    ]
}
