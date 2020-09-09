import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Recommend from '@/views/Recommend'
import Contact from '@/views/Contact'
import Template from "../views/Template";
import app from "./app";
import manager from "./manager";
import officer from "./officer";

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
                manager,
                officer



            ]
        },

    ]
})