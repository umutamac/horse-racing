import './assets/main.css'
import { RegisterGlobalComponentsPlugin } from "./plugins/register-components";

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(RegisterGlobalComponentsPlugin)
    .mount('#app')
