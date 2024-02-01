<template>
  <button :class="customStyle">
    {{ label }}
    <img v-if="hasIcon" src="../assets/down-btn.svg" />
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    customStyle: {
      type: String,
      default: "primary",
    },
    hasIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button:hover {
  cursor: pointer;
}

.primary {
  background-color: #458ff6;
  color: #fff;
  width: 200px;
  height: 60px;
  font-weight: 700;
  border-radius: 56px;
  border: none;
  font-size: 18px;
  font-family: "Mulish", sans-serif;
}

.basic {
  background-color: #fff;
  color: #458ff6;
  width: 200px;
  height: 56px;
  font-weight: 700;
  border-radius: 56px;
  border: 1px solid #458ff6;
  font-size: 18px;
  font-family: "Mulish", sans-serif;
}
</style>
