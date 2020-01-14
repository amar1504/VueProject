<template>
  <div id="app" style=" background-image: linear-gradient(#8e44ad,#007991);" class="p-4">
    
    <bmiCalculator/>
    <!-- mixin example 
    <product/>
    <sitemap/> -->
  </div>
</template>

<script>
 import bmiCalculator from './components/bmiCalculator.vue'

/* mixin example
import product from './components/productMixin.vue'
import sitemap from './components/sitemapMixin.vue' */

export default {
  name: 'app',
  components: {
    bmiCalculator,
    /* mixin example
    product,
    sitemap */
  },
 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
