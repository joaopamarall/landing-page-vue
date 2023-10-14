<template>
  <div class="card">
    <h1 class="card__title">
      {{ title }}
    </h1>
    <hr v-if="hasSeparator" class="card__separator">
    <div class="card__text">
      {{ text }}
    </div>
    <slot name="button" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    hasSeparator: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.card {

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  &__title {
    margin: 0;
    width: 480px;
    font-size: 36px;
    line-height: 56px;
    color: #000000;
    height: 112px;
  }

  &__text {
    margin: 25px 0 45px;
    font-size: 21px;
    line-height: 32px;
    width: 448px;
    height: 96px;
  }

  &__separator {
    width: 56px;
    height: 2px;
    background-color: #000000;
    margin: 26px 0 34px;
    border-radius: 5px;
  }
}
</style>