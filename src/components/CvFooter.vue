<script setup>
defineProps({
  identity: { type: Object, required: true },
})
</script>

<template>
  <footer class="cv-footer">
    <div class="cv-footer__inner">
      <p class="cv-footer__copy">
        © {{ new Date().getFullYear() }} {{ identity.name }}
      </p>
      <p class="cv-footer__built">
        Construit avec
        <a href="https://vuejs.org" target="_blank" rel="noopener">Vue 3</a>
        +
        <a href="https://vitejs.dev" target="_blank" rel="noopener">Vite</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.cv-footer {
  background: var(--color-bg-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--space-8) 0;
}

.cv-footer__inner {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.cv-footer__copy,
.cv-footer__built {
  font-size: var(--text-sm);
  color: var(--color-text-faint);
  margin: 0;
}

.cv-footer__built a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.cv-footer__built a:hover {
  color: var(--color-primary);
}
</style>
