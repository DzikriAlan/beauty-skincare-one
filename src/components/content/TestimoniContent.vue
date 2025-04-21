<script setup lang="ts">
import { ref } from 'vue';
import Carousel from 'primevue/carousel';
import Rating from 'primevue/rating';
import TestimoniLayout from '@/components/layout/TestimoniLayout.vue';

const testimonials = ref([
  {
    name: 'Monica',
    title: 'Fashion Designer',
    quote: "I had my makeup done at this beauty shop for my wedding and it was flawless. The makeup artist listened to my requests and made me look and feel beautiful on my big day.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3', 
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    blobShape: 'path("M186.4,99.4c0.7,14.5-3.5,29.1-12.1,40c-8.6,10.9-21.6,18.2-35.4,22.1c-13.8,3.9-28.5,4.4-42.4,0.7c-13.9-3.6-27-11.6-36.3-22.8S45.3,112,46,96.6c0.7-15.4,6.2-31,16.5-42.3S88.5,35.5,103,32.8c14.5-2.7,30.1-0.2,43.1,7.6c13,7.8,23.4,20.9,29,35.9C179.8,85.7,185.7,84.9,186.4,99.4z")'
  },
  {
    name: 'Sarah Johnson',
    title: 'Marketing Executive',
    quote: "The skincare routine recommended by the specialists here completely transformed my skin. I've struggled with acne for years, and after just one month following their regimen, I've seen incredible results!",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
    blobShape: 'path("M189.8,105.1c-2.1,16.3-8.3,32.6-18.9,45.3c-10.6,12.7-25.7,21.7-42.2,23.8c-16.5,2-34.3-2.8-47.3-13.8c-13-11-21.1-28-24.9-45.9c-3.8-17.8-3.2-36.5,4.2-52.5C67.2,46,81.4,33,98.2,26c16.8-7,36.3-8,53.4-0.2c17.1,7.8,31.8,24.4,38,43.5C195.8,88.3,191.9,88.8,189.8,105.1z")'
  },
  {
    name: 'Jennifer Lopez',
    title: 'Event Planner',
    quote: "Their hair styling service is absolutely top-notch! They really understood the look I was going for my daughter's graduation and executed it perfectly. The style lasted all day and looked amazing in photos.",
    image: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    rating: 4,
    blobShape: 'path("M183.1,113.5c-5.4,17.4-15.7,33.9-30.1,44.8c-14.5,10.9-33,16.2-51.4,13.6c-18.4-2.6-36.6-13.1-48.3-29.2c-11.7-16.1-16.9-37.8-14.2-58c2.7-20.2,13.4-39,29.2-51c15.8-12,36.7-17.2,56.6-13.9c19.9,3.4,38.8,15.3,50,32.2c11.2,16.9,14.7,38.8,9.1,58.1C183.7,110.9,183.4,112.2,183.1,113.5z")'
  },
  {
    name: 'Emily Chen',
    title: 'Yoga Instructor',
    quote: "The spa treatment I received was the most relaxing experience I've had in years. The staff was attentive, professional, and created a perfectly tranquil environment. I'll definitely be returning monthly!",
    image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3',
    avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
    rating: 5,
    blobShape: 'path("M184.4,100.9c-0.3,17.2-5.3,34.5-15.7,47.8c-10.4,13.3-26.2,22.5-43.3,25.3c-17.1,2.8-35.4-0.8-50.2-10.1c-14.8-9.3-26.1-24.3-32.1-41.4c-6-17.1-6.7-36.3-0.5-53.3C48.7,52.2,61.8,36.5,78.8,27c17-9.5,37.9-13,57-7.3S173.5,39,182.5,57C183.2,58.8,184.7,83.7,184.4,100.9z")'
  },
  {
    name: 'Rachel Green',
    title: 'Interior Designer',
    quote: "I visited for a facial before a big client presentation and was blown away by the results. My skin was glowing and I felt so confident. The aesthetician was knowledgeable and personalized the treatment for my skin needs.",
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    rating: 5,
    blobShape: 'path("M193.4,105.5c-1.8,19-9.3,37.9-22.3,51.7c-13,13.8-31.5,22.4-51.1,24c-19.6,1.6-40.2-3.8-55.4-16.1c-15.2-12.3-25-31.4-28.1-51.9c-3.1-20.5,0.6-42.4,11.2-59.9c10.6-17.5,28-30.7,47.6-36.7c19.6-6,41.2-4.8,59.7,3.5c18.5,8.4,33.8,23.9,40.8,42.3C200.6,75.6,195.2,86.5,193.4,105.5z")'
  }
]);
</script>
<template>
  <TestimoniLayout>
    <template #heading>
      <h2 class="text-4xl font-serif font-bold text-gray-800">
        What Our Clients Says
      </h2>
    </template>

    <template #slider>
      <Carousel 
        :value="testimonials" 
        :numVisible="1" 
        :numScroll="1" 
        :circular="true" 
        :autoplayInterval="5000"
        :showIndicators="true"
        :showNavigators="true"
        class="testimonial-carousel"
      >
        <template #item="slotProps">
          <div class="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
            <!-- Image dengan Blob -->
            <div class="relative w-full max-w-xs md:w-2/5 mb-6 md:mb-0">
              <div 
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-amber-700 z-0"
                :style="`clip-path: ${slotProps.data.blobShape}`"
              ></div>
              <img 
                :src="slotProps.data.image" 
                :alt="slotProps.data.name" 
                class="relative z-10 w-full h-auto max-h-[400px] object-cover rounded-full"
              />
            </div>

            <!-- Testimonial Content -->
            <div class="w-full md:w-1/2 flex flex-col">
              <p class="text-lg mb-6 leading-relaxed">{{ slotProps.data.quote }}</p>
              
              <div class="flex items-center mt-4">
                <img 
                  :src="slotProps.data.avatar" 
                  :alt="slotProps.data.name" 
                  class="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 class="font-bold text-lg">{{ slotProps.data.name }}</h4>
                  <p class="text-gray-600">{{ slotProps.data.title }}</p>
                </div>
              </div>
              
              <Rating 
                v-model="slotProps.data.rating" 
                :readonly="true" 
                :cancel="false" 
                class="mt-2"
              />
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </TestimoniLayout>
</template>

<style scoped>
/* Kustomisasi komponen PrimeVue */
:deep(.p-carousel-indicators) {
  @apply justify-center mt-6;
}

:deep(.p-carousel-indicator > button) {
  @apply bg-amber-300 hover:bg-amber-400;
}

:deep(.p-carousel-indicator.p-highlight > button) {
  @apply bg-amber-700;
}

:deep(.p-rating-icon) {
  @apply text-amber-500;
}

/* Kustomisasi container dan navigasi */
:deep(.p-carousel-container) {
  @apply pb-10;
}

:deep(.p-carousel-items-container) {
  @apply h-full;
}

:deep(.p-carousel-next),
:deep(.p-carousel-prev) {
  @apply bg-amber-700 text-white border-amber-700;
}

:deep(.p-carousel) {
  @apply overflow-visible;
}
</style>