<script>
import router from "@/router/index.js";
import MovieCard from "@/components/MovieCard.vue";
import {createHref} from "vue-router/dist/devtools-BLCumUwL.mjs";
import axios from "@/api/axios.js";
import FavoriteMovie from "@/components/FavoriteMovie.vue";


export default {
  name: "HomeView",
  components: {MovieCard, FavoriteMovie},
  methods: {},
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    axios.get("/movies?itemsPerPage=3").then(res => {
      this.movies = res.data.member;
      console.log(this.movies);
    })
  }
}
</script>

<template>

  <main class="bg-dark text-light">
    <h1 class="p-5 text-center">Your favorites Movies</h1>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex flex-column align-items-center">
          <h5 class="text-center">To Choose your favorite movie</h5>
          <router-link to="/login">
            <button class="btn purple m-2">Connection</button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <h3 class="text-center d-flex my-4 ">Your personnal selection</h3>
        <div class="col-12 col-md-6 col-lg-4 item m-4 p-2 pt-3 rounded-4 card-body purple">
          <img src="@/assets/item-list.png" alt="item" class="icon"/>
          <div class="card-title">
            <h4>Your personnal list</h4>
          </div>
          <div class="card-text">
            <p class="text-center">Create your own curated list of movies you want to watch or revisit. Add your favorites, organize them your way, and keep track of the titles that matter most to you.</p>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 item m-4 p-2 pt-3 rounded-4 card-body purple">
          <img src="@/assets/item-star.png" alt="item" class="icon"/>
          <h4>Your votes ranked</h4>
          <p class="text-center">See all the movies you’ve rated, automatically sorted by your preferences. A perfect overview of your personal top list and a great way to compare your tastes with other users.</p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 item m-4 p-2 pt-3 rounded-4 card-body purple">
          <img src="@/assets/item-library.png" alt="item" class="icon"/>
          <h4>Your film library</h4>
          <p class="text-center">Explore your complete collection of movies in one place — posters, details, and all your interactions. Easily browse, sort, and rediscover every title you’ve added.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="item">
        <img src="@/assets/item-heart.png" alt="item" class="icon"/>
        <p>"I love this movies ! It rocks!"</p>
        <img src="@/assets/item-user.png" alt="item" class="icon"/>
        <img src="@/assets/item-stars.png" alt="item" class="icon"/>
        <p>user</p>
      </div>
    </div>
    <div class="container my-4">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-lg-4" v-for="m in movies">
          <div class="img-movies">
            <router-link :to="{name: 'movieCard', params: {id: m.id}}">
              <img :src="m.poster" class="img-fluid"/>
            </router-link>
            <h3>{{ m.title }}</h3>
            <p>{{ m.fullPlot }}</p>
          </div>
        </div>
      </div>
    </div>
    <FavoriteMovie/>

  </main>
</template>

<style>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 24px;
  height: 24px;
}
.purple {
  color: white !important;
  background-color: purple !important;
  border-color: purple !important;
}

</style>