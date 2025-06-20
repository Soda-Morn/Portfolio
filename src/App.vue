<template>
  <div class="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative overflow-hidden">
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div v-for="i in 50" :key="i" class="absolute animate-float" :style="{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%', animationDelay: Math.random() * 20 + 's', animationDuration: (Math.random() * 10 + 10) + 's' }">
        <div class="w-2 h-2 bg-sky-300/20 rounded-full"></div>
      </div>
    </div>
    <Navbar />
    <HomeView />
    <AboutView />
    <SkillsView />
    <ProjectsView />
    <ContactView />
    <Footer />
    <div v-if="showDownloadToast" class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideInRight z-50">
      <div class="flex items-center gap-2">
        <Download class="h-5 w-5" />
        <span>CV Downloaded Successfully!</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/global/Navbar.vue'
import Footer from '@/components/global/Footer.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'
import { Download } from 'lucide-vue-next'

const showDownloadToast = ref(false)
</script>