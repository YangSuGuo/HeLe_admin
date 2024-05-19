import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: Login
    }
]

const router =  createRouter({
  history: createWebHistory(),
  routes
})

export default router
