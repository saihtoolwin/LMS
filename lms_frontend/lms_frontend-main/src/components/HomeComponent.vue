<template>
  <BannerSession></BannerSession>
  <StudentProgram></StudentProgram>
  <ActivityComponent></ActivityComponent>
  <StudentDiversityComponent></StudentDiversityComponent>
  <YearProgram></YearProgram>
  <CoreTeam></CoreTeam>
</template>

<script>
    import ActivityComponent from '@/content/ActivityComponent.vue';
    import StudentDiversityComponent from '@/content/StudentDiversityComponent.vue';
    import StudentProgram from '@/content/StudentProgram.vue';
    import BannerSession from '@/content/BannerSession.vue';
    import YearProgram from '@/content/YearProgram.vue';
    import CoreTeam from '@/content/CoreTeam.vue';

    // import axios from 'axios'
    export default {
        name: 'HomeComponent',
        components: {
            BannerSession,
            StudentProgram,
            ActivityComponent,
            StudentDiversityComponent,
            YearProgram,
            CoreTeam
        },
        data() {
            return {

            }
        },

    }
</script>

<style scoped></style>
