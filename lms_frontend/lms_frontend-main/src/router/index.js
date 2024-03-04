import { createRouter,createWebHistory } from "vue-router";
import Home from '../components/HomeComponent'
import AboutHmi from '../content/AboutHmi'
import studentactivity from '../content/StudentActivity'
// import newsevent from '../content/NewsEvent'
import academicprogram from '../content/TwoYearProgram'
// import PostItem from '../content/PostItem'

import News from '../content/NewsComponent'
import NewsPost from '../content/NewsPost'
import Event from '../content/EventComponent'
import CareerOpportunity from '../content/CareerOpportunity'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: AboutHmi,
        },
        {
            path: '/studentactivity',
            component: studentactivity,
        },
        {
            path: '/News',
            name:'News',
            component: News,
        },
        {
            path: '/News/:id',
            component: NewsPost,
        },
        {
            path: '/Event',
            name:'Event',
            component: Event,
        },
        // {
        //     path: '/News/:id',
        //     component: NewsPost,
        // },
        {
            path: '/academicprogram',
            component: academicprogram,
        },
        {
            path: '/careeroppotunity',
            component: CareerOpportunity,
        },
    
    ]
});
export default router