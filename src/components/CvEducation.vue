<script setup>
defineProps({
  education: { type: Array, required: true },
})
</script>

<template>
  <section id="education" class="cv-section">
    <div class="cv-section__inner">
      <h2 class="cv-section__title">Formation</h2>

      <div class="cv-edu__list">
        <div
          v-for="(edu, i) in education"
          :key="i"
          class="cv-edu__item"
        >
          <div class="cv-edu__head">
            <div>
              <h3 class="cv-edu__degree">{{ edu.degree }}</h3>
              <p class="cv-edu__school">{{ edu.school }}</p>
            </div>
            <span class="cv-edu__period">{{ edu.period }}</span>
          </div>
          <p class="cv-edu__desc">{{ edu.description }}</p>
        </div>
      </div>
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

.cv-edu__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.cv-edu__item {
  background: var(--color-bg-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: border-color var(--transition-fast);
}

.cv-edu__item:hover {
  border-color: var(--color-border-light);
}

.cv-edu__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
  flex-wrap: wrap;
  margin-bottom: var(--space-3);
}

.cv-edu__degree {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  margin: 0 0 var(--space-1);
}

.cv-edu__school {
  font-size: var(--text-sm);
  color: var(--color-primary);
  margin: 0;
}

.cv-edu__period {
  font-size: var(--text-xs);
  color: var(--color-text-faint);
  font-family: var(--font-mono);
  white-space: nowrap;
}

.cv-edu__desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin: 0;
}
</style>
