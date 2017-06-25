<!-- <template>
  <div class="container">
  	<div class="row">
  		<div class="col-md-6"> -->
  	<template>
  		<div>

  			<slot name="header">
              default header
            </slot>
  			
	    	<div class="form-group row">
	    		<div class="col-md-4">
	    			<small class="text-muted">Property name</small>
		    		<input type="text" class="form-control" v-model="property.name" v-validate="'required'" name="name">
		    		<small v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</small>
	    		</div>
	    		<div class="col-md-4">
	    			<small class="text-muted">Desks</small>
	    			<input type="number" class="form-control" v-model="property.desks">
	    		</div>
	    		<div class="col-md-4">
	    			<small class="text-muted">SF</small>
	    			<input type="text" class="form-control" v-model="property.sf">
	    		</div>
	    	</div>
		    
		    <div class="form-group row">
		    	<div class="col-md-4">
		    		<small class="text-muted">Address 1</small>
	    			<input type="text" class="form-control" v-model="property.address1" v-validate="'required'" name="address1">
	    			<small v-show="errors.has('address1')" class="text-danger">{{ errors.first('address1') }}</small>
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Address 2</small>
	    			<input type="text" class="form-control" v-model="property.address2">
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">City</small>
	    			<input type="text" class="form-control" v-model="property.city">
		    	</div>
		    </div>

		    <div class="form-group row">
		    	<div class="col-md-4">
		    		<small class="text-muted">State</small>
	    			<input type="text" class="form-control" v-model="property.state">
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Postal code</small>
	    			<input type="number" class="form-control" v-model="property.postalCode">
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Latitude</small>
	    			<input type="number" class="form-control" v-model.number="property.latitude" v-validate="'required'" name="latitude">
	    			<small v-show="errors.has('latitude')" class="text-danger">{{ errors.first('latitude') }}</small>
		    	</div>
		    </div>

		    <div class="form-group row">
		    	<div class="col-md-4">
		    		<small class="text-muted">Longitude</small>
	    			<input type="number" class="form-control" v-model.number="property.longitude" v-validate="'required'" name="longitude">
	    			<small v-show="errors.has('longitude')" class="text-danger">{{ errors.first('longitude') }}</small>
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">County</small><br>
			    	<select class="custom-select" v-model="property.countryId">
			    		<option v-for="country in countries" v-bind:value="country.id">{{ country.shortName }}</option>
			    	</select>
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Regional Category</small>
	    			<input type="text" class="form-control" v-model="property.regionalCategory">
		    	</div>
		    </div>

		    <div class="form-group row">
		    	<div class="col-md-4">
		    		<small class="text-muted">Market Id</small><br>
			    	<select class="custom-select" v-model="property.marketId" v-validate="'required'" name="marketid">
			    		<option v-for="market in markets" v-bind:value="market.id">{{ market.name }}</option>
			    	</select>
			    	<small v-show="errors.has('marketid')" class="text-danger">{{ errors.first('marketid') }}</small>
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Submarket Id</small><br>
			    	<select class="custom-select" v-model="property.submarketId">
			    		<option v-for="market in markets" v-bind:value="market.id">{{ market.name }}</option>
			    	</select>
		    	</div>
		    	<div class="col-md-4">
		    		<small class="text-muted">Location Id</small>
	    		<input type="number" class="form-control" v-model="property.locationId">
		    	</div>
		    </div>

	    	<div class="form-group">
	    		<button class="btn btn-primary" v-show="action == 'save'" v-on:click="save()" :disabled="errors.any()">Save</button>
	    		<button class="btn btn-primary" v-show="action == 'update'" v-on:click="update()" :disabled="errors.any()">Update</button>
	    	</div>

		<modal v-if="modal.open" @close="modal.open = false">
	      <h3 slot="header">{{modal.title}}</h3>
	      <p slot="body">
	        {{ modal.message }}
	      </p>
	    </modal>

	  
  </div>

</template>

<script>

import axios from 'axios';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import Modal from '@/components/common/Modal';

Vue.use(VeeValidate);

export default {
  name: 'property-form',
  data() {
    return {
      markets: [],
      countries: [],
      modal: {
        open: false,
        message: '',
        title: '',
      },
      showModal: false,
    };
  },
  methods: {
    save() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        axios.post((process.env.API_URL).concat('/properties'), this.property).then(
          () => {
            this.modal = {
              open: true,
              message: 'The property has been created correctly',
              title: 'Property created',
            };
            setTimeout(() => (this.$router.push('/')), 2000);
          });
      }
    },
    update() {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        axios.put((process.env.API_URL).concat('/properties/').concat(this.property.id), this.property).then(
        () => {
          this.modal = {
            open: true,
            message: 'The property has been updated correctly',
            title: 'Property updated',
          };
          setTimeout(() => (this.$router.push('/')), 2000);
        });
      }
    },
  },
  created() {
    axios.get((process.env.API_URL).concat('/markets')).then(response => (this.markets = response.data));
    axios.get((process.env.API_URL).concat('/countries')).then(response => (this.countries = response.data));
  },
  props: ['property', 'action'],
  components: { Modal },
};
</script>

<style scoped>
	.input-danger{
		border-color: red;
	}
</style>
