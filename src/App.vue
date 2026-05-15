<!--
  App.vue — Root component

  Responsibilities:
  - Renders the full page layout: Header → Hero → sections → Footer
  - Owns the smooth-scroll utility used by child components via events
  - Each section exposes an `id` so CvHeader anchor links work correctly
-->
<template>
  <CvHeader @experience-tap="scrollTo('experience')" @skills-tap="scrollTo('skills')"
    @education-tap="scrollTo('education')" @contact-tap="scrollTo('contact')" />
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

/**
 * Smoothly scrolls the viewport to the section matching the given id.
 * Called in response to navigation events emitted by CvHeader and CvHero.
 * @param {string} id - The HTML id of the target section element
 */
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
  /* offset for the fixed 60px header */
}
</style>
