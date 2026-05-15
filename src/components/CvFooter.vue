<template>
    <footer class="footer">
        <span class="footer__name">{{ profile.name }} · 2025</span>
        <div class="footer__links">
            <a v-for="link in links" :key="link.label" :href="link.url" target="_blank" class="footer__link">
                {{ link.label }}
            </a>
        </div>
    </footer>
</template>

<script setup>
import cv from '../data/cv.json'

const profile = cv.profile

const links = [
    { label: 'Email', url: `mailto:${profile.email}` },
    { label: 'LinkedIn', url: profile.linkedin },
    { label: 'GitHub', url: 'https://github.com/MayuriXx' },
]
</script>

<style scoped>
.footer {
    background: var(--ink);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 28px clamp(var(--space-md), 8vw, var(--space-2xl));
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-sm);
}

.footer__name {
    font-family: var(--font-display);
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.4);
}

.footer__links {
    display: flex;
    gap: var(--space-md);
}

.footer__link {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    transition: color 0.2s;
}

.footer__link:hover {
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 600px) {
    .footer {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>