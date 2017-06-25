<template>
  <div class="container-fluid">
    <div class="col-xs-12 col-md-12">
      <gmap-map :center="center" :zoom="13" class="map">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="{lat:+m.latitude, lng:+m.longitude}"
          :clickable="true"
          @click="openModal(m)"
        ></gmap-marker>
      </gmap-map>
    </div>
    
    
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">{{selected.name}}</h3>
      <p slot="body">
        Address: {{selected.address1}}
        <br>
        Market: {{selectedMarket}}
      </p>
    </modal>
    

  </div>
  
</template>
 
<script>

  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import axios from 'axios';
  import Modal from '@/components/common/Modal';

  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GOOGLE_KEY,
    },
  });

  export default {
    data() {
      return {
        center: { lat: 40.783060, lng: -73.971249 },
        markers: [],
        selected: {},
        selectedMarket: '',
        showModal: false,
      };
    },

    methods: {
      openModal(m) {
        axios.get(((process.env.API_URL).concat('/markets/')).concat(m.marketId)).then(response => (this.selectedMarket = response.data.name));
        this.selected = m;
        this.showModal = true;
      },
    },

    created() {
      axios.get((process.env.API_URL).concat('/properties')).then(response => (this.markers = response.data));
    },

    components: { Modal },
  };
</script>

<style scoped>
  .map{
    width: 100%; 
    height: 600px;
  }
</style>
