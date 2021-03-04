import Vue from 'vue'
import VueRouter from 'vue-router';
import AnimateCSS from 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDoorOpen, faExclamationTriangle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import firebase from './firebase'
import routes from './routes';
import store from './store';

const router = new VueRouter({
  mode: 'history',
  routes
})

library.add(faDoorOpen, faExclamationTriangle, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(AnimateCSS);
Vue.use(VueRouter);

let app
firebase.auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
