<template>
  <section id="skills" class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12" ref="skillsTitle">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mb-4"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>
      <div class="mb-12" ref="programmingSection">
        <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Programming Languages</h3>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6">
          <div v-for="lang in programmingLanguages" :key="lang.name" class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 mx-auto mb-3 flex items-center justify-center relative">
              <div class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center sm:mr-0 mr-2">
                <img v-if="lang.imagePath && !imageErrors[lang.name]" :src="lang.imagePath" :alt="lang.name + ' Logo'" class="w-10 h-10 object-contain" @error="handleImageError(lang.name)" @load="handleImageLoad(lang.name)" />
                <span v-else class="text-xs font-bold text-gray-500">{{ lang.name.substring(0, 3) }}</span>
              </div>
            </div>
            <h4 class="font-medium text-gray-900 text-sm">{{ lang.name }}</h4>
          </div>
        </div>
      </div>
      <div class="mb-12" ref="frameworksSection">
        <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Frameworks & Libraries</h3>
        <div class="grid grid-cols-3 md:grid-cols-5 gap-6">
          <div v-for="framework in frameworks" :key="framework.name" class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 mx-auto mb-3 flex items-center justify-center relative">
              <div class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center sm:mr-0 mr-2">
                <img v-if="framework.imagePath && !imageErrors[framework.name]" :src="framework.imagePath" :alt="framework.name + ' Logo'" class="w-10 h-10 object-contain" @error="handleImageError(framework.name)" @load="handleImageLoad(framework.name)" />
                <span v-else class="text-xs font-bold text-gray-500">{{ framework.name.substring(0, 3) }}</span>
              </div>
            </div>
            <h4 class="font-medium text-gray-900 text-sm">{{ framework.name }}</h4>
          </div>
        </div>
      </div>
      <div class="mb-12" ref="toolsSection">
        <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Tools & Technologies</h3>
        <div class="grid grid-cols-3 md:grid-cols-6 gap-6">
          <div v-for="tool in developmentTools" :key="tool.name" class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
            <div class="w-16 h-16 mx-auto mb-3 flex items-center justify-center relative">
              <div class="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center sm:mr-0 mr-2">
                <img v-if="tool.imagePath && !imageErrors[tool.name]" :src="tool.imagePath" :alt="tool.name + ' Logo'" class="w-10 h-10 object-contain" @error="handleImageError(tool.name)" @load="handleImageLoad(tool.name)" />
                <component v-else :is="tool.icon" :class="tool.color" class="w-6 h-6" />
              </div>
            </div>
            <h4 class="font-medium text-gray-900 text-sm">{{ tool.name }}</h4>
          </div>
        </div>
      </div>
      <div ref="softSkillsSection">
        <h3 class="text-2xl font-semibold text-gray-900 mb-8 text-center">Soft Skills</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="softSkill in softSkills" :key="softSkill" class="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
            <div class="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full flex items-center justify-center">
              <Star class="h-6 w-6 text-sky-600" />
            </div>
            <span class="font-medium text-gray-900 text-sm">{{ softSkill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Star } from 'lucide-vue-next'

const imageErrors = ref({})

const programmingLanguages = [
  { name: 'HTML5', imagePath: '/image/html.png' },
  { name: 'CSS3', imagePath: '/image/css.png'},
  { name: 'JavaScript', imagePath: '/image/javascript.png' },
  { name: 'PHP', imagePath: '/image/php.png'},
  { name: 'Python', imagePath: '/image/python.png'},
  { name: 'TypeScript', imagePath: '/image/ts.png'}
]

const frameworks = [
  { name: 'Vue.js', imagePath: '/image/vue.png' },
  { name: 'Laravel', imagePath: '/image/laravel.png' },
  { name: 'Bootstrap', imagePath: '/image/bootstrap.png' },
  { name: 'Tailwind', imagePath: '/image/tailwind.png' },
  { name: 'Node.js', imagePath: '/image/node.jpg' }
]

const developmentTools = [
  { name: 'Git', imagePath: '/image/git.png', icon: 'Github', color: 'text-gray-800' },
  { name: 'VS Code', imagePath: '/image/vscode.png', icon: 'Code', color: 'text-blue-600' },
  { name: 'Figma', imagePath: '/image/figma.png', icon: 'Monitor', color: 'text-purple-500' },
  { name: 'MySQL', imagePath: '/image/mysql.png', icon: 'Database', color: 'text-blue-500' },
  { name: 'AWS', imagePath: '/image/aws.png', icon: 'Database', color: 'text-orange-500' },
  { name: 'Jira', imagePath: '/image/jira.png', icon: 'Settings', color: 'text-blue-600' }
]

const softSkills = [
  'Communication', 'Leadership', 'Teamwork', 'Problem-solving',
  'Time Management', 'Critical Thinking', 'Creativity', 'Adaptability'
]

const handleImageError = (skillName) => {
  imageErrors.value[skillName] = true
  console.log(`Failed to load image for ${skillName}`)
}

const handleImageLoad = (skillName) => {
  imageErrors.value[skillName] = false
  console.log(`Successfully loaded image for ${skillName}`)
}
</script>