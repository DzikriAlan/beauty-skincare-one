<template>
  <footer class="w-full bg-amber-700 py-10 px-6 md:px-12 text-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-start gap-8">
        <!-- Brand dan Deskripsi -->
        <div class="flex flex-col max-w-xs">
          <slot name="brand"></slot>
        </div>

        <!-- Links -->
        <div class="flex flex-col">
          <h3 class="text-lg font-medium mb-4">Links</h3>
          <slot name="links"></slot>
        </div>

        <!-- Support -->
        <div class="flex flex-col">
          <h3 class="text-lg font-medium mb-4">Support</h3>
          <slot name="support"></slot>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col">
          <h3 class="text-lg font-medium mb-4">Newsletter</h3>
          <slot name="newsletter"></slot>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 text-sm text-center md:text-left">
        <slot name="copyright"></slot>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Layout component tidak memerlukan logika tambahan
</script>

<style scoped>
/* Kustomisasi komponen PrimeVue diwariskan dari parent */
:deep(.p-button.p-button-text) {
  @apply bg-amber-800 border-none text-white w-8 h-8 flex items-center justify-center;
}

:deep(.p-button.p-button-text:hover) {
  @apply bg-amber-900;
}

:deep(.p-button.p-button-text .p-button-icon) {
  @apply text-white;
}

:deep(.p-inputtext:focus) {
  @apply border-amber-500 shadow-none;
}

:deep(.p-inputtext:enabled:focus) {
  @apply shadow-none ring-1 ring-amber-500;
}
</style>