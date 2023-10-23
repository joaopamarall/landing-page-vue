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
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  width: 100%;
  height: auto;

  &__title {
    margin: 0;
    max-width: 480px;
    height: 112px;
    font-size: 36px;
    line-height: 56px;
    color: #000000;
  }

  &__text {
    margin: 0;
    font-size: 18px;
    line-height: 32px;
    width: 448px;
    height: 96px;
  }

  &__separator {
    width: 56px;
    background-color: #000000;
    border-color: #000000;
    border-radius: 5px;
  }
}
</style>