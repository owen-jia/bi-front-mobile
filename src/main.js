import Vue from 'vue'
import VueRouter from 'vue-router'

import test from './pages/Test.vue'
import demo from './pages/Demo.vue'
import login from './pages/Login.vue'
import index from './pages/Index.vue'

Vue.use(VueRouter)

const appRouter = new VueRouter({
    linkActiveClass: 'active',
    routes: [
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
        }
    ]
})

new Vue({
    router: appRouter,
    el: '#app',
    mounted: function(){
        console.log("this is init app")
    }
});

appRouter.push("/login");