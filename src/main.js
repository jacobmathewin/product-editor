import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

Vue.config.productionTip = false;

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faPlus, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faEdit, faTrash, faPlus, faSave, faTimesCircle);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

new Vue({
  render: h => h(App),
  store,
  provide: function() {
      return {
        eventBus: new Vue()
      }
  },
  beforeCreate() {
      this.$store.commit('initializeStore');
  }
}).$mount('#app');

store.subscribe((mutation, state)=>{
    localStorage.setItem('store', JSON.stringify(state));
});