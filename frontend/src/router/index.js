import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/IndexPage.vue";
import Show from "../views/ShowPage.vue";
import Movie from "../views/Movie.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import Hello from "../components/Hello.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/storeMovies",
    name: "index",
    component: Index
  },
  {
    path: "/storeMovies/:id",
    name: "show",
    component: Show
  },
  {
    // 위는 다른 backend - router와 연결됨
    path: "/getMovies",
    name: "movie",
    component: Movie
  },
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  },
  {
    path: "/hello",
    name: "hello",
    component: Hello
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
