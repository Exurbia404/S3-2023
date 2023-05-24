import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Vuetify from 'vuetify'

import Home from './components/HomePage'
import Brand from './components/BrandPage'
import Product from './components/ProductPage'

import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: Home },
        { path: '/brands', component: Brand},
        { path: '/products', component: Product}
    ]
});

const app = createApp(App)

app.use(Vuetify)
app.use(router)

app.mount('#app')