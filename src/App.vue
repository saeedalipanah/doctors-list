<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/containers/Navbar.vue'
import Footer from './components/containers/Footer.vue'
</script>

<template>

    <header class="navigation">
      <Navbar></Navbar>
    </header>
    <main class="app">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <Footer></Footer>
</template>
