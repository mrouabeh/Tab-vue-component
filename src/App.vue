<template>
  <div id="app">
    <header-top>Tab with Vue.js</header-top>
    <div class="container py-5">
      <tab-component></tab-component>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import TabComponent from './components/Tab'

export default {
  name: 'App',
  components: {
    'header-top': Header,
    'tab-component': TabComponent
  }
}
</script>

<style>
</style>
