<template>
  <div class="home">
    <cards-home/>
  </div>
</template>

<script>
import CardsHome from '@/components/CardsHome.vue'

export default {
  name: 'HeaderView',
  components: {
    CardsHome
  }
}
</script>
