<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-4">{{ $t('welcome') }}</h1>
    <p class="mb-4">{{ $t('description') }}</p>
    <router-link to="/about" class="btn btn-primary">
      About
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss" scoped>
h1 {
  color: #41b883;
}
</style>