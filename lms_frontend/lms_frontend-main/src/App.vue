<template>
    <NavComponent />
    <router-view>

    </router-view>
    <FooterComponent />
</template>

<script>
    import HomeComponent from './components/HomeComponent.vue'
    import 'bootstrap/dist/css/bootstrap.min.css'
    import NavComponent from './components/NavComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import {
        MyScrollReveal
    } from '@/assets/js/scroll_reveal';
    // import {textAnimate} from '@/assets/js/textAnimate';
    // import { lattring } from './assets/js/jquery.lettering';
    // import { fitt } from './assets/js/jquery.fittext';
    // import {textillate} from './assets/js/jquery.textillate'
    export default {
        name: 'App',
        components: {
            NavComponent,
            HomeComponent,
            FooterComponent
        },

        mounted() {
            MyScrollReveal()

        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    html,
    body {
      position: relative;
      height: 100%;
      background-color: white;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }

</style>
