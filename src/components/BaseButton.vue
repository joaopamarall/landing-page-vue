<template>
    <button :class="customStyle">
        {{ label }}
        <!--<img v-if="hasIcon" src="../assets/download-btn.svg">-->
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
            default: 'primary',
        },
        hasIcon: {
            type: Boolean,
            default: false
        }
    },
}
</script>

<style lang="scss" scoped>
.primary {
    background-color: #458FF6;
    color: #FFF;
    width: 200px;
    height: 60px;
    border-radius: 56px;
    border: none;
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
}

.basic {
    background-color: #FFF;
    color: #458FF6;
    width: 200px;
    height: 56px;
    border-radius: 56px;
    border: 1px solid #458FF6;
    font-size: 18px;
    font-family: 'Mulish', sans-serif;
}
</style>