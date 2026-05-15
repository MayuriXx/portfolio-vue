<script setup>
defineProps({
  identity: { type: Object, required: true },
  contact:  { type: Object, required: true },
  summary:  { type: String, required: true },
})
</script>

<template>
  <section class="cv-hero">
    <div class="cv-hero__inner">
      <div class="cv-hero__meta">
        <span v-if="identity.available" class="cv-hero__badge">Disponible</span>
        <p class="cv-hero__location">{{ identity.location }}</p>
      </div>

      <h1 class="cv-hero__name">{{ identity.name }}</h1>
      <p class="cv-hero__title">{{ identity.title }}</p>
      <p class="cv-hero__tagline">{{ identity.tagline }}</p>
      <p class="cv-hero__summary">{{ summary }}</p>

      <div class="cv-hero__links">
        <a :href="'mailto:' + contact.email" class="cv-hero__link cv-hero__link--primary">
          Me contacter
        </a>
        <a :href="contact.github" target="_blank" rel="noopener" class="cv-hero__link">
          GitHub
        </a>
        <a :href="contact.linkedin" target="_blank" rel="noopener" class="cv-hero__link">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cv-hero {
  padding: var(--space-24) 0 var(--space-20);
  background: linear-gradient(160deg, var(--color-bg) 60%, var(--color-bg-surface));
}

.cv-hero__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
}

.cv-hero__meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-6);
}

.cv-hero__badge {
  background: color-mix(in srgb, var(--color-success) 15%, transparent);
  color: var(--color-success);
  border: 1px solid color-mix(in srgb, var(--color-success) 40%, transparent);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cv-hero__location {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
}

.cv-hero__name {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  color: var(--color-text);
  line-height: var(--leading-tight);
  margin: 0 0 var(--space-3);
}

.cv-hero__title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  font-weight: var(--font-medium);
  margin: 0 0 var(--space-3);
}

.cv-hero__tagline {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  margin: 0 0 var(--space-6);
  font-style: italic;
}

.cv-hero__summary {
  max-width: 640px;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin: 0 0 var(--space-10);
}

.cv-hero__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

.cv-hero__link {
  display: inline-block;
  padding: var(--space-2) var(--space-5);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  text-decoration: none;
  transition: all var(--transition-fast);
  border: 1px solid var(--color-border-light);
  color: var(--color-text-muted);
  background: var(--color-bg-elevated);
}

.cv-hero__link:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.cv-hero__link--primary {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

.cv-hero__link--primary:hover {
  background: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  color: #fff;
}
</style>
