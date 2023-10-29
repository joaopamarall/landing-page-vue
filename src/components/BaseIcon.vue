<template>
    <div :class="customLogo">
        <div class="icon">
            <div class="icon__name">T</div>
        </div>
        <h1>Trafalgar</h1>
    </div>
</template>

<script>
export default {
    props: {
        customLogo: {
            type: String,
            default: 'primary',
        },
    }

}
</script>

<style lang="scss">
button:hover {
    cursor: pointer;
}

.primary {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .icon {
        color: white;
        background: url('../assets/Ellipse7.svg') no-repeat center center;
        background-size: contain;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        &__name {
            font-size: 26px;
            font-weight: 700;
        }
    }

    h1 {
        color: #233348;
        font-size: 24px;
    }
}

.secundary {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .icon {
        color: #5B9BF3;
        background: url('../assets/Ellipse8.svg') no-repeat center center;
        background-size: contain;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        &__name {
            font-size: 26px;
            font-weight: 700;
        }
    }

    h1 {
        color: white;
        font-size: 24px;
    }
}
</style>