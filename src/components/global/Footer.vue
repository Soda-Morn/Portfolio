<template>
  <footer class="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
      <div v-for="i in 20" :key="i" class="absolute animate-float" :style="{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', animationDelay: Math.random() * 10 + 's', animationDuration: (Math.random() * 5 + 5) + 's' }">
        <div class="w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto relative z-10 text-center">
      <div class="text-2xl font-bold bg-gradient-to-r from-sky-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
        Soda Morn
      </div>
      <p class="text-gray-300 mb-4 animate-fadeInUp">Web Developer • Student • Problem Solver</p>
      <div class="flex justify-center space-x-6 mb-6">
        <a v-for="(item, index) in navItems" :key="item.href" :href="item.href" class="text-gray-400 hover:text-sky-400 transition-all duration-300 hover:scale-110 animate-fadeInUp" :style="{ animationDelay: index * 0.1 + 's' }">
          {{ item.name }}
        </a>
      </div>
      <p class="text-gray-500 text-sm animate-fadeInUp animation-delay-500">© 2025 Soda Morn. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]
</script>