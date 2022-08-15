<template>
  <div class="search">
    <p class="search__title">Most popular searches</p>
    <div class="search__text">
      <p v-for="text in searchText"
         :key="text.id">
          {{ text.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: [{
          id: 1,
          name: 'Коллаген'
        }, {
          id: 2,
          name: 'Омега-3'
        }, {
          id: 3,
          name: 'Витамин Д3'
        }, {
          id: 4,
          name: 'Сквален'
        }, {
          id: 5,
          name: 'Витамины для детей'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.search{

  &__title {
    font-size: 15px;
    color: rgba(0, 40, 79, 0.4);
  }

  &__text {
    p {
      font-size: 17px;
      margin-top: 28px;
    }
  }
}
</style>