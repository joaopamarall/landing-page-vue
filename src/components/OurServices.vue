<template>
    <div class="services">
        <div class="services__item" v-for="(item, index) in items" :key="index">
            <div class="services__icon">
                <img :src="item.icon">
            </div>
            <div class="services__title">
                {{ item.title }}
            </div>
            <div class="services__text">
                {{ item.text }}
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
                    icon: require('@/assets/images/Frame1.png'),
                    title: 'Search doctor',
                    text: 'Choose your doctor from thousands of specialist, general, and trusted hospitals'
                }, {
                    icon: require('@/assets/images/Frame2.png'),
                    title: 'Online pharmacy',
                    text: 'Buy  your medicines with our mobile application with a simple delivery system'
                }, {
                    icon: require('@/assets/images/Frame3.png'),
                    title: 'Consultation',
                    text: 'Free consultation with our trusted doctors and get the best recomendations'
                }, {
                    icon: require('@/assets/images/Frame4.png'),
                    title: 'Details info',
                    text: 'Free consultation with our trusted doctors and get the best recomendations'
                }, {
                    icon: require('@/assets/images/Frame5.png'),
                    title: 'Emergency care',
                    text: 'You can get 24/7 urgent care for yourself or your children and your lovely family'
                }, {
                    icon: require('@/assets/images/Frame6.png'),
                    title: 'Tracking',
                    text: 'Track and save your medical history and health data'
                },

            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin: 80px 0 70px;

    img {
        width: 90px;
        height: 90px;
    }

    &__item {
        background-color: #ffffff;
        border-radius: 20px;
        padding: 48px 0 0 36px;
        width: 350px;
        height: 354px;
        box-shadow: 10px 40px 50px 0px #dfe4f666;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
    }

    &__title {
        color: #000000;
        font-size: 24px;
        font-weight: 700;
        line-height: 56px;
        margin: 24px 0 0;
    }

    &__text {
        font-size: 16px;
        font-weight: 300;
        color: #7D7987;
        line-height: 28px;
        width: 260px;
        height: 84px;
    }
}
</style>