import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Recommend from '@/views/Recommend'
import Contact from '@/views/Contact'
import Template from "../views/Template";
import app from "./app";
import manager from "./manager";
<<<<<<< HEAD
import officer from "./officer";
=======
>>>>>>> a1cd60effd289b6a21d07b842959481e673219a2

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '',
            component: Template,
            children: [
                {
                    path: '',
                    name: "Home",
                    component: Home,
                },
                {
                    path: '/login',
                    name: "Login",
                    component: Login
                },
                {
                    path: '/recommend',
                    name: "Recommend",
                    component: Recommend
                },
                {
                    path: '/contact',
                    name: "Contact",
                    component: Contact
                },
                app,
<<<<<<< HEAD
                manager,
                officer
=======
                manager
>>>>>>> a1cd60effd289b6a21d07b842959481e673219a2



            ]
        },

    ]
})