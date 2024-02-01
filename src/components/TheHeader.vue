<template>
  <div class="header">
    <BaseIcon />
    <button class="header__button" @click="toggleMenu">Menu</button>
    <ul class="header__routes" :class="isActiveMenu">
      <li class="header__home">Home</li>
      <li class="header__findADoctor">Find a doctor</li>
      <li class="header__apps">Apps</li>
      <li class="header__testimonials">Testimonials</li>
      <li class="header__aboutUs">About us</li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  components: { BaseIcon },
  data() {
    return {
      isActiveMenu: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isActiveMenu = !this.isActiveMenu;
    },
  },
};
</script>

<style lang="scss">
.header {
  margin: 0 auto;
  padding: 56px 0 80px;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  color: #1f1534;

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

  &__findADoctor,
  &__apps,
  &__testimonials,
  &__aboutUs {
    opacity: 0.5;
  }
}
</style>
