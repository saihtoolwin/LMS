<template>
  <section class="navbar_section">
    <div class="row g-0">
      <div class="noti-container" id="noti-container-id">
        <div class="noti">
          <i class="fa-solid fa-bell p-2" style="color: #dc4044"></i>
          <span class="text-white ">
            {{ alert }}
          </span>
        </div>
      </div>
      <div class="ph-container text-white">
        <div class="phone-1">09 785 806 735 ,</div>
        <div class="phone-2">09 785 806 735</div>
      </div>
    </div>


            <nav class="navbar p-0 navbar-expand-lg bg-white shadow-sm">

                <div class="container">
                    <router-link to="/" class="navbar-brand " href="#">
                        <img :src="logo" alt="" class="navimg">
                    </router-link>
                    <button class="navbar-toggler shadow-none" style="color: #4781C7; font-size: 35px;" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-lg-auto align-items-lg-center mb-2 mb-lg-0 ">
                            <li class="nav-item">
                                <router-link class="nav-link me-xl-2" to="/academicprogram"> <span
                                        class="hoverborder pb-2 "><b>Academic
                                            Program</b></span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/studentactivity" class="nav-link me-xl-2"><span
                                        class="hoverborder pb-2"><b>Student
                                            Life</b></span></router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link me-xl-2 dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span class="hoverborder pb-2"><b>Media</b></span>
                                </a>
                                <ul class="dropdown-menu rounded-0 shadow">
                                    <!-- <li><router-link class="dropdown-item" to="/newsevent">News</router-link></li> -->
                                    <!-- <li><a class="dropdown-item" href="#">Events</a></li> -->
                                    <div v-for="category in categories.categories" :key="category.id">
                                        <li>
                                            <router-link class="dropdown-item" :to="`/${category.name}`">{{ category.name }}</router-link>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link me-xl-2" to="/careeroppotunity"><span class="hoverborder pb-2"><b>Career
                                            Opportunity</b></span></router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link me-xl-2"><span
                                        class="hoverborder pb-2"><b>About</b></span></router-link>
                            </li>

                            <li class="nav-item">
                                <button
                                    class="nav-link btn text-white rounded-1 px-2 d-flex align-items-center my-sm-2 apply_btn shadow">
                                    <b>Apply Now</b>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </section>
    <!-- </div> -->
</template>

    <script>
        import axios from 'axios'
        import {
            navbar
        } from '@/assets/js/nav.js';

        export default {
            data() {
                return {
                    logo: require('@/assets/logo.png'),
                    categories: [],
                    alert:'',
                };
            },
            mounted() {
                navbar();

                axios.get('http://127.0.0.1:8000/api/categories')
                    .then((response) => {
                        this.categories = response.data;
                        // console.log(response.data);
                    })

                axios.get('http://127.0.0.1:8000/api/alert').then((response)=>{
                  // console.log(response.data.alert[0].title);
                  this.alert=response.data.alert[0].title
                })

            }
        }
    </script>

<style scoped>
    nav {
        z-index: 999999;
    }

    .nav-link {
        font-family: Cambria;
        color: #457cc0;
    }

.fixed-top {
  z-index: 99999;
}

.apply_btn {
  background-color: #21a7e0;
}

.apply_btn:hover {
  background-color: #4db8e6;
}

.topbtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 427px){
  .navbar-brand img {
    height: 65px !important;
  }
}
/* @media screen and (max-width: 427px) {
  .navimg{
   height: 20px;
  }
} */
@media screen and (max-width: 768px) {
  .nav-link {
    font-size: 18px;
  }
}

@media screen and (max-width: 1800px) {
  .nav-link {
    font-size: 20px;
  }
}

@media screen and (max-width: 1400px) {
  .nav-link {
    font-size: 18px;
  }
}

@media screen and (max-width: 1200px) {
  .nav-link {
    font-size: 14px;
  }

  .navbar-brand img {
    height: 65px;
    
  }
}

.navbar {
  transition: all 0.2s ease;
  z-index: 999999;
}

.navbar-brand img {
  height: 80px;
}
.hoverborder {
  position: relative;
}

.hoverborder::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  background: #4c81c5;
  transition: width 0.3s;
  bottom: 0;
  left: 0;
}

.hoverborder:hover::after {
  width: 100%;
}

.apply_btn {
  background-image: linear-gradient(to right, #4c81c5 50%, transparent 50%);
  background-size: 200% 100%;
  transition: background-position 0.4s;
}

.apply_btn:hover {
  background-position: -100% 0;
}

/* nav bar end  */

/* my test */
.fixed-top {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  .navbar {
    transition: top 0.3s;
  }
}
  .fixed-top.show {
    top: 0;
  }

    .fixed-top .navbar-brand img {
        height: 60px;
        transition: all ease-out 0.2s;
    }
  
    /* for noti  */

    @keyframes moveNoti {
        0% {
            left: 100%;
        }

        100% {
            left: -100%;
        }
    }

    .noti {
        white-space: nowrap;
        position: relative;
        animation: moveNoti 10s linear infinite;
    }

    .noti-container {
        padding: 0;
        margin: 0;
        width: 65%;
        height: 50px;
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        background-color: #0D0B30;
    }

    .ph-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        width: 35%;
        height: 50px;
        background-color: #0D0B30;
    }

    .phone-1,
    .phone-2 {
        margin-left: 5px;
    }

    .dropdown-item {
        color: #457cc0;
    }


    .navbar-nav .nav-item.dropdown .dropdown-menu {
        transform-origin: top;
        transform: scaleY(0);
        transition: transform 0.3s ease-in-out;
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .navbar-nav .nav-item.dropdown:hover .dropdown-menu {
        transform: scaleY(1);
        display: block;
        animation: fadeInDown 0.3s ease forwards;
    }
</style>
