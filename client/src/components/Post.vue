<script setup>

import {ref} from 'vue';
const post = ref({
    username : '',
    date : '',
    caption : '',
    imageUrl : '',
    likes : 0
});

</script>

<template>
    <div class="w-full h-2/3 bg-slate-50 rounded-md m-4">
                <div class="w-full h-20 bg-neutral-900 rounded-t flex flex-col justify-start p-4">
                    <p class="text-slate-50 text-2xl">Username</p>
                    <p class="text-slate-50 text-md">Date</p>
                </div>
                <div class="w-full h-72 bg-orange-300"></div>
                <div class="flex flex-row p-4">
                    <button>
                        <img src="../assets/heart.png">
                    </button>
                </div>
                <div class="w-full px-4 pb-4">
                    <p class="font-bold">{{ post.username }}ayushg2007</p><p>{{ post.caption }};dslgjds;lkgj;dslkgjdl;kgj;lsdkgjldkjgldkjglkdjgkdkgdk </p>
                </div>
            </div>
</template>