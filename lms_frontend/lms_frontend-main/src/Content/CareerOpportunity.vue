<template>
    <div>
        <div v-for="post in posts" :key="post.id" class="col-md-8 offset-md-2">
            <div class="card my-4 rounded-1">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title fs-5">{{ post.title }}</h5>
                        <div class="card-subtitle mb-2 text-body-secondary">
                            <i class="fa-solid fa-calendar-days"></i>
                            DeadLine | {{ formatDate(post.Deadline) }}
                        </div>
                    </div>
                    <div>
                        <p class="card-text m-0 g-0" id="ptext_{{ post.id }}">
                            {{ isExpanded(post.id) ? post.description : truncateText(post.description, 200) }}
                        </p>
                        <span class="text-primary" @click="toggleExpansion(post.id)" id="seeMoreBtn">
                            &nbsp;{{ isExpanded(post.id) ? 'hidden...' : 'see more...' }}
                        </span>
                    </div>
                    <div>
                        <button class="btn btn-sm border-0">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <button class="btn btn-sm border-0">
                            <i class="fa-solid fa-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            expandedPosts: [],
            posts: [],
        };
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/careeropportunity').then((res) => {
            this.posts = res.data.career;
            this.expandedPosts = new Array(this.posts.length).fill(false);
        });
    },
    methods: {
        formatDate(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            };
            const date = new Date(dateTimeString);
            return date.toLocaleDateString('en-US', options);
        },
        toggleExpansion(postId) {
            this.expandedPosts[postId] = !this.expandedPosts[postId];
        },
        isExpanded(postId) {
            return this.expandedPosts[postId];
        },
        truncateText(text, limit) {
            return text.length > limit ? text.slice(0, limit) + '...' : text;
        },
    },
};
</script>

<style scoped>
.hidden {
    display: none;
}

#seeMoreBtn {
    cursor: pointer;
}

.btn {
    font-size: 16px;
    transition: font-size 0.2s, transform 0.2s;
}

.fa-heart:hover,
.fa-share:hover {
    color: red;
    font-size: 19px;
    transform: scale(1.1);
    transition: ease-in all 0.1s;
}
</style>
