<template>
  <div class="header">
    <BaseIcon />
      <ul class="header__routes">
        <li class="header__home">Home</li>
        <li class="header__findADoctor">Find a doctor</li>
        <li class="header__apps">Apps</li>
        <li class="header__testimonials">Testimonials</li>
        <li class="header__aboutUs">About us</li>
      </ul>
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

  &__button {
    display: none;
  }

  &__routes {
    display: flex;
    align-items: center;
    gap: 40px;
    font-weight: 400;
    font-size: 18px;
  }
  
  ul {
    list-style: none;
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