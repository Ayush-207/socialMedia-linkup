<script setup>
import Navbar from './components/Navbar.vue';
import Auth from './views/Auth.vue';
import Home from './views/Home.vue';
import {ref} from 'vue';
const flag = ref(false);
</script>

<template>
  <!-- <Auth loginPage="register"/> -->
  <Home/>
</template>


