<template>
  <div>
    <section class="years_program">
      <div class="">
        <div class="row g-0 justify-content-center bg-white">
          <div
            class="first-second-year mt-5 btn-group col-lg-4 col-md-6 col-sm-8 col-10"
            role="group"
          >
            <button
              type="button"
              class="btn me-0 btn-lg d-block border-0 rounded-end rounded-pill shadow-none first-year border blue"
            >
              First Year
            </button>
            <button
              type="button"
              class="btn me-0 btn-lg d-block border-0 rounded-start rounded-pill shadow-none second-year border blue_dark"
            >
              Second Year
            </button>
          </div>
        </div>
        <div class="text-center first-head header-color curriculum cam-font">
          OUR CURRICULUM
        </div>
        <div class="row g-0 it">
          <div class="col-2 list">
            <div class="circle first-circle">1</div>
            <div class="doted"></div>
            <div class="circle">2</div>
            <div class="doted"></div>
            <div class="circle">3</div>
          </div>
          <div class="col-10 it-card-container year1 cam-font mb-3" >
            <div v-for="curriculum in curriculums" :key="curriculum">
              <div class="it-card revel-right " v-if="curriculum.year_id == 1">
              <img class="col-2" :src="'data:image/png;base64,' + curriculum.image" alt="" />
              <div class="col  it-card-content">
                <div class="it-card-header  first-head">
                  {{ curriculum.title }}
                </div> 
                <div class="it-card-about ">
                  <p class=" mb-0" >{{ curriculum.description }}</p>
                </div>
              </div>
            </div>
            </div>
            
            <!-- <div class="it-card revel-right">
              <img :src="require('@/assets/image/teacher.jpg')" alt="" />
              <div class="it-card-content">
                <div class="it-card-header first-head">IT Passport</div>
                <div class="it-card-about">
                  Fundamental Strategy, Management, Technology.
                </div>
              </div>
            </div>
            <div class="it-card revel-right mb-5">
              <img :src="require('@/assets/image/teacher.jpg')" alt="" />
              <div class="it-card-content">
                <div class="it-card-header first-head">IT Passport</div>
                <div class="it-card-about">
                  Fundamental Strategy, Management, Technology.
                </div>
              </div>
            </div> -->
          </div>
          <div class="col-10 it-card-container year2 d-none cam-font mb-3">
            <div v-for="curriculum in curriculums" :key="curriculum">
              <div class="it-card revel-right" v-if="curriculum.year_id == 2">
              <img class="col-2" :src="'data:image/png;base64,' + curriculum.image" alt="" />
              <div class="col it-card-content">
                <div class="it-card-header first-head">
                  {{ curriculum.title }}
                </div>
                <div class="it-card-about ">
                  {{ curriculum.description }}
                </div>
              </div>
            </div>
            </div>
            <!-- <div class="it-card revel-right">
              <img :src="require('@/assets/image/teacher.jpg')" alt="" />
              <div class="it-card-content">
                <div class="it-card-header first-head">IT</div>
                <div class="it-card-about">
                  Fundamental Strategy, Management, Technology.
                </div>
              </div>
            </div>
            <div class="it-card revel-right mb-5">
              <img :src="require('@/assets/image/teacher.jpg')" alt="" />
              <div class="it-card-content">
                <div class="it-card-header first-head">IT</div>
                <div class="it-card-about">
                  Fundamental Strategy, Management, Technology.
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { YearProgram } from "@/assets/js/Curriculum";
import axios from "axios";
export default {
  name: "YearProgram",
  mounted() {
    YearProgram();
  },
  data() {
    return {
      curriculums: [],
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/curriculum").then((response) => {
      this.curriculums = response.data.curriculums;
      console.log(this.curriculums);
    });
  },
};
</script>

<style scoped>
/*  */
.blue {
  background-color: #20a7df;
}

.blue_dark {
  background-color: #4c81c5;
}
.title {
  letter-spacing: 2px;
}
.first-second-year .btn {
  color: #fff;
  line-height: 40px;
}
.first-second-year .btn:hover {
  color: #e6ec71;
  background-color: #2757b8;
}
.text-center .fa-solid {
  color: #4781c7;
  font-size: 58px;
  margin-bottom: 20px;
}
.header-color {
  color: #09a2f0;
}
section {
  background-color: #d3dfef;
}

.first-head {
  font-size: 25px;
  font-weight: 500;
}

.teacher-second-head {
  font-size: 22px;
  font-weight: 400;
}
/* 
.teacher-card {
  border: 1px solid rgb(210, 207, 207);
  border-radius: 15px;
  width: 180px;
  height: 230px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */

.teacher-img {
  border-radius: 15px;
  width: 130px;
  height: 150px;
  border-radius: 15px;
  margin-top: 13px;
  object-fit: cover;
}



.teacher-job {
  font-size: 14px;
  font-weight: 500;
  margin: 0px 8px;
}

.circle {
  margin-top: 3px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #024561;
  color: #dc413c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 38px;
  /* box-shadow: 0 0 128px 0 #024561, 0 32px 64px -48px #024561; */
}

.doted {
  background-image: repeating-linear-gradient(
    to bottom,
    #6f717d,
    #6f717d 7px,
    transparent 3px,
    transparent 15px
  );

  height: 150px;
  width: 2px;
  margin-top: 3px;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.curriculum {
  margin-top: 20px;
  margin-bottom: 10px;
  /* margin-left: 33px; */
  letter-spacing: 1px;
  font-weight: bold;
}

.it {
  background-color: #d3dfef;
  padding-right: 150px;
  overflow-x: hidden;
}

.it-card {
  background-color: white;
  border: 1px solid rgb(210, 207, 207);
  box-shadow: 0 0 128px 0 #73c1e356, 0 32px 64px -48px #73b4d050;
  border-radius: 15px;
  height: 200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
}

.it-card img {
  border-radius: 15px;
  width: 130px;
  height: 150px;
  margin-left: 20px;
  border-radius: 15px;
  /* object-fit: cover; */
}

.it-card-content {
  margin-left: 50px;
  flex-direction: column;
}

.it-card-header {
  color: #064A66;
  margin-bottom: 15px;
}

.it-card-about {
  margin-bottom: 50px;
  /* margin-left: 8px; */
  color: #002060;
  display: flex;
  flex-wrap: wrap;
  /* max-height: 3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; */
}

.first-second-year {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

@media screen and (max-width: 999px) {
  .it {
    margin-left: 10px;
    padding-right: 50px;
  }
}
@media screen and (max-width: 990px) {
  /* .hmi-nav-link{
        margin-right: 0;
        margin-left: 30px;
        width: auto;
    }
    .nav-button{
        margin-left: 30px;
        margin-bottom: 20px;
    } */
  .it {
    margin-left: 0px;
    padding-right: 10px;
  }
  .it-card-content {
    margin-left: 30px;
  }
  .curriculum {
    margin-left: 0px;
  }
}

@media screen and (max-width: 768px) {
  .it {
    padding-left: 80px;
    padding-right: 0px;
    margin: 0;
  }

  .it-card-about {
    width: 300px;
  }
  .it-card-header{
    margin-bottom: 0px;
  }

  .list {
    display: none;
  }
}
@media screen and (max-width: 678px) {
  .it-card-about {
    width: 230px;
  }
}
@media screen and (max-width: 574px) {
  .it-card-about {
    width: 220px;
  }
}

@media screen and (max-width: 577px) {
  .it {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center;
    padding-left: 0px;
    padding-right: 0px; */
    margin: 0;
  }
}
@media screen and (max-width: 562px) {
  .it-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 33px; */
  }
  .it-card {
    width: 270px;
    justify-content: center;
    height: 400px;
    align-items: center;
    margin-right: 20px;
  }
  .it-card-header {
    align-content: center;
    align-items: center;
    /* margin-left: 25px; */
  }
  .it-card img {
    width: 230px;
    height: 170px;
    margin-left: 0;
    margin-top: 15px;
    /* object-fit: none; */
  }
}
@media screen and (max-width: 497px) {
  .it-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin-left: 33px; */
  }
  .it-card {
    width: 270px;
    justify-content: center;
    height: 400px;
    align-items: center;
    margin-right: 20px;
  }
  .it-card-header {
    align-content: center;
    align-items: center;
    /* margin-left: 25px; */
  }
  .it-card img {
    margin-left: 0;
    margin-top: 15px;
  }
}
</style>
