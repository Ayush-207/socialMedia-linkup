<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'
const stepno = ref(1);
const user = ref({
    firstname : '',
    lastname : '',
    username: '',
    email : '',
    password : ''
});

const router = useRouter();

async function register(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname',user.value.firstname);
    formData.append('lastname',user.value.lastname);
    formData.append('username',user.value.username);
    formData.append('email',user.value.email);
    formData.append('password',user.value.password);

    try {
        const resp = await fetch('http://localhost:3000/auth/register', {
        method : "POST",
        body : formData
    });

        if(resp.status==201){
            router.push('/auth/login');
        }
    }
    catch(err){
        console.log(err.message);
    }
    
}


const back = () => {
    if(stepno.value==2){
        stepno.value--;
    }
}
</script>

<template>
    <div class="h-full w-full">
        <div class="w-full flex flex-row justify-between p-10">
            <div>
                <a @click="back" href="#" class="text-md text-gray-500">&lt; Back</a>
            </div>
            <div>
                <!-- <p class="text-sm text-gray-500">Step {{ stepno }} of 2</p> -->
                <p class="text-sm text-gray-500 text-end font-bold">Sign up</p>
            </div>
        </div>
        <div v-if="stepno==1" class="w-full h-3/5 flex flex-row justify-center">
            <div class="w-4/6 h-full flex flex-col items-start">
                <form>
                    <div>
                        <h1 class="text-slate-950 text-3xl font-bold">Register your account</h1>
                    </div> 
                    <div>
                        <h1 class="text-slate-950 text-md mt-4">Fill the details below to register</h1>
                    </div> 
                    <div class="flex flex-col justify-between w-full mt-4">
                        <div class="flex flex-row w-full justify-between">
                            <div class="w-45">
                                <label for="firstname" class="text-gray-600 text-md py-2">First Name</label>
                                <input @input="(e)=>user.firstname = e.target.value" name="firstname" id="firstname" class="border rounded border-gray-500 text-lg p-2 max-w-full" required placeholder="First name">
                            </div>   
                            <div class="w-45">
                                <label for="lastname" class="text-gray-600 text-md py-2">Last Name</label>
                                <input @input="(e)=>user.lastname = e.target.value" name="lastname" id="lastname"  class="border rounded border-gray-500 text-lg p-2 max-w-full" required placeholder="Last Name">
                            </div>                        
                        </div>
                        <label for="username" class="text-gray-600 text-md py-2">Username</label>
                        <input @input="(e)=>user.username = e.target.value" name="username" id="username" class="border rounded border-gray-500 text-lg p-2" required placeholder="Your Username">
                        <label for="email" class="text-gray-600 text-md py-2">Email</label>
                        <input @input="(e)=>user.email = e.target.value" name="email" id="email" type="email" class="border rounded border-gray-500 text-lg p-2" required placeholder="Your Email">
                        <label for="password" class="text-gray-600 text-md pt-4 pb-2">Password</label>
                        <input @input="(e) => user.password = e.target.value " name="password" id="password" type="password" class="border rounded border-gray-500 text-lg p-2" required placeholder="Your password">
                    </div>
                    <div class="w-full mt-6">
                        <button @click="register" type="submit" class="bg-gray-900 w-full p-2 rounded text-slate-50">Register</button>
                    </div>
                </form>
            </div>
        </div>
        <!-- <div v-else  class="mt-14 w-full h-3/5 flex flex-row justify-center">
            <div class="w-4/6 h-full flex flex-col items-start">
                <div>
                    <h1 class="text-slate-950 text-3xl">Check your Mail</h1>
                </div> 
                <div>
                    <h1 class="text-slate-950 text-md mt-4">We,ve sent a 6-digit confirmation code to {{ user.email }}. Make sure you enter correct code.</h1>
                </div> 
                <div class="mt-10">
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                    <label class="p-2 text-xl">-</label>
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                    <label class="p-2 text-xl">-</label>
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                    <label class="p-2 text-xl">-</label>
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                    <label class="p-2 text-xl">-</label>
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                    <label class="p-2 text-xl">-</label>
                    <input class="w-10 border-2 border-gray-800 h-10 rounded">
                </div>
                <div class="w-full mt-6">
                    <button class="bg-gray-900 w-full p-2 rounded text-slate-50">Verify</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
.w-45{
    width : 48%;
}
</style>