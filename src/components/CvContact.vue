<!--
  CvContact.vue — Contact section (04)

  Two-column layout:
    Left  — tagline, email CTA button, LinkedIn button
    Right — contact detail cards (email, LinkedIn, location, languages)

  Behaviour:
  - Uses IntersectionObserver to trigger the global reveal animation.
  - Data source: cv.profile + cv.languages in src/data/cv.json
-->
<template>
    <section class="contact reveal" ref="sectionRef">
        <div class="contact__inner">
            <!-- Gauche -->
            <div class="contact__left">
                <div class="section-header">
                    <span class="section-num">04 —</span>
                    <h2 class="section-title contact__title">Contact</h2>
                </div>
                <p class="contact__tagline">
                    "Prêt à rejoindre une équipe ambitieuse et à relever de nouveaux défis techniques."
                </p>
                <div class="contact__actions">
                    <a :href="`mailto:${profile.email}`" class="btn btn--dark">
                        {{ profile.email }}
                    </a>
                    <a :href="profile.linkedin" target="_blank" class="btn btn--outline">
                        LinkedIn →
                    </a>
                </div>
            </div>

            <!-- Droite -->
            <div class="contact__right">
                <a :href="`mailto:${profile.email}`" class="contact__link">
                    <div class="contact__link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                            <path d="m2 7 10 7 10-7" />
                        </svg>
                    </div>
                    {{ profile.email }}
                </a>

                <a :href="profile.linkedin" target="_blank" class="contact__link">
                    <div class="contact__link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                            <path
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </div>
                    linkedin.com/in/evanmartho
                </a>

                <div class="contact__link contact__link--static">
                    <div class="contact__link-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    {{ profile.location }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import cv from '../data/cv.json'

const profile = cv.profile
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
.contact {
    background: var(--ink);
    padding: clamp(var(--space-lg), 8vw, var(--space-xl)) clamp(var(--space-md), 8vw, var(--space-2xl));
}

.contact__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: start;
}

/* Titre blanc */
.contact__title {
    color: white;
}

.contact__title~.section-num {
    color: var(--accent-mid);
}

.contact__tagline {
    font-family: var(--font-display);
    font-size: clamp(18px, 2.5vw, 26px);
    font-weight: 300;
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.5;
    margin-bottom: var(--space-lg);
}

.contact__actions {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    align-items: flex-start;
}

/* Liens droite */
.contact__right {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.contact__link {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    padding: var(--space-sm) var(--space-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-md);
    transition: background 0.2s, transform 0.15s;
}

.contact__link:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(4px);
}

.contact__link--static {
    cursor: default;
}

.contact__link--static:hover {
    transform: none;
}

.contact__link-icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* Surcharge section-num dans dark */
:deep(.section-num) {
    color: var(--accent-mid);
}

@media (max-width: 768px) {
    .contact__inner {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
}
</style>