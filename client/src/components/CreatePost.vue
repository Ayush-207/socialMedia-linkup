<script setup>
    import {ref} from 'vue';
    import {store} from '../store';
    const post = ref({
        caption : '',
        imageUrl : '',
        likes : 0,
        username : store.value.username,
        date : ''
    });

    post.value.date = new Date().toDateString();

    async function createPost(){
        try{
            const resp = await fetch('http://localhost:3000/post/createPost', {
                method : "POST",
                body : post.value
            });  

            console.log(resp);
        }
        catch(err){
            console.log(err.message);
        }
        
    }

</script>

<template>
    <div class="w-full bg-neutral-900 m-4 rounded">
        <div class="grid grid-cols-5 gap-10 mt-8 mx-4">
            <div class="col-span-1 bg-slate-600 rounded-full">
                <img>
            </div>
            <input @input="(e)=>post.caption = e.target.value" class="col-span-4 text-slate-100 bg-neutral-700 rounded-full flex flex-row justify-start items-center px-8 py-4 appearance-none focus:outline-none" placeholder="What's on your mind..."></input>
        </div>
        <div class="h-2 w-full flex flex-row justify-center items-center mt-4">
            <div class="h-px w-4/5 bg-neutral-600"></div>
        </div>
        <div class="flex flex-row justify-evenly items-center p-4">
            <input @input="(e)=>post.imageUrl = e.target.value" class=" mt-1 col-span-4 text-slate-100 bg-neutral-700 rounded flex flex-row justify-start items-center px-8 py-1 appearance-none focus:outline-none" placeholder="Enter image url">                    </input>
            <button @click = "createPost" class="bg-zinc-500 px-2 py-1 rounded text-slate-950">Create</button>
        </div>
    </div>
</template>