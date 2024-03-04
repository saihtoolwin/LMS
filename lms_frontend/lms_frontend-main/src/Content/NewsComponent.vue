<template>
    <div>
        <div class="banner col-12">
            <img :src="require('@/assets/banner.png')" class="img-fluid banner_img" alt="banner-image"
                style="width: 100%; height:250px;">
        </div>
        <section class="container mt-3 bg-white">
            <div class="row mb-4">
                <article class="col-md-8">
                   

                    <div class="card mt-2 mb-3 rounded-0 border-0" v-for="post in posts" :key="post">
                        <div class="row g-0">
                            <div class="col-md-4 align-items-center d-flex justify-content-center">
                                <img v-if="post.featured_image" :src="getBase64Image(post.featured_image)"
                                    class="img-fluid rounded post-img border" alt="" >
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <a class="card-title post-title">{{ post . title }}</a>

                                    <p class="card-text pt-2">
                                        <i class="fa-regular fa-calendar"></i>
                                        {{ formatDate(post . created_at) }}
                                    </p>

                                    <p class="card-text">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                    <router-link :to="`/News/${post.id}`" class="btn btn-sm view-more">
                                        <span>View More</span>
                                    </router-link>


                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- By name End  -->
                </article>
                <!-- <div v-for="category in categories.categories" :key="category.id">
                    <li>
                        <router-link class="dropdown-item" :to="`/${category.name}`">{{ category . name }}</router-link>
                    </li>
                </div> -->
                <aside class="col-md-4 featured" style="max-height: 500px;min-height: 300px; overflow: auto;">
                    <div class="my-3 p-2">
                        <h5 class="border-bottom pb-2 mb-4 text-white">Featured News</h5>
                        <div class="featured-item row py-2">
                            <div class="col-1">
                                <i class="fa-solid fa-caret-right"></i>
                            </div>
                            <div class="col-11 g-0">
                                <a href="#" class="featured-link">
                                    poribus voluptates optio oluptates optio dolorum.
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                posts: [],
                name: '',
            }
        },
        created() {
            // axios.get('http://127.0.0.1:8000/api/posts').then((res) => {
            //     // console.log(res.data)
            //     this.posts = res.data.posts.data;
            // })

            this.name = this.$route.name;
            axios.get(`http://127.0.0.1:8000/api/posts/mediacategory/${this.name}`).then((res) => {
                // console.log(res.data.post)
                this.posts = res.data.post;
            })

        },
        methods: {
            formatDate(dateTimeString) {
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                };
                const date = new Date(dateTimeString);
                return date.toLocaleDateString('en-US', options);
            },
            getBase64Image(base64Data) {
                return `data:image/jpeg;base64,${base64Data}`;
            },
        },
    }
</script>

<style scoped>
    .card {
        background-color: rgba(184, 184, 184, 0.2);
    }

    /* .card:hover {
        box-shadow: 0 2px 3px 0 rgba(141, 139, 139, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
    } */

    .post-title {
        font-size: 1.3rem;
        text-decoration: none;
        color: #5353c6;
        cursor: pointer;
    }

    .post-title:hover {
        color: #3939ac;
    }

    .post-img {
        height: 90%;
        width: 90%;
        object-fit:cover;
    }

    @media screen and (min-width: 768px) and (max-width: 992px) {
        .post-img {
            height:90%;
            max-height: none;
            object-fit: cover;
            width: 100%;
        }

        card {
            height: 100px !important;
        }
    }

    .featured {
        background-color: #4B80C2;
    }

    .featured-item {
        color: #fff;
        text-decoration: none;
    }

    .featured-link {
        color: #fff;
        text-decoration: none;
        text-align: justify;
    }

    .featured-link:hover {
        color: #ff9900;
        text-decoration: none;
    }


    /* for view-more button  */
    .view-more {
        border-radius: 4px;
        background-color: #21A7E0;
        border: none;
        color: #FFFFFF;
        text-align: center;
        transition: all 0.3s;
        cursor: pointer;
    }

    .view-more span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.3s;
    }

    .view-more span:after {
        content: '\00bb';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -15px;
        transition: 0.3s;
    }

    .view-more:hover span {
        padding-right: 20px;
    }

    .view-more:hover span:after {
        opacity: 1;
        right: 0;
    }

    /* for view-more button end  */


    .banner_img {
        /* height: 300px; */
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    }
</style>
