import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Exam from '../views/Exam/Exam.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import ChangePassword from '../views/ChangePassword.vue'
import Collections from '../views/Collections.vue'
import Tags from '../views/Tags.vue'
import Register from '../views/Register.vue'
import AddItems from '../views/AddItems.vue'
import QuestionTeacher from '../views/QuestionTeacher.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Exam/:id',
    name: 'Exam',
    component: Exam
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/Collections',
    name: 'Collections',
    component: Collections
  },
  {
    path: '/Tags',
    name: 'Tags',
    component: Tags
  },
  {
    path: '/AddItems',
    name: 'AddItems',
    component: AddItems
  },
  {
    path: '/QuestionTeacher',
    name: 'QuestionTeacher',
    component: QuestionTeacher
  }

]

const router = new VueRouter({
  routes
})

export default router
