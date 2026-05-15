<script setup>
defineProps({
  skills: { type: Array, required: true },
})
</script>

<template>
  <section id="skills" class="cv-section">
    <div class="cv-section__inner">
      <h2 class="cv-section__title">Compétences</h2>

      <div class="cv-skills__grid">
        <div
          v-for="group in skills"
          :key="group.category"
          class="cv-skills__group"
        >
          <h3 class="cv-skills__category">{{ group.category }}</h3>
          <ul class="cv-skills__list">
            <li v-for="skill in group.items" :key="skill" class="cv-skills__item">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cv-section {
  padding: var(--section-gap) 0;
  background: var(--color-bg-surface);
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

.cv-skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-8);
}

.cv-skills__group {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
}

.cv-skills__category {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 var(--space-4);
}

.cv-skills__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.cv-skills__item {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.cv-skills__item::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: var(--color-primary);
  flex-shrink: 0;
}
</style>
