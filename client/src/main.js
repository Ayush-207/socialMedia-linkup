// import './assets/main.css'
import './index.css';
import { createApp } from 'vue'
import App from './App.vue'
import * as Vue from 'vue';

// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]

// const router = VueRouter.createRouter({
//   history: VueRouter.createWebHashHistory(),
//   routes, 
// })

const app = Vue.createApp(App);
// app.use(router)
app.mount('#app')
