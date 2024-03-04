<template>
    <div class="banner col-12">
                <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image"
                    style="width: 100%; height:250px;">
            </div>
    <div class="container mt-4">
        <div v-if="post.id">
            <h4>{{ post.title }}</h4>
            <p>{{ post.description }}</p>

            <div v-for="image in post.post_images" :key="image.id">
                <div class="col-md-8 offset-md-2 mb-2">
                    <img :src="getBase64Image(image.image)" class="img-fluid rounded-0 post-img border w-100" alt="">
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            post: {},
            id: '',
        };
    },
    created() {
        this.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/posts/${this.id}`).then((res) => {
            if (res.data.code === 200 && res.data.success) {
                this.post = res.data.post;
            } else {
                // console.error('Error fetching post data:', res.data);
            }
        });
    },
    methods: {
        getBase64Image(base64Data) {
            return `data:image/jpeg;base64,${base64Data}`;
        },
    },
};
</script>
<style scoped>
.banner_img {
        height: 300px;
    }
</style>
