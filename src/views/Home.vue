<template>
  <Navbar :searchBar="true" @search-city="searchCity" />
  <div class="container">
    <Cards :cities="cities" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import Navbar from '@/components/Navbar.vue'
import Cards from '@/components/Cards.vue'
const { VUE_APP_API_KEY } = process.env;

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  components: {
    Navbar,
    Cards
  },
  data() {
    return {
      cities: []
    }
  },
  methods: {
    async searchCity(city) {
      await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${VUE_APP_API_KEY}&units=metric`)
        .then((json) => {
          
          return json.data;
        })
        .then((response) => {
          
          const newCity = {
            feels_like: Math.round(response.main.feels_like),
            humidity: response.main.humidity,
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            name: response.name
          };
          this.cities = [...this.cities, newCity]
        })
        .catch(error => {
          console.log(error);
          alert('City not found')
        });
    }
  }
}
</script>
