<template>
  <section class="py-12 px-4 md:px-8 lg:px-12">
    <div class="container mx-auto">
      <!-- Heading -->
      <div class="text-center mb-8">
        <slot name="heading"></slot>
      </div>

      <!-- Slider Container -->
      <div class="w-full">
        <slot name="slider"></slot>
      </div>
    </div>
  </section>
</template>