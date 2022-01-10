import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Exam from '../views/Exam/Exam.vue'
import ExamHead from '../views/Exam/ExamHead.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Exam',
    name: 'Exam',
    component: Exam
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/ExamHead',
    name: 'ExamHead',
    component: ExamHead
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
