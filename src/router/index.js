import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import DogFacts from '@/components/DogFacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dogfacts',
      name: 'dogFacts',
      component: DogFacts
    }
  ]
})

export default router
