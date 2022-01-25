<template>
  <nav class="navbar navbar-dark">
    <div class="navbar-brand">
      <i class="fas fa-sun ms-3 me-2"></i>
      Vue Weather App
    </div>
    <SearchBar v-if="searchBar" @search-city="(city) => $emit('search-city', city)" />
    <button v-else @click="goBack" class="btn btn-outline-success me-3">Back</button>
  </nav>
</template>

<script>

import SearchBar from './SearchBar.vue'

export default {
  name: 'Navbar',
  components: {
    SearchBar
  },
  props: {
    searchBar: Boolean
  },
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .navbar {
    background-color: #2c3e50;
  }
  .btn {
    color: #fff;
  }
</style>