<template>
  <div class="article">
    <div class="article__header">
      <h1>Check out our latest article</h1>
      <hr class="separator" />
    </div>
    <div class="article__items">
      <div class="article__item" v-for="(item, index) in items" :key="index">
        <div class="article__icon">
          <img :src="item.icon" />
        </div>
        <div class="article__content">
          <h3 class="article__title">
            {{ item.title }}
          </h3>
          <div class="article__text">
            {{ item.text }}
          </div>
          <button>Read more <img src="../assets/right-btn.svg" /></button>
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
          icon: require("@/assets/image2.png"),
          title: "Disease detection, check up in the laboratory",
          text: "In this case, the role of the health laboratory is very important to do a disease detection...",
        },
        {
          icon: require("@/assets/image3.png"),
          title: "Herbal medicines that are safe for consumption",
          text: "Herbal medicine is very widely used at this time because of its very good for your health...",
        },
        {
          icon: require("@/assets/image4.png"),
          title: "Natural care for healthy facial skin",
          text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.article {
  width: 100%;
  height: auto;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 220px;

    h1 {
      color: #000000;
      font-size: 36px;
      line-height: 56px;
    }

    .separator {
      width: 56px;
      border: 1px solid #000000;
      border-radius: 5px;
      margin: 24px 0 80px;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  &__item {
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 10px 40px 50px 0px #dfe4f666;
    display: flex;
    flex-direction: column;
  }

  &__icon {
    img {
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: auto;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 24px 40px 36px 32px;
  }

  &__title {
    color: #000000;
    width: 100%;
    height: auto;
    font-size: 20px;
    line-height: 32px;
  }

  &__text {
    width: 100%;
    font-size: 16px;
    line-height: 28px;
    margin: 12px 0 24px;
  }

  button {
    border: none;
    background-color: #ffffff;
    color: #4089ed;
    font-size: 16px;

    img {
      margin-left: 12px;
      width: 16px;
    }
  }

  button:hover {
    cursor: pointer;
  }
}
</style>
