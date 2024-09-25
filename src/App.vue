<template>
  <Navbar />
  <section class="h-full grid grid-cols-5 px-8 gap-4 pb-4">
    <Sidebar />
    <MainContent />
  </section>
</template>

<script setup>
import Navbar from './components/navbar.vue'
import Sidebar from './components/sidebar.vue'
import MainContent from './components/main-content.vue'
</script>