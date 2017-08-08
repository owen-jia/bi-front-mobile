import Vue from 'vue'
import VueRouter from 'vue-router'

import test from './pages/Test.vue'
import demo from './pages/Demo.vue'
import login from './pages/Login.vue'
import index from './pages/Index.vue'
import operationMonitor from './pages/OperationMonitor.vue'
import flowMonitor from './pages/FlowMonitor.vue'
import companyReport from './pages/CompanyReport.vue'

Vue.use(VueRouter)

const appRouter = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/test',
            component: test
        },{
            path: '/demo',
            component: demo
        },{
            path: '/login',
            component: login
        },{
            path: '/index',
            component: index
        },{
            path: '/companyReport',
            component: companyReport
        },{
            path: '/flowMonitor',
            component: flowMonitor
        },{
            path: '/operationMonitor',
            component: operationMonitor
        }
    ]
})

new Vue({
    router: appRouter,
    el: '#app',
    mounted: function(){
        console.log("this is init app")
    }
})