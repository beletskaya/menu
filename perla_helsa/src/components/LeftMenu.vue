<template>
  <div class="left-menu">
    <div class="left-menu__close">
      <img src="../assets/images/close.svg" alt="icon">
    </div>
  </div>
  <div class="overlay"></div>
</template>
<script>

export default {
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.left-menu {
  position: fixed;
  top: 0;
  left: 0;
  background: #FFFFFF;
  max-width: 430px;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 30px 0 30px 30px;
  z-index: 20;
  &__close {

  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(237, 237, 237, 0.5);
  opacity: 1;
  z-index: 15;
  width: 100%;
  height: 100%;
}
</style>