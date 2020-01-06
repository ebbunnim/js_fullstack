<template>
  <div class="signUp">
    <h3>Sign Up</h3>
    <input type="text" placeholder="email" v-model="email" />
    <br />
    <input type="password" placeholder="password" v-model="password" />
    <br />
    <button @click="signUp">signup</button>
    <span>
      <router-link :to="{ name: 'login' }">Login</router-link>으로 돌아가기
    </span>
  </div>
</template>

<script>
import firebase from "firebase";
import router from "../router/index.js";

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
            // alert("회원가입 완료!");
            router.push({ name: "login" });
          },
          function(err) {
            alert("에러 : " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signUp {
  margin-top: 25px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 20%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 15px;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>
