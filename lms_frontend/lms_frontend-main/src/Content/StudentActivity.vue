<template>
    <div>

        <div class="banner col-12">
            <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image"
                style="width: 100%; height:250px;">
        </div>
        <div class="container my-5">
            <h4 class="p-0 pb-2 border-bottom border-2 activity-title">Student Activity</h4>
            <p class="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div class="row ">
                <div class="col-md-6 justify-content-center align-items-center d-flex mb-2">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
                <div class="col-md-6 justify-content-center align-items-center d-flex">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StudentActivity',
    }
</script>

<style scoped>
    p {
        text-align: justify;
        text-indent: 50px;
        word-spacing: 2px;
    }

    .activity-title {
        color: #21a7e0;
        font-family: Cambria;
    }

    .banner_img {
        height: 300px;
    }
</style>
