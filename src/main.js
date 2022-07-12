import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

import {createAuth0} from "@auth0/auth0-vue";

const app = createApp(App)

app.use(router)
app.use(
    createAuth0({
        domain: "dev-epk7auvt.us.auth0.com",
        client_id: "HJyw63LiVUTXnUat6QQyXjNAEX4O9SQQ",
        redirect_uri: window.location.origin,
    })
);

app.mount('#app')
