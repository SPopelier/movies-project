<script setup>
import { ref, onMounted } from "vue";
import api from "./api/axios.js";
import MovieCard from "@/components/MovieCard.vue";

const movies = ref([]);

onMounted(async () => {
  const res = await api.get("/movies");
  movies.value = res.data;
});
</script>

<template>
  <h1>Movies</h1>
  <div class="movies">
    <MovieCard v-for="m in movies" :key="m.id" :movie="m" />
  </div>
</template>