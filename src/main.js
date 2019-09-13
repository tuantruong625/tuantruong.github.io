import Vue from 'vue';
import 'normalize.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDrawPolygon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLinkedin, faGithub, faBehanceSquare, faVuejs, faSketch, faHtml5, faSass, faCss3, faJs, faFigma,
} from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';

library.add(
  faLinkedin,
  faGithub,
  faBehanceSquare,
  faVuejs,
  faSketch,
  faHtml5,
  faSass,
  faCss3,
  faJs,
  faFigma,
  faDrawPolygon,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
