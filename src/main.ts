import './assets/main.css'
import { RegisterGlobalComponentsPlugin } from "./plugins/register-components";
import { store } from './store';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(RegisterGlobalComponentsPlugin)
    .use(store)
    .mount('#app')
