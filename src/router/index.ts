import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import FavoriteView from "../views/FavoriteView.vue";
import RecentView from "../views/RecentView.vue";
import AllView from "../views/AllView.vue";
import GameView from '../views/GameView.vue'

const routes = [
    { path: "/", component: MainView },
    { path: "/favorite", component: FavoriteView },
    { path: "/recent", component: RecentView },
    { path: "/all", component: AllView },
    { path: "/game/:gameName",  component: GameView},
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
