<template>
  <div>
    <NavBarVue />
    <div class="col">
      <button @click="redirect">Redirect</button>
      <button @click="goForward">Go Forward</button>
      <button @click="goBack">Go Back</button>
    </div>
  </div>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
export default {
  components: {
    NavBarVue,
  },
  methods: {
    redirect() {
      this.$router.push({name:'home'});
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
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
.col {
  padding-top: 30px;
}
.col button {
  padding: 5px;
  margin: 5px;
  cursor: pointer;
}
p {
  width: 500px;
  margin: auto;
  text-align: justify;
}
</style>
