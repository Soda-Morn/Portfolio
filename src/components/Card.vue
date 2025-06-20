<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 group transform hover:-translate-y-4 hover:scale-105 animate-fadeInUp" :style="{ animationDelay: index * 0.1 + 's' }">
    <div class="h-48 relative overflow-hidden">
      <img v-if="project.image" :src="project.image" :alt="project.name + ' Screenshot'" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div v-else class="h-full bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 flex items-center justify-center">
        <Folder class="h-16 w-16 text-white group-hover:scale-110 transition-transform duration-300 animate-float" />
      </div>
      <div class="absolute top-4 right-4">
        <span v-if="project.status" class="px-3 py-1 rounded-full text-xs font-semibold" :class="{ 'bg-green-100 text-green-800': project.status === 'completed', 'bg-yellow-100 text-yellow-800': project.status === 'in-progress', 'bg-blue-100 text-blue-800': project.status === 'live' }">
          {{ project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'In Progress' : 'Live' }}
        </span>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex gap-3">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sky-600 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
            <ExternalLink class="h-5 w-5" />
          </a>
          <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" class="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
            <Github class="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between mb-2">
        <h3 class="text-xl font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300 flex-1">{{ project.name }}</h3>
        <div class="flex items-center gap-2 ml-4">
          <div v-if="project.featured" class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="(tech, techIndex) in project.technologies" :key="tech" class="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-2 py-1 rounded-full text-xs hover:scale-105 transition-transform duration-300 animate-fadeInUp" :style="{ animationDelay: (techIndex * 0.05) + 's' }">
          {{ tech }}
        </span>
      </div>
      <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
        <span class="font-medium">{{ project.role }}</span>
        <div class="flex items-center gap-4">
          <span v-if="project.duration" class="flex items-center gap-1">
            <Calendar class="h-3 w-3" />
            {{ project.duration }}
          </span>
          <span v-if="project.teamSize" class="flex items-center gap-1">
            <Users class="h-3 w-3" />
            {{ project.teamSize }}
          </span>
        </div>
      </div>
      <div class="flex gap-3">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
          <ExternalLink class="h-4 w-4" />
          Live Demo
        </a>
        <a v-if="project.repositoryUrl" :href="project.repositoryUrl" target="_blank" class="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:scale-105 text-sm">
          <Github class="h-4 w-4" />
          Code
        </a>
      </div>
      <button v-if="project.details" @click="toggleDetails" class="w-full mt-3 text-sky-600 hover:text-sky-800 transition-colors duration-300 text-sm font-medium">
        {{ expanded ? 'Show Less' : 'Show More' }}
      </button>
      <div v-if="project.details && expanded" class="mt-4 p-4 bg-sky-50 rounded-lg animate-fadeInUp">
        <h4 class="font-semibold text-gray-900 mb-2">Project Details</h4>
        <ul class="text-sm text-gray-600 space-y-1">
          <li v-for="detail in project.details" :key="detail" class="flex items-start gap-2">
            <div class="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import { Folder, ExternalLink, Github, Calendar, Users } from 'lucide-vue-next'

defineProps({
  project: Object,
  index: Number
})

const emit = defineEmits(['toggleDetails'])
const expanded = ref(false)

const toggleDetails = () => {
  expanded.value = !expanded.value
  emit('toggleDetails', expanded.value)
}
</script>