<template>
    <header class="header" :class="{ 'header--scrolled': isScrolled }">
        <div class="header__logo">{{ profile.name }}</div>
        <nav class="header__nav">
            <a class="header__link" @click="$emit('experience-tap')">Expérience</a>
            <a class="header__link" @click="$emit('skills-tap')">Compétences</a>
            <a class="header__link" @click="$emit('education-tap')">Formation</a>
            <a class="header__link header__link--primary" @click="$emit('contact-tap')">Contact</a>
        </nav>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import cv from '../data/cv.json'

defineEmits(['experience-tap', 'skills-tap', 'education-tap', 'contact-tap'])

const profile = cv.profile
const isScrolled = ref(false)

const onScroll = () => {
    isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60px;
    padding: 0 clamp(var(--space-md), 6vw, var(--space-xl));
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--bg);
    transition: border-color 0.2s, background 0.2s;
    border-bottom: 1px solid transparent;
}

.header--scrolled {
    background: rgba(246, 255, 248, 0.85);
    backdrop-filter: blur(12px);
    border-bottom-color: var(--border);
}

.header__logo {
    font-family: var(--font-display);
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--ink);
}

.header__nav {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.header__link {
    font-size: 12px;
    font-weight: 500;
    color: var(--ink-mid);
    text-decoration: none;
    padding: 6px 14px;
    border-radius: var(--radius-full);
    border: 1px solid transparent;
    transition: all 0.2s;
    letter-spacing: 0.02em;
    cursor: pointer;
}

.header__link:hover {
    border-color: var(--border);
    background: var(--accent-pale);
    color: var(--ink);
}

.header__link--primary {
    background: var(--accent);
    color: white;
    border-color: var(--accent);
}

.header__link--primary:hover {
    background: #5a7a6d;
    border-color: #5a7a6d;
    color: white;
}

@media (max-width: 600px) {
    .header__nav {
        display: none;
    }
}
</style>