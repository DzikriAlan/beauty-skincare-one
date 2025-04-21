<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Image from 'primevue/image';
import PortfolioLayout from '@/components/layout/PortofolioLayout.vue';
import MarqueeContent from '@/components/content/MarqueeContent.vue'

const portfolioImages = ref([
  { type: 'image', src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8', alt: 'Hair Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881', alt: 'Facial Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9', alt: 'Mask Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874', alt: 'Massage Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1', alt: 'Body Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8', alt: 'Hair Treatment' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881', alt: 'Facial Treatment' }
]);
</script>
<template>
  <PortfolioLayout>
    <template #heading>
      <h2 class="text-4xl font-serif font-bold text-gray-800">See Our Portfolio</h2>
    </template>

    <template #slider>
      <div class="relative overflow-hidden">
        <MarqueeContent :data="portfolioImages" />
      </div>
    </template>
  </PortfolioLayout>
</template>

<style scoped>
/* Kustomisasi komponen PrimeVue jika diperlukan */
:deep(.p-card) {
  @apply overflow-hidden border-0;
}

:deep(.p-card-content) {
  @apply p-0;
}

/* Kustomisasi komponen vue3-marquee jika diperlukan */
:deep(.vue3-marquee) {
  @apply overflow-hidden;
}
</style>