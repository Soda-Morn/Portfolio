<template>
  <form @submit.prevent="$emit('submit', form)" class="space-y-6">
    <div v-for="(field, index) in formFields" :key="field.name" class="animate-fadeInUp" :style="{ animationDelay: index * 0.1 + 's' }">
      <label class="block text-sm font-medium text-gray-700 mb-2">{{ field.label }}</label>
      <component :is="field.component" v-model="form[field.name]" :type="field.type" :rows="field.rows" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg" required />
    </div>
    <button type="submit" class="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 animate-pulse-slow">
      Send Message
    </button>
  </form>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const emit = defineEmits(['submit'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const formFields = [
  { name: 'name', label: 'Name', component: 'input', type: 'text' },
  { name: 'email', label: 'Email', component: 'input', type: 'email' },
  { name: 'message', label: 'Message', component: 'textarea', rows: 4 }
]
</script>