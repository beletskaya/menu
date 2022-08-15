<template>
  <header class="header">
      <div class="container">
        <div class="header__top">
          <div class="header__top-left">
            <img class="icon" src="../assets/images/gamburger.svg" alt="icon" @click="openMenu">
            <img class="icon" src="../assets/images/searching.svg" alt="icon">
          </div>
          <div class="header__top-logo">
            <img src="../assets/images/logo.svg" alt="logo">
          </div>
          <div class="header__top-right">
            <img class="icon" src="../assets/images/person.svg" alt="icon">
            <img class="icon" src="../assets/images/bag.svg" alt="icon">
          </div>
        </div>
      </div>
      <div class="header__menu">
        <nav>
          <a href="#"
             v-for="item in links"
             :key="item.id"
             @mouseover="overElem = true"
             @mouseleave="overElem = false"
          > {{ item.name }}</a>
        </nav>
        <div v-show="overElem" class="card-bd">
          <div class="container card-container">
            <card-popular-search/>
            <card-product/>
          </div>
        </div>

      </div>
    </header>
    <left-menu v-show="leftMenu" />
</template>

<script>
import CardProduct from "@/components/CardProduct";
import CardPopularSearch from "@/components/CardPopularSearch";
import LeftMenu from "@/components/LeftMenu";

export default {
  name: 'Header',
  components: {LeftMenu, CardPopularSearch, CardProduct},
  data() {
    return {
      links: [
        {
          name: 'Омега-3',
          id: 1
        }, {
          name: 'Витамины',
          id: 2
        }, {
          name: 'Добавки',
          id: 3
        }, {
          name: 'Доставка',
          id: 4
        }, {
          name: 'О нас',
          id: 5
        }],
      overElem: false,
      leftMenu: true
    }
  },
  methods: {
    openMenu() {
      this.leftMenu = true
      console.log('123')
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  background: #FFFFFF;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;

    &-left img:first-child {
      margin-right: 40px;
      cursor: pointer;
    }

    &-right img:last-child {
      margin-left: 40px;
    }

    img.icon {
      width: 25px;
    }
  }

  &__menu {
    margin-top: 20px;

    nav {
      text-align: center;

      a {
        padding: 15px;
        font-size: 17px;
        line-height: 20px;

        &:hover {
          font-weight: bold;
        }
      }
    }
  }
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;
  margin-top: 24px;
}
.card-bd {
  background: #F9F9F9;
}
</style>
