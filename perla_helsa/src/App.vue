<template>
  <header-top/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #00284F;
}

.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}
nav {
  padding: 30px;

  a {
    color: #00284F;
    font-weight: 400;
    &.router-link-exact-active {
      font-weight: 700;
    }
  }
}


</style>
<script>
import HeaderTop from "@/components/HeaderTop";

export default {
  components: {HeaderTop}
}
</script>