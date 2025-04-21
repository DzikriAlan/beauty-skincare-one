<template>
  <section class="py-12 px-4 md:px-8 lg:px-12 bg-amber-50 overflow-hidden">
    <div class="container mx-auto">
      <!-- Judul utama berada di atas -->
      <div class="text-center mb-8">
        <slot name="heading"></slot>
      </div>
      
      <!-- Container untuk carousel -->
      <div class="w-full">
        <slot name="slider"></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Layout component tidak memerlukan logika tambahan
</script>