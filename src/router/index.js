import { createRouter, createWebHistory } from "@/router/index.js";
import HomeView from "./views/HomeView";
import MovieListView from "@/views/MovieListView.vue";
import MovieDetailView from "@/views/MovieDetailView.vue";
import LoginView from "@/views/LoginView.vue";
import SearchView from "@/views/SearchView.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/movies/", component: MovieListView },
    { path: "/movies/:id", component: MovieDetailView },
    { path: "/login", component: LoginView },
    { path: "/search", component: SearchView },
];

export default createRouter({
    history: createWebHistory(),
    routes,
})