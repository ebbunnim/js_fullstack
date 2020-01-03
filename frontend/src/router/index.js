import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/IndexPage.vue";
import Show from "../views/ShowPage.vue";
import Movie from "../views/Movie.vue";

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
    // 위는 다른 backend - router
    path: "/getMovies",
    name: "movie",
    component: Movie
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
