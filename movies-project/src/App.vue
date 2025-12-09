<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { axiosRequest } from './requeteAPI/apiRequest.js'
import {onMounted} from "vue";
import axios from "axios";

onMounted(() => {
  axiosRequest();
})

</script>

<template>

</template>

<style scoped>

</style>
