<template>
  <section id="projects" class="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm relative">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12" ref="projectsTitle">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Explore my latest work and creative solutions
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref="projectsGrid">
        <Card v-for="(project, index) in projects" :key="project.id" :project="project" :index="index" @toggle-details="toggleProjectDetails(project.id)" />
      </div>
      <div class="text-center mt-12">
        <button class="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:scale-105">
          View All Projects
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'

const expandedProjects = ref([])
const projects = [
  {
    id: 1,
    name: 'Cafe Shop Management System',
    description: 'A comprehensive management system for cafe operations with revenue analysis and inventory tracking.',
    image: '/image/vc-1.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Chart.js'],
    role: 'Scrum Master',
    status: 'completed',
    duration: '3 months',
    teamSize: '4 people',
    featured: true,
    liveUrl: null,
    repositoryUrl: 'https://github.com/Soda-Morn/VC1-Group06-Cafe-Shop',
    details: [
      'Implemented real-time inventory tracking system',
      'Created comprehensive sales analytics dashboard',
      'Developed customer management features',
      'Built automated reporting system',
      'Integrated payment processing'
    ]
  },
  {
    id: 2,
    name: 'E-commerce Website',
    description: 'A modern e-commerce platform with streamlined purchasing process and user-friendly interface.',
    image: '/image/e-commerce.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Bootstrap'],
    role: 'Team Lead',
    status: 'live',
    duration: '4 months',
    teamSize: '5 people',
    featured: true,
    liveUrl: 'https://g9-ecommerce.vercel.app/',
    repositoryUrl: 'https://github.com/Soda-Morn/G9-Ecommerce',
    details: [
      'Built responsive product catalog',
      'Implemented secure checkout process',
      'Created user authentication system',
      'Developed admin dashboard',
      'Integrated multiple payment gateways'
    ]
  },
  {
    id: 3,
    name: 'Automated Document Generation',
    description: 'Tool for automating generation of certificates, transcripts, and association letters.',
    image: '/image/automated.jpg',
    technologies: ['Python', 'Tkinter', 'Pandas', 'Excel'],
    role: 'Team Lead',
    status: 'completed',
    duration: '2 months',
    teamSize: '3 people',
    liveUrl: null,
    repositoryUrl: 'https://github.com/Soda-Morn/G10-automated-document-generation-transcript-certificates-',
    details: [
      'Automated certificate generation from Excel data',
      'Created customizable document templates',
      'Implemented batch processing capabilities',
      'Built user-friendly GUI interface',
      'Added PDF export functionality'
    ]
  },
  {
    id: 4,
    name: 'Linux Server Deployment',
    description: 'WordPress website deployed on AWS using command-line operations.',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['WordPress', 'AWS', 'Ubuntu', 'Apache'],
    role: 'Developer',
    status: 'live',
    duration: '1 month',
    teamSize: '2 people',
    liveUrl: null,
    repositoryUrl: null,
    details: [
      'Configured AWS EC2 instance',
      'Set up LAMP stack on Ubuntu',
      'Deployed WordPress with custom theme',
      'Implemented SSL certificates',
      'Configured automated backups'
    ]
  },
  {
    id: 5,
    name: 'Bakery Shop Website',
    description: 'Static website for a bakery shop with appealing UI and thoughtful design.',
    image: '/image/bakery.jpg',
    technologies: ['HTML', 'CSS', 'SASS', 'Figma'],
    role: 'Developer',
    status: 'completed',
    duration: '3 weeks',
    teamSize: '2 people',
    liveUrl: 'https://sonarykheang123.github.io/bakery-website/',
    repositoryUrl: 'https://github.com/sonarykheang123/bakery-website',
    details: [
      'Designed responsive layout with Figma',
      'Implemented smooth animations',
      'Created interactive product gallery',
      'Built contact form with validation',
      'Optimized for mobile devices'
    ]
  },
  {
    id: 6,
    name: 'Music Club Design',
    description: 'Professional brochure design for a music club with creative visual appeal.',
    image: '/image/music.jpg',
    technologies: ['Figma', 'Design'],
    role: 'Team Lead',
    status: 'completed',
    duration: '2 weeks',
    teamSize: '3 people',
    liveUrl: null,
    repositoryUrl: null,
    details: [
      'Created brand identity and logo',
      'Designed print-ready brochures',
      'Developed color palette and typography',
      'Created social media assets',
      'Delivered final files in multiple formats'
    ]
  }
]

const toggleProjectDetails = (projectId) => {
  const index = expandedProjects.value.indexOf(projectId)
  if (index > -1) {
    expandedProjects.value.splice(index, 1)
  } else {
    expandedProjects.value.push(projectId)
  }
}
</script>