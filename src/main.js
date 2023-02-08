import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// createApp(App).mount('#app')
const app=createApp(App)
app.use(VueGoogleMaps,{
    load:{
        key:'AIzaSyAIqUv1w25WNBn1FJ8DuYWH0Qv54p9QUE4'
    },
    autobindAllEvents: true,
}).mount('#app')
