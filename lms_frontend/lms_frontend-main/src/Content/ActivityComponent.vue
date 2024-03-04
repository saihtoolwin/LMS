<template>
 <div>
  
  <section class="activity_section">
    <div class="container-fluid activities">
      <div>
        <p class="text-center activities-text display-1 cam-font">Our Activities</p>
      </div>
      <div class="row ">
        <div class="col-12 p-0">
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/1.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/2.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/3.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/4.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/5.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/7.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/8.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/11.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/10.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/12.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/13.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/14.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/15.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/16.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/17.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/18.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/19.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/20.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
          <div class="row g-0 ativity-image-wrapper" id="activityWrapper">
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/21.jpg')" alt="" :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/22.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/23.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/24.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/25.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
            <div class="col p-0">
              <div class="over-lay"></div>
              <img :src="require('@/assets/image/activity/27.jpg')" alt=""  :style="{ width:'100%', height:'100%'}" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 </div>
</template>

<script>
// import Design1 from '../assets/image/Design1.jpg';
    export default {
        name:'ActivityComponent',
        data()
        {
            return{

            }
        }
        
    }
</script>

<style scoped>
/* activity_section */

.activities {
      position: relative;
      background-color: transparent;
    }

    .activities-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(232, 229, 229);
      padding-bottom: 10px;
      border-bottom: 8px solid #457cc0;
      z-index: 9;
      
    }

    .activities-seemore {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(232, 229, 229);
      font-size: 40px;

      z-index: 9999;
      cursor: pointer;
    }

    .activities-seemore:hover {
      color: #73c2e3;
    }

    .ativity-image-wrapper .col {
      position: relative;
      height: 150px;
    }

    .ativity-image-wrapper .col img {
      width: 100%;
       object-fit: cover;
    
    }

    .ativity-image-wrapper .col .over-lay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #333;
      opacity: 0.5;
      transition: 0.2s ease-in-out;
    }

    .ativity-image-wrapper .col .over-lay:hover {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background-color: white;
    }

    @media screen and (max-width: 576px) {
      .activities-text{
        font-size: 25px !important;
      }
      .ativity-image-wrapper .col:nth-child(5) {
        display: none;
      }
      
      .ativity-image-wrapper:nth-child(2) {
        display: none;
      }
    }

    /* medium size */
    @media screen and (max-width: 770px) {
      .activities-text{
        font-size: 40px;
      }
      #student_diversity .col-md-4 {
        margin-top: 20px;
      }

      .ativity-image-wrapper:nth-child(2) {
        display: none;
      }


      .ativity-image-wrapper .col:nth-child(6) {
        display: none;
      }
/* 
      .dotted_container img {
        height: 380px;
      } */
    }

    @media screen and (max-width: 990px) {
      /* .navbar .container-fluid {
        background-color: #ffffff;
      } */

      .ativity-image-wrapper .col:nth-child(6) {
        display: none;
      }

    }
</style>