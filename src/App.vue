<template>
  <div id="app">
    <header-top>Tab with Vue.js</header-top>
    <div class="container py-5">
      <card></card>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Card from './components/Card'

export default {
  name: 'App',
  components: {
    'header-top': Header,
    'card': Card
  }
}
</script>

<style>
</style>
