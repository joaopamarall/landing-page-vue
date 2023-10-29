<template>
  <div class="header">
    <BaseIcon />
    <div class="header__routes">
      <div class="header__home">Home</div>
      <div class="header__findADoctor">Find a doctor</div>
      <div class="header__apps">Apps</div>
      <div class="header__testimonials">Testimonials</div>
      <div class="header__aboutUs">About us</div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: { BaseIcon, }
}
</script>

<style lang="scss">
.header {
  margin: 0 auto;
  padding: 56px 0 80px;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  color: #1F1534;

  &__routes {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    font-weight: 400;
    font-size: 18px;
  }

  &__home {
    font-weight: 700;
  }

  &__findADoctor {
    opacity: 0.5;
  }

  &__apps {
    opacity: 0.5;
  }

  &__testimonials {
    opacity: 0.5;
  }

  &__aboutUs {
    opacity: 0.5;
  }
}
</style>