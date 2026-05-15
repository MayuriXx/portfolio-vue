<script setup>
import cv from './data/cv.json'
import CvHeader     from './components/CvHeader.vue'
import CvHero       from './components/CvHero.vue'
import CvExperience from './components/CvExperience.vue'
import CvSkills     from './components/CvSkills.vue'
import CvEducation  from './components/CvEducation.vue'
import CvContact    from './components/CvContact.vue'
import CvFooter     from './components/CvFooter.vue'
</script>

<template>
  <CvHeader     :identity="cv.identity" />
  <main>
    <CvHero       :identity="cv.identity" :contact="cv.contact" :summary="cv.summary" />
    <CvExperience :experience="cv.experience" />
    <CvSkills     :skills="cv.skills" />
    <CvEducation  :education="cv.education" />
    <CvContact    :identity="cv.identity" :contact="cv.contact" />
  </main>
  <CvFooter     :identity="cv.identity" />
</template>
