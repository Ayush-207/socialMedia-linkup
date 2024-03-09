
<script setup>
import {ref} from 'vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

defineProps({
    loginPage : String
});

const checkLogin = () => {
    return loginPage=="login";
}

</script>

<template>
    <div class="h-screen w-screen flex flex-row">
        <div class="h-screen w-3/6 bg-gray-900 flex flex-row justify-center items-center">
            <div class="border-solid border-2"><h1 class="text-gray-100 text-4xl p-4">Link Up</h1></div>
        </div>
        <div class="h-screen w-3/6 bg-slate-50">
            <div v-if="checkLogin">
                <Login/>
            </div>
            <div v-else>
                <Register/>
            </div>
        </div>
    </div>
</template>
