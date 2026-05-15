<script setup>
defineProps({
  identity: { type: Object, required: true },
})
</script>

<template>
  <header class="cv-header">
    <div class="cv-header__inner">
      <span class="cv-header__name">{{ identity.name }}</span>
      <nav class="cv-header__nav">
        <a href="#experience">Expérience</a>
        <a href="#skills">Compétences</a>
        <a href="#education">Formation</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.cv-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--color-bg-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--space-4) 0;
}

.cv-header__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.cv-header__name {
  font-weight: var(--font-semibold);
  color: var(--color-primary);
  font-size: var(--text-lg);
  white-space: nowrap;
}

.cv-header__nav {
  display: flex;
  gap: var(--space-6);
}

.cv-header__nav a {
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: var(--text-sm);
  transition: color var(--transition-fast);
}

.cv-header__nav a:hover {
  color: var(--color-text);
}
</style>
