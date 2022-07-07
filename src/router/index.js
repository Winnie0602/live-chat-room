import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

//建立路由守衛
const requireAuth =(to, from, next) => {
  let user = projectAuth.currentUser
  console.log('現在登入的用戶是：', user)
  if(!user){
    next({ name: 'Welcome'})
  } else {
    next() //預設路徑
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
