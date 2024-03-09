<script setup>
import Post from '../components/Post.vue';
import UserWidget from '@/components/UserWidget.vue';
import CreatePost from '@/components/CreatePost.vue';
import FollowersWidget from '@/components/FollowersWidget.vue';
import FollowingWidget from '@/components/FollowingWidget.vue'
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <Navbar/>
    <div class="w-screen min-h-screen bg-neutral-800 grid grid-cols-7 gap-12 p-10">
        <div class="col-span-2 flex flex-col w-full">
           <UserWidget/>
        </div>
        <div class="col-span-3 flex flex-col justify-between items-center w-full">
            <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        <div class="col-span-2 flex flex-col w-full">
           <FollowersWidget/>
            <FollowingWidget/>
        </div>
    </div>
</template>