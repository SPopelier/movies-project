<script>
import HomeView from "@/views/HomeView.vue";
import axios from "@/api/axios.js";

export default {
  name: "MoviesCard",
  components: {},
  methods: {},
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    axios.get("movies/20550").then(res => {
      this.movies = res.data;
      console.log(this.movies);
    })
  }
}
</script>

<template>
  User {{ $route.params.id }}
  <!--
  <div class="container">
    <div class="row align-items-center">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="img-movies">
          <router-link :to="{name: 'movieCard', params: {id: movies.id}}">
            <img :src="movies.poster" class="img-fluid"/>
          </router-link>
          <h3>{{ movies.title }}</h3>
          <p>{{ movies.fullPlot }}</p>
        </div>
      </div>
    </div>
  </div>+-->
</template>

<style>

</style>