import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/skills', component: SkillsView },
  { path: '/projects', component: ProjectsView },
  { path: '/contact', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router