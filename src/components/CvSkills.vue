<template>
    <section class="skills reveal" ref="sectionRef">
        <div class="section-header">
            <span class="section-num">02 —</span>
            <h2 class="section-title">Compétences</h2>
        </div>

        <div class="skills__grid">
            <div v-for="group in skillGroups" :key="group.title" class="skills__card">
                <h3 class="skills__card-title">{{ group.title }}</h3>
                <div class="skills__items">
                    <span v-for="skill in group.skills" :key="skill" class="tag">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cv from '../data/cv.json'

const skillGroups = cv.skillGroups
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
.skills {
    padding: clamp(var(--space-lg), 8vw, var(--space-xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
    background: var(--accent-pale);
    border-bottom: 1px solid var(--border);
}

.skills__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-sm);
}

.skills__card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: var(--space-md);
    transition: transform 0.2s;
}

.skills__card:hover {
    transform: translateY(-2px);
}

.skills__card-title {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: var(--space-sm);
}

.skills__items {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

@media (max-width: 900px) {
    .skills__grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .skills__grid {
        grid-template-columns: 1fr;
    }
}
</style>