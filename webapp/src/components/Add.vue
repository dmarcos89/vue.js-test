<template>
	<div>
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <property-form :property="property" :action="action">
              <h3 slot="header">Add new property</h3>
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
import Router from 'vue-router';
import PropertyForm from '@/components/common/PropertyForm';
import Latlng from '@/components/common/LatLng';

Vue.use(Router);

export default {
  name: 'edit',
  data() {
    return {
      property: {},
      action: 'save',
      marker: { lat: 40.783060, lng: -73.971249 },
    };
  },
  components: { PropertyForm, Latlng },
};
</script>

<style>
	
</style>
