import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase";
import store from "./store";
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var firebaseConfig = {
  apiKey: "AIzaSyDZ_IE6KjB8TdtypQfjEP4Tbbc30yehki8",
  authDomain: "vue-firebase-login-d7197.firebaseapp.com",
  databaseURL: "vue-firebase-login-d7197.firebaseio.com",
  projectId: "vue-firebase-login-d7197",
  storageBucket: "vue-firebase-login-d7197.appspot.com",
  messagingSenderId: "976300372482",
  appId: "1:976300372482:web:1ed04c2d6746f6afb9ad1b"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
