<template>
  <div id="app">
    <Navbar/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar'
export default {
    name:'App',
    components: {
      Navbar
    },
    
   
}
</script>

<style>

</style>
