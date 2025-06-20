<template>
  <button
    @click="$emit('click')"
    :disabled="disabled"
    class="inline-flex items-center bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 animate-pulse-slow group disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <Download v-if="showDownload && !isDownloading" class="h-5 w-5 mr-2 group-hover:animate-bounce" />
    <div v-else-if="isDownloading" class="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Download } from 'lucide-vue-next'

defineProps({
  disabled: Boolean,
  showDownload: Boolean,
  isDownloading: Boolean
})

defineEmits(['click'])
</script>