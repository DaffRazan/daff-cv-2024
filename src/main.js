import {
  createApp
} from 'vue'
import App from './App.vue'
import './assets/index.css'
import router from './router'
import 'aos/dist/aos.css'
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

createApp(App).use(router).mount('#app')
