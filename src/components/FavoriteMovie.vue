<script>
import MovieCard from "@/components/MovieCard.vue";
import axios from "@/api/axios.js";

export default {
  name: "FavoriteMovies",
  components: {MovieCard},
  methods: {},
  data() {
    return {
      movie: null
    }
  },
  mounted() {
    axios.get("movies/20706").then(res => {
      this.movie = res.data;
      console.log(this.movie);
    })
  }
}

</script>

<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-lg-6 d-flex flex-row" v-if="movie!= null">
          <router-link :to="{name: 'movieCard', params: {id: movie.id}}">
            <img :src="movie.poster" class="img-fluid"/>
          </router-link>
      </div>
      <div class="col-12 col-lg-6 d-flex flex-column" v-if="movie!= null">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.fullPlot }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>