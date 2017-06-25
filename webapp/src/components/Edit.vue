<template>
	<div>
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <property-form :property="property" :action="action">
              <h3 slot="header">Edit property: {{ property.name}} </h3>
            </property-form>
          </div>
          <div class="col-md-6">
            <latlng :marker="marker"></latlng>
          </div>
      </div>
    </div>
	</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import Router from 'vue-router';
import PropertyForm from '@/components/common/PropertyForm';
import Latlng from '@/components/common/LatLng';

Vue.use(Router);

export default {
  name: 'edit',
  data() {
    return {
      property: {},
      action: 'update',
      marker: {
        lat: '',
        lng: '',
      },
    };
  },
  created() {
    axios.get((process.env.API_URL).concat('/properties/').concat(this.$route.params.id)).then((response) => {
      this.property = response.data;
      this.marker.lat = this.property.latitude;
      this.marker.lng = this.property.longitude;
      // console.log(this.property.longitude);
    });
  },
  components: { PropertyForm, Latlng },
};
</script>

<style>
	
</style>
