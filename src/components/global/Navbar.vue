<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-sky-200/50 shadow-lg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="text-2xl font-bold bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
          Soda Morn
        </div>
        <div class="hidden md:flex space-x-8">
          <a v-for="item in navItems" :key="item.href" :href="item.href" class="text-gray-700 hover:text-sky-600 transition-all duration-300 relative group font-medium">
            {{ item.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <button @click="toggleMobileMenu" class="md:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors">
          <Menu class="h-6 w-6 text-gray-700" />
        </button>
      </div>
      <div v-if="mobileMenuOpen" class="md:hidden pb-4 animate-slideDown">
        <div class="flex flex-col space-y-2 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
          <a v-for="(item, index) in navItems" :key="item.href" :href="item.href" class="text-gray-700 hover:text-sky-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-sky-50 animate-fadeInUp" :style="{ animationDelay: index * 0.1 + 's' }">
            {{ item.name }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { Menu } from 'lucide-vue-next'

const mobileMenuOpen = ref(false)
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>