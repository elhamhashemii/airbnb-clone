import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icons from "./icons"


createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store).use(router).mount('#app')
