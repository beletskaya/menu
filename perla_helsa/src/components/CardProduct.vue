<template>
  <div class="cards">
    <p class="cards__popular">Популярное в этой категории</p>
    <div class="cards__wrapper">
      <div class="cards__wrapper-item" v-for="item in items" :key="item.id">
        <div class="cards__wrapper-item__img">
          <img :src="item.img" alt="card">
        </div>
        <div class="cards__wrapper-item__text">
          <p> {{ item.name }} </p>
          <p> {{ item.desc }} </p>
          <p> {{ item.amount }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardCodImg from '../assets/images/card-cod.png';
import cardTunaImg from '../assets/images/card-tuna.png';

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: cardCodImg,
          name: 'Коллаген',
          desc: 'Пептиды 1-типа из Франции',
          amount: '30 порций в стиках'
        },{
          id: 2,
          img: cardTunaImg,
          name: 'Витамин D3 2000 МЕ',
          desc: 'Пептиды 1-типа из Франции',
          amount: '60 капсул'
        },{
          id: 3,
          img: cardCodImg,
          name: 'Омега-3 Треска',
          desc: 'Пептиды 1-типа из Франции',
          amount: '120 капсул'
        },{
          id: 4,
          img: cardTunaImg,
          name: 'Омега-3 Тунец',
          desc: 'Пептиды 1-типа из Франции',
          amount: '120 капсул'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
.cards {
  padding: 0 0 50px;
  width: 71%;

  &__popular {
    font-size: 15px;
    line-height: 18px;
    color: rgba(0, 40, 79, 0.4);
    margin-bottom: 30px;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;

    &-item {
      padding-right: 20px;

      &__img {
        background: #EFEFEF;
        width: 230px;
        height: 230px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &__text {
        margin-top: 30px;

        p:first-child {
          font-size: 17px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        p:nth-child(2), p:last-child {
          font-size: 15px;
        }
        p:last-child {
          color: rgba(0, 40, 79, 0.4);
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
