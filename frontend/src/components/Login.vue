<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="email" v-model="email" />
    <br />
    <input type="password" placeholder="password" v-model="password" />
    <br />
    <button @click="login({ email, password })">Login</button>
    <p>
      or login with Google!
      <br />
      <button class="social-button" @click="googleLogin({ email, password })">
        <img src="../assets/google-logo.png" alt="google Logo" />
      </button>
    </p>

    <p>
      계정이 없다면, 여기서
      <router-link to="/signup">회원가입!</router-link>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login", "googleLogin"])
  }
};
</script>

<style scoped>
.social-button {
  width: 75px;
  background: "white";
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0, 2);
  outline: 0;
  border: 0;
}

.social-button:active {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0, 1);
}

.social-button img {
  width: 100%;
}

.login {
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

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
