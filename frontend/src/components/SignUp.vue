<template>
  <div class="sign-up">
    <h1>회원가입</h1>
    <input type="text" placeholder="email" v-model="email" />
    <br />
    <input type="password" placeholder="password" v-model="password" />
    <br />
    <button @click="signUp">가입하기</button>
    <span>
      또는
      <router-link to="/login">로그인</router-link>으로 돌아가기
    </span>
  </div>
</template>

<script>
import firebase from "firebase";

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
            alert("회원가입 완료!");
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

span {
  display: block;
  margin-top: 20px;
  font-size: 15px;
}
</style>
