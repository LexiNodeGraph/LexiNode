import {createWebHistory, createRouter} from "vue-router";

const routes = [{
    path: "/artigos",
    name: "artigos",
    component: () => import("./views/Artigos.vue")
    },
    {
    path:"/",
    name: "home",
    component:() => import("./views/Grafico.vue")
    },
    {
        path:"/login",
        name: "login",
        component:() => import("./views/Login.vue")
        },
]
    

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

