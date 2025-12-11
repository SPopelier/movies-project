import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MovieListView from "@/views/MovieListView.vue";
import LoginView from "@/views/LoginView.vue";
import SearchView from "@/views/SearchView.vue";
import MovieCard from "@/components/MovieCard.vue";

const routes = [
    { path: "/", component: HomeView },
    { path: "/movies/", component: MovieListView },
    { path: "/movies/:id", name: "movieCard", component: MovieCard },
    { path: "/login", component: LoginView },
    { path: "/search", component: SearchView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;