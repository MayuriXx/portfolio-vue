<template>
    <section class="education reveal" ref="sectionRef">
        <div class="section-header">
            <span class="section-num">03 —</span>
            <h2 class="section-title">Formation</h2>
        </div>

        <div class="education__grid">
            <div v-for="edu in educations" :key="edu.degree" class="education__card">
                <span class="education__period">{{ edu.period }}</span>
                <h3 class="education__degree">{{ edu.degree }}</h3>
                <p class="education__school">{{ edu.school }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cv from '../data/cv.json'

const educations = cv.educations
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
.education {
    padding: clamp(var(--space-lg), 8vw, var(--space-xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    border-bottom: 1px solid var(--border);
}

.education__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
}

.education__card {
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-md) clamp(var(--space-md), 3vw, var(--space-lg));
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}

.education__card:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(107, 144, 128, 0.1);
    border-color: var(--accent);
}

.education__period {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
}

.education__degree {
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 600;
    color: var(--ink);
}

.education__school {
    font-size: 13px;
    color: var(--ink-light);
    line-height: 1.5;
}

@media (max-width: 600px) {
    .education__grid {
        grid-template-columns: 1fr;
    }
}
</style>