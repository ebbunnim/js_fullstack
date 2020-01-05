import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import firebase from "firebase";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

var firebaseConfig = {
  apiKey: "AIzaSyDZ_IE6KjB8TdtypQfjEP4Tbbc30yehki8",
  authDomain: "vue-login.firebaseapp.com",
  databaseURL: "vue-firebase-login-d7197.firebaseapp.com",
  projectId: "vue-firebase-login-d7197",
  storageBucket: "",
  messagingSenderId: "976300372482",
  appId: "1:976300372482:web:1ed04c2d6746f6afb9ad1b"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
