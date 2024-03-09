<script setup>

    import {ref} from 'vue';
    import {store} from '../store';

    const user = ref({
        email : '',
        password : ''
    })


    async function login(){
        try {
            const resp = await fetch('http://localhost:3000/auth/login',{
                method : "POST",
                body : user.value
            })

            if(resp.status==201){

            }
        }
        catch(err){
            console.log(err.message);
        }
    }

</script>

<template>
    <div class="h-full w-full">
        <div class="w-full flex flex-row justify-end p-10"><p>Don't have an account?&nbsp;</p><a href="#" class="text-cyan-800">Sign up!</a></div>
        <div class="mt-14 w-full h-3/5 flex flex-row justify-center">
            <div class="w-4/6 h-full flex flex-col items-start">
                <div>
                    <h1 class="text-slate-950 text-3xl font-bold">Welcome</h1>
                </div> 
                <div>
                    <h1 class="text-slate-950 text-md mt-4">Login to continue</h1>
                </div> 
                <div class="flex flex-col justify-between w-full mt-10">
                    <label for="email" class="text-gray-600 text-md py-2">Email</label>
                    <input @input="(e)=>user.email = e.target.value" name="email" id="email" type="email" class="border rounded border-gray-500 text-lg p-2" required placeholder="Your Email">
                    <label for="password" class="text-gray-600 text-md pt-4 pb-2">Password</label>
                    <input @input="(e)=> user.password = e.target.value" name="password" id="password" type="password" class="border rounded border-gray-500 text-lg p-2" required placeholder="Your password">
                </div>
                <div class="w-full mt-6">
                    <button class="bg-gray-900 w-full p-2 rounded text-slate-50">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>