import {createApp, h} from 'vue'
import App from './App.vue'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
dom.watch();



import store from './store/index'

const app = createApp({
    render: ()=>h(App)
})

// Make BootstrapVue3 available throughout your project
app.use(BootstrapVue3)

app.component("font-awesome-icon", FontAwesomeIcon)

app.use(store).mount('#app')
