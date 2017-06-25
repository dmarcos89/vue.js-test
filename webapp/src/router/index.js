import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Add from '@/components/Add';
import Map from '@/components/Map';
import Edit from '@/components/Edit';


import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: Edit,
    },
    {
      path: '/map',
      name: 'Map',
      component: Map,
    },
  ],
});
