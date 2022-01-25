<template>
  <Navbar />
  <Details />
</template>

<script>
import axios from "axios";
import Navbar from '@/components/Navbar.vue'
import Details from '@/components/Details.vue'
const { VUE_APP_API_KEY } = process.env;

export default {
  name: 'CityDetails',
  components: {
    Navbar,
    Details
  },
  // props: ['id'],
  // now that router index has props in true for this route, data is not needed anymore
  data() {
    return {
      id: this.$route.params.id,
      city: {}
    }
  },
  created() {
    this.getCity()
  },
  methods: {
    async getCity() {
    await axios(`http://api.openweathermap.org/data/2.5/weather?id=${this.id}&appid=${VUE_APP_API_KEY}&units=metric`)
      .then((json) => {
        return json.data;
      })
      .then((response) => {
        const city = {
            feels_like: Math.round(response.main.feels_like),
            humidity: response.main.humidity,
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            wind: response.wind.speed,
            temp: Math.round(response.main.temp),
            name: response.name,
            country: response.sys.country,
            description: response.weather[0].description
          };
          this.city = city
      })
      .catch((error) => console.log(error));
    }
  }
}
</script>

<style>

</style>