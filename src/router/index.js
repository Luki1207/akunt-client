import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'transcation.index',
        component: () => import("../views/transaction/index.vue")
    },
    {
        path: '/create',
        name: 'transcation.create',
        component: () => import("../views/transaction/create.vue")
    },
    {
        path: '/edit/:id',
        name: 'transcation.edit',
        component: () => import("../views/transaction/edit.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;