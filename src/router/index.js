import Vue from 'vue'
import Router from 'vue-router'
import NgoRegistrationPage2 from '../components/pages/NgoRegistrationPage2'
import guestPage from '../components/pages/guestPage'
import userHome from '../components/pages/userHome'
import pageNotFound from '../components/pages/PageNotFound.vue'
import Ongoingproject from '../components/pages/OngoingProjects.vue'
import homePage from '../components/pages/homePage.vue'



Vue.use(Router)

let router = new Router({
    mode:'history',

    routes:[
        {
            path:'/',
            name:'homeRoute',
            component:homePage
        },
        {
            path:'/login',
            name:'loginPage',
            component: () => import('../components/pages/Login')
        },
       {
        path:'/register',
        name:'registerPage',
        component: () => import('../components/pages/Register')
       },
       {
           path:'/ngo/register',
           name:'ngoRegister',
           component:() =>import('../components/pages/NgoRegistrationPage')
       },
       {
           path:'/ngo/register2',
           name:'ngoRegister2',
           component:NgoRegistrationPage2
       },
       {
           path:'/guest/donate',
           name:'guestPage',
           component:guestPage
       },
       {
           path:"/user",
           name:'userHome',
           component:userHome
       },
       {
        path:'/projects',
        name:'projects',
        component:Ongoingproject
       },
       {
           path:"*",
           name:'pagenotfound',
           component:pageNotFound
       },
      

       
        


    ]
})

export default router