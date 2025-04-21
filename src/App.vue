<template>
  <div class="container mx-auto">
    <header class="p-4 bg-gray-100 flex justify-between items-center">
      <h1 class="text-xl font-bold">Vue 3 + TypeScript</h1>
      <div>
        <button @click="changeLocale('id')" class="mr-2 px-2 py-1 rounded" :class="{ 'bg-blue-500 text-white': locale === 'id' }">ID</button>
        <button @click="changeLocale('en')" class="px-2 py-1 rounded" :class="{ 'bg-blue-500 text-white': locale === 'en' }">EN</button>
      </div>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  setup() {
    const { locale } = useI18n()
    
    const changeLocale = (lang: string) => {
      locale.value = lang
    }
    
    return {
      locale,
      changeLocale
    }
  }
})
</script>