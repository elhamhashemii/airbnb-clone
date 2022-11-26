<template>
  <MainLayout />
  <div class="custom-container">
    <router-view/>
  </div>
</template>

<script>
import MainLayout from './components/layout/MainLayout.vue';
export default {
  components:{
    MainLayout
  }
}
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500&display=swap');
#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.custom-container{
  padding: 0 70px;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
