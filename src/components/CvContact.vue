<script setup>
defineProps({
  identity: { type: Object, required: true },
  contact:  { type: Object, required: true },
})
</script>

<template>
  <section id="contact" class="cv-section">
    <div class="cv-section__inner">
      <h2 class="cv-section__title">Contact</h2>

      <div class="cv-contact__grid">
        <a :href="'mailto:' + contact.email" class="cv-contact__card">
          <span class="cv-contact__label">Email</span>
          <span class="cv-contact__value">{{ contact.email }}</span>
        </a>

        <a :href="contact.github" target="_blank" rel="noopener" class="cv-contact__card">
          <span class="cv-contact__label">GitHub</span>
          <span class="cv-contact__value">{{ contact.github.replace('https://', '') }}</span>
        </a>

        <a :href="contact.linkedin" target="_blank" rel="noopener" class="cv-contact__card">
          <span class="cv-contact__label">LinkedIn</span>
          <span class="cv-contact__value">{{ contact.linkedin.replace('https://', '') }}</span>
        </a>

        <div class="cv-contact__card cv-contact__card--location">
          <span class="cv-contact__label">Localisation</span>
          <span class="cv-contact__value">{{ identity.location }}</span>
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

.cv-contact__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--space-4);
}

.cv-contact__card {
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: border-color var(--transition-fast), transform var(--transition-fast);
}

.cv-contact__card:not(.cv-contact__card--location):hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.cv-contact__label {
  font-size: var(--text-xs);
  color: var(--color-primary);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.cv-contact__value {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  word-break: break-all;
}
</style>
