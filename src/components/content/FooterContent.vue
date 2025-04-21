<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import FooterLayout from '@/components/layout/FooterLayout.vue';

const email = ref<string>('');

const handleSubscribe = () => {
  if (email.value) {
    console.log('Berlangganan newsletter dengan email:', email.value);
    email.value = '';
  }
}
</script>
<template>
  <FooterLayout>
    <!-- Brand slot -->
    <template #brand>
      <h2 class="text-4xl font-serif mb-4">Pretty</h2>
      <p class="text-sm mb-6">
        Auctor urna nunc id cursus. Id semper risus in hendrerit gravida vitae congue mauris
      </p>
      <div class="flex gap-3">
        <Button icon="pi pi-facebook" class="p-button-rounded p-button-text hover:bg-amber-800" aria-label="Facebook" />
        <Button icon="pi pi-twitter" class="p-button-rounded p-button-text hover:bg-amber-800" aria-label="Twitter" />
        <Button icon="pi pi-linkedin" class="p-button-rounded p-button-text hover:bg-amber-800" aria-label="LinkedIn" />
        <Button icon="pi pi-instagram" class="p-button-rounded p-button-text hover:bg-amber-800" aria-label="Instagram" />
      </div>
    </template>

    <!-- Links slot -->
    <template #links>
      <ul class="space-y-3">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Why Work With Us</a></li>
        <li><a href="#" class="hover:underline">Portfolio</a></li>
        <li><a href="#" class="hover:underline">Blog</a></li>
      </ul>
    </template>

    <!-- Support slot -->
    <template #support>
      <ul class="space-y-3">
        <li><a href="#" class="hover:underline">Help</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
        <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        <li><a href="#" class="hover:underline">Terms & conditions</a></li>
      </ul>
    </template>

    <!-- Newsletter slot -->
    <template #newsletter>
      <div class="w-full max-w-xs">
        <span class="p-input-icon-right w-full mb-3">
          <i class="pi pi-envelope" />
          <InputText 
            v-model="email" 
            placeholder="Enter Your Email" 
            class="w-full p-inputtext-sm bg-transparent border border-amber-600 text-white placeholder-amber-200" 
          />
        </span>
        <Button 
          label="Subscribe" 
          @click="handleSubscribe" 
          class="w-full p-button-sm bg-white text-amber-800 border-none hover:bg-amber-100"
        />
      </div>
    </template>

    <!-- Copyright slot -->
    <template #copyright>
      © Pixelean.Com- All Rights Reserved
    </template>
  </FooterLayout>
</template>