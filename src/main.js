import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import global from '@/global';


const app = createApp(App);

app.config.globalProperties.$global = global;

require("@/store/subscriber")

axios.defaults.baseURL = "http://127.0.0.1:8000/api/crm";

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {

    createApp(App).use(store).use(router).mount('#app')
    
}).catch(() => {
    router.push({ name: 'Signin' })
})
  

