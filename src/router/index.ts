import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Slides from "../views/Slides.vue"



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/slides'
    },
    {
        path: '/slides',
        component: Slides,
    }
]

// https://vitejs.dev/guide/env-and-mode.html
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router