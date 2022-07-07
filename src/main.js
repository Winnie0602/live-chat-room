import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

import './assets/main.css'

//先定義
let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    //如果app裡面沒東西的話，才會跑下面這段，即重新與firebase後端連結
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})