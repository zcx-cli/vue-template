import VueRouter from "vue-router";
import demoPage from "../page/demoPage.vue";

const routes = [
  {
    path: "/",
    name: "demoPage",
    component: demoPage,
  }
];

const router = new VueRouter({
  routes
});

export default router;
