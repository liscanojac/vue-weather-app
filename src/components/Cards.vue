<template>
  <div>
    <div class="row my-3">
      <div class="col-12 col-md-6 col-lg-3 my-2" :key="city.id" v-for="city in cities">
        <router-link class="router-link" :to="{ name: 'CityDetails', params: { id: city.id } }">
          <Card :city="city" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'Cards',
  props: {
    cities: Array,
    city: Object
  },
  components: {
    Card
  }
}
</script>

<style scoped>
  .router-link{
    text-decoration: none;
    color: inherit;
  }
</style>