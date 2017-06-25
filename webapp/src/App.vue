<template>
  <div id="app">

    <!-- <b-navbar toggleable type="light" variant="default">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-link class="navbar-brand" to="#">
        <span>Logo</span>
      </b-link>
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link v-bind:to="'/'">Home</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/add'">Add Property</router-link></b-nav-item>
          <b-nav-item><router-link v-bind:to="'/map'">Map</router-link></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar> -->

    <b-navbar toggleable type="inverse" variant="primary">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span><router-link v-bind:to="'/'">Logo</router-link></span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar class="ml-auto">
        
        <b-nav-item><router-link v-bind:to="'/'">Home</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/add'">Add Property</router-link></b-nav-item>
        <b-nav-item><router-link v-bind:to="'/map'">Map</router-link></b-nav-item>

       
      </b-nav>
    </b-collapse>
  </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style scoped>
  nav{
    margin-bottom: 20px;
  }
  a{
    color: white;
  }
</style>
