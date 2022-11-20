<template>
  <NavBarVue />
</template>

<script>
import NavBarVue from './components/NavBar.vue';
export default {
  components: {
    NavBarVue,
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
}
p {
  width: 500px;
  margin: auto;
  text-align: justify;
}
</style>
