<template>
  <div class="">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{city.name}}</h4>
      </div>
      <div class="row">
        <div class="col-6">
          <p class="item mb-0">Feels like</p>
          <h5>{{city.feels_like}} &deg;C</h5>
        </div>
        <div class="col-6">
          <p class="item mb-0">Humidity</p>
          <h5>{{city.humidity}}%</h5>
        </div>
        <div class="col-6">
          <p class="item mb-0">Humidity</p>
          <h5>{{city.humidity}}%</h5>
        </div>
        <div class="col-6">
          <p class="item mb-0">Forecast</p>
          <img className="iconoClima" :src="`http://openweathermap.org/img/wn/${city.img}@2x.png`" width="40" height="40" alt="" />
        </div>
        <div class="col-6">
          <p class="item mb-0">Day</p>
          <h5>{{city.max}} &deg;C</h5>
        </div>
        <div class="col-6">
          <p class="item mb-0">Night</p>
          <h5>{{city.min}} &deg;C</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    city: Object
  }
}
</script>

<style scoped>
  .item{
    font-size: 12px;
  }
  .card {
    text-align: center;
  }
</style>