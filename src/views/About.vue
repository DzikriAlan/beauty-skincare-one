<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">About Page</h1>
    <p class="mb-4">This is the about page.</p>
    <router-link to="/" class="btn btn-primary">
      Back to Home
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutPage'
})
</script>