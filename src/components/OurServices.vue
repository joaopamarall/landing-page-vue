<template>
  <div class="services">
    <div class="services__items">
      <div class="services__item" v-for="(item, index) in items" :key="index">
        <div class="services__icon">
          <img :src="item.icon" />
        </div>
        <div class="services__title">
          {{ item.title }}
        </div>
        <div class="services__text">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: require("@/assets/Frame1.png"),
          title: "Search doctor",
          text: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
        },
        {
          icon: require("@/assets/Frame2.png"),
          title: "Online pharmacy",
          text: "Buy  your medicines with our mobile application with a simple delivery system",
        },
        {
          icon: require("@/assets/Frame3.png"),
          title: "Consultation",
          text: "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          icon: require("@/assets/Frame4.png"),
          title: "Details info",
          text: "Free consultation with our trusted doctors and get the best recomendations",
        },
        {
          icon: require("@/assets/Frame5.png"),
          title: "Emergency care",
          text: "You can get 24/7 urgent care for yourself or your children and your lovely family",
        },
        {
          icon: require("@/assets/Frame6.png"),
          title: "Tracking",
          text: "Track and save your medical history and health data",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.services {
  &__icon {
    width: 100%;
    height: auto;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin: 80px 0 70px;
  }

  &__item {
    background-color: #ffffff;
    border-radius: 20px;
    padding: 48px 12px 40px 36px;
    box-shadow: 10px 40px 50px 0px #dfe4f666;
    align-items: flex-start;
    text-align: left;
  }

  &__title {
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    line-height: 56px;
    margin: 24px 0 0;
  }

  &__text {
    font-size: 16px;
    font-weight: 300;
    color: #7d7987;
    line-height: 28px;
    width: 100%;
    height: auto;
  }
}
</style>
