import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Exam from '../views/Exam/Exam.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
