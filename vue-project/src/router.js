import { createRouter, createWebHashHistory } from "vue-router";
import home from './components/home.vue';
import shop from './components/shop.vue';
import singlePROD from './components/singlePROD.vue';
import cart from './components/cart.vue';
import checkout from './components/checkout.vue'

export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/home', component: home, alias: '/'},
        {path: '/shop', component: shop },       
        {path: '/singlePROD', component: singlePROD },
        {path: '/cart', component: cart },
        {path: '/checkout', component: checkout }
    ]
})

