<template>
  <section class="core_team_section mb-3">
    <div class="container cam-font ">
      <h3 class="text-center first-head header-color mt-3"><b :style="{color:'#21A7E0'}">OUR CORE TEAM</b></h3>
      <h4 class="text-center teacher-second-head">
        Professional Lectures And Industry Experts
      </h4>
    <swiper :autoplay="{ delay: 5000, disableOnInteraction: false}" :init="false" loop
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      '@0.00': { slidesPerView: 1, spaceBetween: 10 },
      '@0.725': { slidesPerView: 2, spaceBetween: 30 },
      '@0.997': { slidesPerView: 3, spaceBetween: 20 },
      '@1.19': { slidesPerView: 4, spaceBetween: 20 },
      '@1.24': { slidesPerView: 4, spaceBetween: 10 },
      '@1.50': { slidesPerView: 5, spaceBetween: 20 },
    }"
    :modules="modules"
    class="mySwiper  "
    
    style="height:320px;align-items:top"
  >
  
    <swiper-slide  v-for="teacher in teachers" :key="teacher.id" >
        <div class="card" style="height:240px; width:200px">
          <img class="card-img-top teacher_img" :src="'data:image/png;base64,' + teacher.image" alt="Card image cap">
          <div class="card-body p-0">
            <h6 class="card-title">{{ teacher.name }}</h6>
            <p class="card-text">{{ teacher.role }}</p>
          </div>
        </div>
    </swiper-slide>
    
    <!-- <swiper-slide  >
      <div class="card" style="height:240px; width:200px">
        <img class="card-img-top teacher_img" :src="require('@/assets/image/teacher.jpg')" alt="Card image cap" >
        <div class="card-body p-0">
          <h6 class="card-title">Sai Htoo Lwin 1</h6>
          <p class="card-text ">Japan Teacher</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide  >
      <div class="card" style="height:240px; width:200px">
        <img class="card-img-top teacher_img" :src="require('@/assets/image/teacher.jpg')" alt="Card image cap" >
        <div class="card-body p-0">
          <h6 class="card-title">Sai Htoo Lwin 1</h6>
          <p class="card-text ">Japan Teacher</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide  >
      <div class="card" style="height:240px; width:200px">
        <img class="card-img-top teacher_img" :src="require('@/assets/image/teacher.jpg')" alt="Card image cap" >
        <div class="card-body p-0">
          <h6 class="card-title">Sai Htoo Lwin 1</h6>
          <p class="card-text ">Japan Teacher</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide  >
      <div class="card" style="height:240px; width:200px">
        <img class="card-img-top teacher_img" :src="require('@/assets/image/teacher.jpg')" alt="Card image cap" >
        <div class="card-body p-0">
          <h6 class="card-title">Sai Htoo Lwin 1</h6>
          <p class="card-text ">Japan Teacher</p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide  >
      <div class="card" style="height:240px; width:200px">
        <img class="card-img-top teacher_img" :src="require('@/assets/image/teacher.jpg')" alt="Card image cap" >
        <div class="card-body p-0">
          <h6 class="card-title">Sai Htoo Lwin 1</h6>
          <p class="card-text ">Japan Teacher</p>
        </div>
      </div>
    </swiper-slide> -->
    
  </swiper>
      
    </div>
    
  </section>


</template>

<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import axios from 'axios';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data(){
    return{
      teachers:[],
    }
  },
  setup() {
    return {
      modules: [Pagination,Autoplay],
      
    };
  },
  created(){
    axios.get('http://127.0.0.1:8000/api/coreteam').then((response)=>{
      this.teachers=response.data.coreteam
    })
  }
};
</script>

<style scoped>

  .card-img-top {
    padding: 20px 20px 0px 20px;
    height: 180px;
    
  }
  .teacher_img {
    
    border-radius: 20px;
  }
  .card-title{
    margin-top: 8px;
    font-weight:800;
    color:#0DCAF0;
    font: bold;
  }

body {
  
  
  color: #000;
  padding: 0;
}

/* .swiper {
  width: 100%;
  background-color: #4781C7;
} */

.swiper-slide {
  text-align: center;
  /* font-size: 18px; */
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  margin-top: 20px;
}


    .title {
        letter-spacing: 2px;
    }

    .text-center .fa-solid {
        color: #4781C7;
        font-size: 58px;
        margin-bottom: 20px;
    }



</style>
