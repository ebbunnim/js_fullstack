<template>
  <div class="login">
    <h3>login</h3>
    <input type="text" placeholder="email" v-model="email" />
    <br />
    <input type="password" placeholder="password" v-model="password" />
    <br />
    <button @click="login">Login</button>
    <p>
      계정이 없다면, 여기서
      <router-link to="/signup">회원가입!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      // hello라는 경로를 가진 페이지로 이동한다.
      // this.$router.replace("hello");
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function() {
            alert("로그인 완료");
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
.login {
  margin-top: 25%;
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

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
