import { createApp } from 'vue'
import App from './App.vue'
import {
  Github, Linkedin, Mail, Phone, Calendar, GraduationCap, ArrowRight,
  Monitor, Database, Settings, Star, Users, Code, Folder, ExternalLink
} from 'lucide-vue-next'
import '@/assets/main.css'

const app = createApp(App)
app.component('Github', Github)
app.component('Linkedin', Linkedin)
app.component('Mail', Mail)
app.component('Phone', Phone)
app.component('Calendar', Calendar)
app.component('GraduationCap', GraduationCap)
app.component('ArrowRight', ArrowRight)
app.component('Monitor', Monitor)
app.component('Database', Database)
app.component('Settings', Settings)
app.component('Star', Star)
app.component('Users', Users)
app.component('Code', Code)
app.component('Folder', Folder)
app.component('ExternalLink', ExternalLink)
app.mount('#app')