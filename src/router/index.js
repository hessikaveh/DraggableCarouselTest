import { createRouter, createWebHistory } from "vue-router";
import Cards from "@/components/Cards.vue";
import Draggable from "@/components/Draggable.vue";

const routes = [
  { path: "/", name: "Cards", component: Cards },
  { path: "/drag", name: "Draggable", component: Draggable }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
