/* eslint-disable no-unused-vars */
import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess(state, payload) {
      state.userInfo = payload;
      state.isLogin = true;
      state.isLoginError = false;
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
    },
    logout(state) {
      state.userInfo = null;
      state.isLogin = false;
      state.isLoginError = false;
    }
  },
  actions: {
    // userInfo 안넣은 상태
    login({ commit }, loginObj) {
      // console.log(loginObj);
      firebase
        .auth()
        .signInWithEmailAndPassword(loginObj.email, loginObj.password)
        .then(result => {
          // console.log(result);

          // Q. token을 저장하는게 db랑 어떤 연관이 지어질지는 모르겠음
          // firebase에서는 알아서 session storage에 저장해줌
          let token = result.user.Sb.refreshToken;
          localStorage.setItem("accessToken", token);

          commit("loginSuccess", loginObj.email); // 이러면 userInfo로 email이 넘어가야
          // 현재 활성화되어 있는 유저의 이메일을 등록해놓는다.
          console.log(firebase.auth().currentUser.email);
          this.state.userInfo = firebase.auth().currentUser.email;

          router.replace({
            name: "index"
          });
        })
        .catch(err => {
          alert("에러" + err.message);
          commit("loginError");
        });
    },
    googleLogin({ commit }, loginObj) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          commit("loginSuccess", loginObj.email);
          this.state.userInfo = firebase.auth().currentUser.email;
          router.replace({
            name: "index"
          });
        })
        .catch(err => {
          alert("err : " + err.message);
        });
    },
    githubLogin() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(firebase.auth().currentUser);
          const token = result.credential.accessToken;
          const user = result.user;
        })
        .catch(function(error) {
          alert("에러 : " + error.message);
        });
    },
    logout({ commit }) {
      commit("logout");
      router.replace({ name: "login" });
    }
  },
  modules: {}
});
