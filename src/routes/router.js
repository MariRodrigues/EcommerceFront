import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '@/pages/Home';
import Categorias from '@/pages/Categorias';
import CreateCategoria from '@/pages/CreateCategoria';

const routes = [
    {
        path: '/',
        component:Home
    },
    {
        path: '/categorias',
        component:Categorias
    },
    {
        path: '/createcategoria',
        component:CreateCategoria
    }
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router;