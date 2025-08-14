<template>
  <section id="contact"
    class="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 relative">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12" ref="contactTitle">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-12">
        <div ref="contactInfo">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div class="space-y-4">
            <div v-for="contact in contactInfo" :key="contact.type" class="flex items-center">
              <div
                class="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                <component :is="contact.icon" class="h-5 w-5 text-white" />
              </div>
              <span class="text-gray-700">{{ contact.text }}</span>
            </div>
          </div>
          <div class="mt-8">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
            <div class="flex space-x-4">
              <a v-for="social in socialLinks" :key="social.name" :href="social.link" target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 hover:rotate-6 transition-transform duration-300">
                <component :is="social.icon" class="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div ref="contactForm">
          <Form @submit="submitForm" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Mail, Phone, MapPin } from 'lucide-vue-next'
import Form from '@/components/Form.vue'

const contactInfo = [
  { icon: Mail, type: 'email', text: 'soda.morn@student.passerellesnumeriques.org' },
  { icon: Phone, type: 'phone', text: '+855 99 861 664' },
  { icon: MapPin, type: 'address', text: 'Street 371, phum Tropeang Chhuk, Sangkat Tek Thla, Khan Sen Sok, Phnom Penh' }
]

const socialLinks = [
  { name: 'GitHub', icon: 'Github', link: 'https://github.com/Soda-Morn' },
  { name: 'LinkedIn', icon: 'Linkedin', link: 'https://www.linkedin.com/in/soda-morn-668971344/' },
  { name: 'Email', icon: 'Mail', link: 'mornsoda23@gmail.com' },
  { name: 'Phone', icon: 'Phone', link: 'tel:+855 99861664' },
]

const submitForm = (formData) => {
  alert('Thank you for your message! I will get back to you soon.')
  console.log('Form submitted:', formData)
}
</script>