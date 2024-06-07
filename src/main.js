import { createApp } from 'vue';

//import style
import './assets/scss/main.scss';

//import font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far)

//import vue root component
import App from './App.vue';

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
