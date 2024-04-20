import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/main/MainPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    if (routes.every(route => route.path !== to.path)) {
        next('/')
    } else {
        next()
    }
})

export default router