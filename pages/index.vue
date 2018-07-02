<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>

        <h1>HeolloWorld</h1>
        <li v-for="(product, key) in products" :key="key">
          <ul>{{product.title}}</ul>
        </li>
       
         <h1>{{all}}</h1>
         <h1>{{count}}</h1>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';
import { db } from "../plugins/firebase";
import { mapState } from 'vuex';



export default {
  components: {
    Logo,
    VuetifyLogo
  }, 

  data() {
    return {
     
    };
  },
  computed:{
    count()
    {
        return this.$store.state.products.all;
    },
    ...mapState('products', ['all'])
  },
  created(){
    this.$store.dispatch('products/getAllProducts');
  },
  
  firestore() {
    return {
      //products: 
      //products: db.collection("products")
    };
  }
};
</script>
