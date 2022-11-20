<template>
  <div>
  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name:'about'}">About</router-link>  |
    <router-link :to="{name:'jobs'}">Job</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav {
    padding: 30px;
    }

    nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    }

    nav a.router-link-exact-active {
    color: #fff;
    background: crimson;
    padding: 8px;
    border-radius: 5px;
    }
</style>