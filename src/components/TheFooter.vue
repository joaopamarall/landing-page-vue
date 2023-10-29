<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__trafalgar">
        <BaseIcon customLogo="secundary" />
        <div class="footer__description">Trafalgar provides progressive, and affordable healthcare, accessible on mobile
          and online for everyone</div>
        <div>©Trafalgar PTY LTD 2020. All rights reserved</div>
      </div>
      <div class="footer__company">
        <h3>Company</h3>
        <div>About</div>
        <div>Testimonials</div>
        <div>Find a doctor</div>
        <div>Apps</div>
      </div>
      <div class="footer__region">
        <h3>Region</h3>
        <div>Indonesia</div>
        <div>Singapore</div>
        <div>Hongkong</div>
        <div>Canada</div>
      </div>
      <div class="footer__help">
        <h3>Help</h3>
        <div>Help center</div>
        <div>TContact support</div>
        <div>Instructions</div>
        <div>How it works</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue'

export default {
  components: { BaseIcon }
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: auto;
  color: white;
  background: linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%);
  margin-top: 100px;

  &__content {
    display: flex;
    justify-content: center;
    padding: 88px 0 108px;
    line-height: 38px;

    h3 {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }

  &__trafalgar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 28px;
    width: 396px;
  }

  &__description {
    margin: 20px 0 32px;
  }

  &__company {
    width: 200px;
  }

  &__region {
    width: 200px;
  }

  &__help {
    width: 200px;
  }
}
</style>