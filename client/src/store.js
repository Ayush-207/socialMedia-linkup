import {ref} from 'vue';

export const store = ref({
    username : '',
    posts : [],
    followers : [],
    following :[],
    token : '',
    setToken(value) {
        this.token = value;
    },
    setUsername(value){
        this.username = value;
    },
    updatePosts(posts){
        this.posts = posts;
    }
});

