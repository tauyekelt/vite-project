<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';
import UserList from './components/DogFacts.vue';


</script>

<template>
  <header>
   <div>
       
      <Navbar/>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
