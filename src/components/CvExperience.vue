<template>
    <section class="experience reveal" ref="sectionRef">
        <div class="section-header">
            <span class="section-num">01 —</span>
            <h2 class="section-title">Expérience</h2>
        </div>

        <div class="experience__list">
            <div v-for="exp in experiences" :key="exp.company" class="experience__item">
                <!-- Meta -->
                <div class="experience__meta">
                    <span class="experience__period">{{ exp.period }}</span>
                    <span class="experience__company">{{ exp.company }}</span>
                    <span class="experience__location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        {{ exp.location }}
                    </span>
                </div>

                <!-- Contenu -->
                <div class="experience__content">
                    <p class="experience__role">{{ exp.role }}</p>
                    <p class="experience__desc">{{ exp.description }}</p>
                    <div class="experience__tags">
                        <span v-for="tag in exp.tags" :key="tag" class="tag">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cv from '../data/cv.json'

const experiences = cv.experiences
const sectionRef = ref(null)

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible')
                    observer.unobserve(e.target)
                }
            })
        },
        { threshold: 0.1 }
    )
    if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.experience {
    padding: clamp(var(--space-lg), 8vw, var(--space-xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    border-bottom: 1px solid var(--border);
}

.experience__list {
    display: flex;
    flex-direction: column;
}

.experience__item {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--space-lg);
    padding: var(--space-md) 0;
    border-bottom: 1px solid var(--border);
}

.experience__item:last-child {
    border-bottom: none;
}

/* Meta */
.experience__meta {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-top: 4px;
}

.experience__period {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
}

.experience__company {
    font-family: var(--font-display);
    font-size: 17px;
    font-weight: 600;
    color: var(--ink);
}

.experience__location {
    font-size: 12px;
    color: var(--ink-light);
    display: flex;
    align-items: center;
    gap: 4px;
}

/* Contenu */
.experience__role {
    font-size: 15px;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: var(--space-sm);
}

.experience__desc {
    font-size: 14px;
    color: var(--ink-mid);
    line-height: 1.7;
    margin-bottom: var(--space-sm);
}

.experience__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

@media (max-width: 768px) {
    .experience__item {
        grid-template-columns: 1fr;
        gap: var(--space-sm);
    }
}
</style>