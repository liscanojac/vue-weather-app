<template>
  <form @submit="onSubmit" action="" class="d-flex me-3">
    <input
      v-model="search"
      type="search" 
      placeholder="City Name" 
      class="form-control me-2"
    >
    <button class="btn btn-outline-success">Search</button>
  </form>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.search) {
        alert('Please type a city to search');
        return;
      }

      const city = this.search.toLowerCase();
      this.$emit('search-city', city);

      this.search = '';
    }
  }
}
</script>

<style scoped>
  .btn {
    color: #fff;
  }
</style>