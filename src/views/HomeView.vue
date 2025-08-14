<template>
  <section id="home" class="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob">
    </div>
    <div
      class="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000">
    </div>
    <div
      class="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000">
    </div>
    <div class="max-w-6xl mx-auto w-full relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1 animate-slideInLeft">
          <div class="mb-6">
            <span class="text-sky-600 font-semibold text-lg tracking-wide uppercase animate-fadeInUp">Welcome!</span>
          </div>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            I Am <span ref="typingText"
              class="bg-gradient-to-r from-sky-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">{{
              displayText }}</span>
            <span class="animate-blink">|</span>
          </h1>
          <p class="md:text-lg sm:text-lg text-gray-600 mb-8 max-w-lg animate-fadeInUp animation-delay-500">
            A passionate Web Developer based in Cambodia, creating modern and responsive web applications. Currently
            studying Computer Science at Passerelles Numériques Cambodia.
          </p>
          <div class="flex space-x-4 mb-8 animate-fadeInUp animation-delay-700">
            <a v-for="(social, index) in socialLinks" :key="social.name" :href="social.link"
              class="w-12 h-12 border-2 border-sky-500 rounded-full flex items-center justify-center text-sky-600 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12 animate-bounceIn"
              :style="{ animationDelay: (index * 0.1 + 0.8) + 's' }">
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
          <div
            class="flex flex-col sm:flex-row sm:w-[4000px] md:w-[400px] w-[200px] gap-4 animate-fadeInUp animation-delay-1000">
            <Button :disabled="isDownloading" :show-download="true" :is-downloading="isDownloading" @click="downloadCV">
              {{ isDownloading ? 'Generating PDF...' : 'Download CV' }}
            </Button>
            <a href="#contact"
              class="border-2 border-sky-500 text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div class="order-1 md:order-2 flex justify-center animate-slideInRight">
          <div class="relative">
            <div class="absolute inset-0 animate-spin-slow">
              <div class="w-[500px] h-[500px] border-2 border-sky-300/30 rounded-full"></div>
            </div>
            <div class="absolute inset-4 animate-spin-reverse">
              <div class="w-[460px] h-[460px] border-2 border-purple-300/30 rounded-full border-dashed"></div>
            </div>
            <div
              class="w-96 h-96 md:w-[450px] md:h-[450px] bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600 rounded-full shadow-2xl animate-gradient-rotate">
            </div>
            <div class="absolute inset-0 flex items-end justify-center">
              <img src="../assets/image/logo-heading.png" alt="Soda Morn - Web Developer"
                class="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-6 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float-gentle" />
            </div>
            <div
              class="absolute top-8 left-8 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center animate-bounce-gentle">
              <Code class="h-8 w-8 text-sky-600 animate-pulse" />
            </div>
            <div
              class="absolute bottom-12 right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl animate-pulse-glow">
            </div>
            <div
              class="absolute top-1/2 -right-6 w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-xl animate-bounce-gentle"
              style="animation-delay: 0.5s;"></div>
            <div
              class="absolute top-1/4 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-xl animate-float"
              style="animation-delay: 1s;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { Code, Download } from 'lucide-vue-next'
import Button from '@/components/global/Button.vue'

const displayText = ref('')
const typingText = ref(null)
const isDownloading = ref(false)
const showDownloadToast = ref(false)

const socialLinks = [
  { name: 'GitHub', icon: 'Github', link: 'https://github.com/Soda-Morn' },
  { name: 'LinkedIn', icon: 'Linkedin', link: 'https://www.linkedin.com/in/soda-morn-668971344/' },
  { name: 'Email', icon: 'Mail', link: 'mornsoda23@gmail.com' },
  { name: 'Phone', icon: 'Phone', link: 'tel:+855 99861664' },
]


const downloadCV = async () => {
  isDownloading.value = true
  try {
    const link = document.createElement('a')
    link.href = '/Soda Morn CV&CL.pdf'
    link.download = 'Soda_Morn_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showDownloadToast.value = true
    setTimeout(() => {
      showDownloadToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error downloading PDF:', error)
    alert('Error downloading PDF. Please try again.')
  } finally {
    isDownloading.value = false
  }
}

const typeText = async () => {
  const texts = ['Web Developer', 'Problem Solver', 'Creative Thinker', 'Team Player']
  let textIndex = 0
  while (true) {
    const currentText = texts[textIndex]
    for (let i = 0; i <= currentText.length; i++) {
      displayText.value = currentText.slice(0, i)
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    await new Promise(resolve => setTimeout(resolve, 2000))
    for (let i = currentText.length; i >= 0; i--) {
      displayText.value = currentText.slice(0, i)
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    await new Promise(resolve => setTimeout(resolve, 500))
    textIndex = (textIndex + 1) % texts.length
  }
}

onMounted(async () => {
  await nextTick()
  typeText()
})
</script>