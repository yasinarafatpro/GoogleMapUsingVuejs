<template>
  <div class="container">
    <HelloWorld msg="Yasin Arafat ! Welcome to Google MAp"/>
    <GoogleMap/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import GoogleMap from './components/GoogleMap.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    GoogleMap
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
