<template>
    <section class="hero">
        <div class="hero__blob hero__blob--top" />
        <div class="hero__blob hero__blob--bottom" />

        <div class="hero__inner reveal" ref="heroRef">
            <!-- Eyebrow -->
            <div class="hero__eyebrow">
                <span class="hero__eyebrow-line" />
                {{ profile.title }}
            </div>

            <!-- Titre -->
            <h1 class="hero__title">
                {{ firstName }}<br>
                <span class="hero__title--outline">{{ lastName }}</span>
            </h1>

            <!-- Bottom -->
            <div class="hero__bottom">
                <p class="hero__desc">{{ profile.summary }}</p>

                <div class="hero__actions">
                    <button class="btn btn--dark" @click="$emit('contact-tap')">
                        Me contacter
                    </button>

                    <a class="btn btn--outline" :href="profile.linkedin" target="_blank">
                        LinkedIn →
                    </a>
                </div>
            </div>

            <!-- Stat cards -->
            <div class="hero__stats">
                <div class="hero__stat hero__stat--accent">
                    <span class="hero__stat-num">6+</span>
                    <span class="hero__stat-label">Ans d'expérience</span>
                </div>
                <div class="hero__stat">
                    <span class="hero__stat-num">5</span>
                    <span class="hero__stat-label">Pays couverts</span>
                </div>
                <div class="hero__stat">
                    <span class="hero__stat-num">3</span>
                    <span class="hero__stat-label">Langues parlées</span>
                </div>
                <div class="hero__stat">
                    <span class="hero__stat-num">Lille</span>
                    <span class="hero__stat-label">Localisation</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import cv from '../data/cv.json'

defineEmits(['contact-tap'])

const profile = cv.profile
const heroRef = ref(null)

const firstName = computed(() => profile.name.split(' ')[0])
const lastName = computed(() => profile.name.split(' ')[1])

onMounted(() => {
    setTimeout(() => {
        heroRef.value?.classList.add('visible')
    }, 100)
})
</script>

<style scoped>
.hero {
    min-height: calc(100vh - 60px);
    padding: clamp(var(--space-lg), 10vw, var(--space-2xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid var(--border);
    overflow: hidden;
}

/* Blobs */
.hero__blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
}

.hero__blob--top {
    top: -100px;
    right: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--c3) 0%, transparent 70%);
    opacity: 0.6;
}

.hero__blob--bottom {
    bottom: -80px;
    left: 20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--c4) 0%, transparent 70%);
    opacity: 0.8;
}

.hero__inner {
    position: relative;
    z-index: 1;
    max-width: 1100px;
}

/* Eyebrow */
.hero__eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: var(--space-md);
}

.hero__eyebrow-line {
    display: block;
    width: 32px;
    height: 1px;
    background: var(--accent);
    flex-shrink: 0;
}

/* Titre */
.hero__title {
    font-family: var(--font-display);
    font-size: clamp(56px, 10vw, 120px);
    font-weight: 800;
    line-height: 0.92;
    letter-spacing: -0.04em;
    color: var(--ink);
    margin-bottom: var(--space-lg);
}

.hero__title--outline {
    -webkit-text-stroke: 2px var(--c2);
    color: transparent;
}

/* Bottom */
.hero__bottom {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: var(--space-lg);
    align-items: end;
    margin-bottom: var(--space-lg);
}

.hero__desc {
    font-size: 16px;
    color: var(--ink-mid);
    line-height: 1.7;
    max-width: 520px;
}

.hero__actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    align-items: flex-end;
}

/* Stats */
.hero__stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-sm);
    margin-top: var(--space-md);
}

.hero__stat {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: var(--space-md);
    display: flex;
    flex-direction: column;
    gap: 4px;
    transition: transform 0.2s, box-shadow 0.2s;
}

.hero__stat:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(107, 144, 128, 0.1);
}

.hero__stat--accent {
    background: var(--accent);
    border-color: var(--accent);
}

.hero__stat-num {
    font-family: var(--font-display);
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--ink);
}

.hero__stat--accent .hero__stat-num {
    color: white;
}

.hero__stat-label {
    font-size: 12px;
    color: var(--ink-light);
}

.hero__stat--accent .hero__stat-label {
    color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 768px) {
    .hero__bottom {
        grid-template-columns: 1fr;
    }

    .hero__actions {
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .hero__stats {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>