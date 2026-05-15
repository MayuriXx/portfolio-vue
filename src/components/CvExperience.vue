<script setup>
defineProps({
  experience: { type: Array, required: true },
})
</script>

<template>
  <section id="experience" class="cv-section">
    <div class="cv-section__inner">
      <h2 class="cv-section__title">Expérience</h2>

      <ol class="cv-exp__list">
        <li v-for="(job, i) in experience" :key="i" class="cv-exp__item">
          <div class="cv-exp__timeline">
            <span class="cv-exp__dot"></span>
            <span v-if="i < experience.length - 1" class="cv-exp__line"></span>
          </div>
          <div class="cv-exp__body">
            <div class="cv-exp__head">
              <div>
                <h3 class="cv-exp__role">{{ job.role }}</h3>
                <p class="cv-exp__company">{{ job.company }} · {{ job.location }}</p>
              </div>
              <span class="cv-exp__period">{{ job.period }}</span>
            </div>
            <p class="cv-exp__desc">{{ job.description }}</p>
            <ul class="cv-exp__stack">
              <li v-for="tech in job.stack" :key="tech" class="cv-exp__tag">{{ tech }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.cv-section {
  padding: var(--section-gap) 0;
}

.cv-section__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.cv-section__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-text);
  margin: 0 0 var(--space-12);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-border);
}

.cv-exp__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.cv-exp__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0 var(--space-5);
}

.cv-exp__timeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: var(--space-1);
}

.cv-exp__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  flex-shrink: 0;
}

.cv-exp__line {
  flex: 1;
  width: 1px;
  background: var(--color-border);
  margin: var(--space-2) 0;
}

.cv-exp__body {
  padding-bottom: var(--space-10);
}

.cv-exp__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

.cv-exp__role {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-1);
}

.cv-exp__company {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin: 0;
}

.cv-exp__period {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  font-family: var(--font-mono);
  white-space: nowrap;
}

.cv-exp__desc {
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-4);
  font-size: var(--text-sm);
}

.cv-exp__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  list-style: none;
  padding: 0;
  margin: 0;
}

.cv-exp__tag {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  padding: 2px var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-family: var(--font-mono);
}
</style>
