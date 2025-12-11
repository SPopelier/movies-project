<script>
import router from "@/router/index.js";
import MovieCard from "@/components/MovieCard.vue";
import {createHref} from "vue-router/dist/devtools-BLCumUwL.mjs";
import axios from "@/api/axios.js";


export default {
  name: "HomeView",
  components: {MovieCard},
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

  <main>
    <h1 class="texte-center">Your favorites Movies</h1>
    <div class="card">
      <div class="card-header">
        Your Profil
      </div>
      <div class="card-body">
        <h5 class="text-center card-title">To Choose your favorite movie</h5>
      </div>
      <router-link to="/login">
        <button>Connection</button>
      </router-link>
    </div>
    <div class="container">
      <div class="row align-items-center">
        <h3 class="text-center d-flex text-bg-light">Your personnal selection</h3>
        <div class="col-12 col-md-6 col-lg-4 item">
          <img src="@/assets/item-list.png" alt="item" class="icon"/>
          <h4>Your personnal list</h4>
          <p>texte</p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 item">
          <img src="@/assets/item-star.png" alt="item" class="icon"/>
          <h4>Your votes ranked</h4>
          <p>texte</p>
        </div>
        <div class="col-12 col-md-6 col-lg-4 item">
          <img src="@/assets/item-library.png" alt="item" class="icon"/>
          <h4>Your film library</h4>
          <p>texte</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="item">
        <img src="@/assets/item-heart.png" alt="item" class="icon"/>
        <p>"I love this movies ! It rocks!"</p>
        <img src="@/assets/item-user.png" alt="item" class="icon"/>
        <img src="@/assets/item-stars.png" alt="item" class="icon"/>
        <p>{{ user }}</p>
      </div>
    </div>
    <div class="container">
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
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 col-lg-4 item">

        </div>
      </div>
    </div>
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
</style>