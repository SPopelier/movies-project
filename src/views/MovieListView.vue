<script>
import axios from "@/api/axios.js";
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "MovieListView" ,
  components: {MovieCard},
  data() {
    return {
      movies: []
    }
  },

  mounted() {
    axios.get("/movies").then(res => {
      this.movies = res.data.member;
    })
  }
};

</script>

<template>
  <h1>Movies</h1>
  <div class="moviesTitle">
    <div v-for="m in movies">
      <h2> {{m.title}} </h2>
      <p>{{m.year}}</p>
      <img :src="m.poster"/>
    </div>
  </div>

</template>