<template>
  <section id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12" ref="aboutTitle">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">About Me</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto animate-expandWidth"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1" ref="aboutImage">
          <div class="relative group">
            <div class="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105">
              <img src="../assets/image/about-pic.jpg" alt="Soda Morn - About Me" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-sky-600/20 to-transparent opacity-0 group-hover:opacity-100"></div>
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl animate-bounce-gentle">
              <Code class="h-12 w-12 text-white animate-pulse" />
            </div>
            <div class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60 animate-pulse"></div>
            <div class="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-60 animate-float"></div>
          </div>
        </div>
        <div class="order-1 md:order-2" ref="aboutContent">
          <h3 class="text-2xl font-semibold text-gray-900 mb-4 animate-fadeInUp">Hello! I'm Soda Morn</h3>
          <p class="text-lg text-gray-600 mb-6 animate-fadeInUp animation-delay-200">
            My name is Soda Morn. I was born on November 23, 2005, in Siem Reap, Cambodia. I enjoy learning new things and practicing my skills. I believe that teamwork, idea-sharing, and continuous improvement are key to helping a company grow and succeed.
          </p>
          <p class="text-lg text-gray-600 mb-6 animate-fadeInUp animation-delay-400">
            Currently, I am a second-year student at Passerelles Numériques Cambodia (PNC), pursuing an associate degree in Computer Science. I have contributed to various hands-on projects and developed solid technical skills in modern web development.
          </p>
          <div class="mb-6 animate-fadeInUp animation-delay-600">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">Personal Info</h4>
            <div class="space-y-2">
              <div v-for="(info, index) in personalInfo" :key="info.label" class="flex items-center animate-slideInLeft" :style="{ animationDelay: (index * 0.1 + 0.7) + 's' }">
                <component :is="info.icon" class="h-5 w-5 text-sky-600 mr-3" />
                <span class="text-gray-700">{{ info.text }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="(skill, index) in softSkillsPreview" :key="skill" class="bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-3 py-1 rounded-full text-sm hover:scale-105 animate-fadeInUp" :style="{ animationDelay: (index * 0.1 + 0.9) + 's' }">
              {{ skill }}
            </span>
          </div>
          <a href="#contact" class="inline-flex items-center bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-2 animate-fadeInUp animation-delay-1200">
            Let's Work Together
            <ArrowRight class="h-5 w-5 ml-2 animate-bounce-x" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code, ArrowRight } from 'lucide-vue-next'

const personalInfo = [
  { icon: 'Calendar', label: 'Born', text: 'Born: November 23, 2005' },
  { icon: 'MapPin', label: 'Location', text: 'From: Siem Reap, Cambodia' },
  { icon: 'GraduationCap', label: 'Education', text: 'Student at PNC - Computer Science' }
]

const softSkillsPreview = ['Teamwork', 'Leadership', 'Problem-solving', 'Communication']
</script>