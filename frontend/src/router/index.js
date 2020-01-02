import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/IndexPage.vue";
import Show from "../views/ShowPage.vue";
import Movie from "../views/ShowPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/:id",
    name: "show",
    component: Show
  },
  {
    path: "movies/movie",
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
