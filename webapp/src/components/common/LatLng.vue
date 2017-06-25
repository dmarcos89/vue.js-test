<template>
<div>
		<gmap-map :center="marker" :zoom="14" class="map">
			 <gmap-marker 
	      :position="marker"
	      :draggable="true"
	      @position_changed="updateMarker"
	    ></gmap-marker>
		</gmap-map>

		<p>
		  Move marker to retrieve new latitude and longitude. Also, change inputs to see the new updated position for the marker</p>
	  
	<small>Latitude:</small> <input type="number" class="form-control" v-model.number.lazy="marker.lat" /> 
	<small>Longitude:</small> <input type="number" class="form-control" v-model.number.lazy="marker.lng" />
</div>
	
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_KEY,
  },
});
export default {
  name: 'latlng',
  // data() {
  //   return {
  //     marker: { lat: 40.783060, lng: -73.971249 },
  //   };
  // },
  methods: {
    updateMarker(newPosition) {
      this.marker.lat = newPosition.lat();
      this.marker.lng = newPosition.lng();
    },
  },
  props: ['marker'],
};
</script>

<style scoped>
	.map{
    	width: 100%; 
    	height: 400px;
  	}
</style>
