<template>
  <CvHeader
    @experience-tap="scrollTo('experience')"
    @skills-tap="scrollTo('skills')"
    @education-tap="scrollTo('education')"
    @contact-tap="scrollTo('contact')"
  />
  <main ref="mainRef">
    <CvHero @contact-tap="scrollTo('contact')" />
    <CvExperience id="experience" />
    <CvSkills id="skills" />
    <CvEducation id="education" />
    <CvContact id="contact" />
    <CvFooter />
  </main>
</template>

<script setup>
import CvHeader from './components/CvHeader.vue'
import CvHero from './components/CvHero.vue'
import CvExperience from './components/CvExperience.vue'
import CvSkills from './components/CvSkills.vue'
import CvEducation from './components/CvEducation.vue'
import CvContact from './components/CvContact.vue'
import CvFooter from './components/CvFooter.vue'

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
