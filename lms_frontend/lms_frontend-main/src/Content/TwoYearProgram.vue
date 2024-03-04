<template>
    <div>
        <div class="banner col-12">
            <img :src="require('@/assets/banner.png')" class="img-fluid" alt="banner-image" style="width: 100%; height:250px;">
        </div>
        <div class="container my-5">
            <h4 class="p-0 pb-2 border-bottom border-2 activity-title">
                Two Year Software Engineering Certificate Program
            </h4>
            <div class="row my-5">
                <div class="col-md-6 justify-content-center align-items-center d-flex my-2">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
                <div class="col-md-6 justify-content-center align-items-center d-flex">
                    <img :src="require('@/assets/image/design2.jpg')" alt="" class="img-fluid banner_img">
                </div>
            </div>
            <p class="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a
                type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p class="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a
                type specimen
                book.
            </p>
            <p class="my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard
                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a
                type specimen
                book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially
                unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                passages, and more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

        </div>

        <div class="container mb-5">
            <div class=" mb-1" id="accordionExample">
                <button class="accordion px-4 py-3">
                    Section 1
                    <i class="fa-solid fa-plus float-end accordion-icon mt-1"></i>
                </button>
                <div class="panel">
                    <p class="pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex
                        ea commodo
                        consequat.
                    </p>
                </div>
            </div>
            <div class=" mb-1" id="accordionExample">
                <button class="accordion px-4 py-3">
                    Section 2
                    <i class="fa-solid fa-plus float-end accordion-icon mt-1"></i>
                </button>
                <div class="panel">
                    <p class="pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex
                        ea commodo
                        consequat.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        accordion
    } from '@/assets/js/accordion.js';
    export default {
        data() {
            return {
                
            };
        },
        mounted() {
            accordion()
        }
    }
</script>

<style scoped>
    p {
        text-align: justify;
        /* text-indent: 50px; */
        word-spacing: 2px;
    }

    .activity-title {
        color: #21a7e0;
        font-family: Cambria;
    }

    .banner_img {
        height: 300px;
    }

    /* accordion */
    .accordion {
        background-color: #4B80C2;
        color: #fff;
        cursor: pointer;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        transition: 0.4s;
    }

    .active,
    .accordion:hover {
        background-color: #133d70e7;
    }

    .panel {
        padding: 0 40px;
        background-color: white;
        max-height: 0;
        overflow: hidden;
        border: 1px solid #133d70de;
        transition: max-height 0.2s ease-out;
    }

    .container p{
        text-indent: 50px;
    }
</style>
