import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Employee from '../views/Employee.vue'
import Employer from '../views/Employer_Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
  {
    path: '/employer',
    name: 'Employer',
    component: Employer
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes,

})

export default router
