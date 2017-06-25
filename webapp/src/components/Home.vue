<template>
  <div class="container">

    <div class="row text-center header">
      <div class="col-md-6 offset-md-3">
        <h2>
          Property list
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostru
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="card-columns">
          <div class="card" v-for="p in properties">
            <div class="card-block">
              <h4 class="card-title"><router-link v-bind:to="{ name: 'edit', params: { id: p.id }}"> {{p.name}} </router-link></h4>
              <p class="card-text">
                {{ p.address1 }}<br>
                {{ p.city }}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import lodash from 'lodash';
import VueLodash from 'vue-lodash/dist/vue-lodash.min';

Vue.use(VueLodash, lodash);

export default {

  name: 'home',
  data() {
    return {
      properties: {},
    };
  },
  created() {
    axios.get((process.env.API_URL).concat('/properties')).then((response) => {
      this.properties = this._.orderBy(response.data, ['name'], ['desc']); // ORDER LIST USING LODASH
      // this.properties = response.data; // UNORDERED LIST
    });
  },
};
</script>

<style>
  .header{
    margin-bottom: 20px;
  }

  .header h2{
    margin-bottom: 20px;
  }
</style>
