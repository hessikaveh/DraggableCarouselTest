import { createRouter, createWebHistory } from "vue-router";
import Cards from "@/components/Cards.vue";
import Draggable from "@/components/Draggable.vue";
import DraggableCards from "@/components/DraggableCards.vue";

const routes = [
  { path: "/", name: "Cards", component: Cards },
  { path: "/drag", name: "Draggable", component: Draggable },
  { path: "/dragCards", name: "DraggableCards", component: DraggableCards }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
