import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

Vue.config.productionTip = false

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