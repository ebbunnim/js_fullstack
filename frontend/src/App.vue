<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'index' }" exact>Home</router-link> |
      <router-link v-if="!isLogin" :to="{ name: 'login' }">Login</router-link> |
      <router-link v-if="!isLogin" :to="{ name: 'signup' }">Signup</router-link>

      <p class="logout_p">
        <a v-if="isLogin" @click="logout" class="cursor_event">Logout</a>
      </p>
      <p v-if="isLogin">{{ userInfo }}님은 활동중입니다.</p>
      <!-- <router-link to="/about">sth</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// App.vue에 임의로 script 태그를 넣은 상태임
export default {
  methods: {
    ...mapActions(["logout"])
  },
  computed: {
    ...mapState(["isLogin", "userInfo"])
  }
};
</script>

<style>
.logout_p {
  display: inline;
}

.cursor_event {
  cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
