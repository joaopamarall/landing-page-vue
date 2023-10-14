<template>
    <div class="home">
        <the-header />
        <div class="home__content">
            <section class="home__introdution">
                <base-card class="card-introdution" title="Virtual healthcare for you"
                    text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone">
                    <template #button>
                        <base-button label="Consult today" customStyle="primary" />
                    </template>
                </base-card>
                <img src="../assets/images/trafalgar-header-illustration-1.png">
            </section>
            <section class="home__services">
                <base-card class="card-info" title="Our Services" hasSeparator
                    text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health" />
                <our-services class="services-items">
                    <template #button>
                        <base-button label="Learn more" customStyle="basic" />
                    </template>
                </our-services>
            </section>
            <section class="home__leading">
                <img src="../assets/images/trafalgar-illustration sec02 1.png">
                <base-card class="leanding-card" title="Leading healthcare providers"
                    text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
                    hasSeparator>
                    <template #button>
                        <base-button label="Learn more" customStyle="basic" />
                    </template>
                </base-card>
            </section>
        </div>
        <the-footer />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import BaseCard from '@/components/BaseCard.vue'
import OurServices from '@/components/OurServices.vue'
import BaseButton from '@/components/BaseButton.vue'

export default {
    components: {
        TheHeader,
        TheFooter,
        BaseCard,
        OurServices,
        BaseButton
    },
}
</script>

<style lang="scss">
body {
    margin: 0;
    padding: 0;
    color: #7D7987;

    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        font-family: 'Mulish', sans-serif;

        &__content {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__introdution {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            img {
                width: 690px;
                height: 598px;
            }

            .card {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                width: 448px;
                text-align: left;

                h1 {
                    font-size: 48px;
                }
            }
        }

        &__services {
            display: flex;
            flex-direction: column;
            align-items: center;

            .card {
                display: flex;
                align-items: center;

                &__title {
                    font-size: 36px;
                    line-height: 56px;
                    width: 220px;
                    height: 56px;
                    margin: 190px 0 0;
                    color: #000000;
                }

                &__text {
                    text-align: center;
                    width: 950px;
                    height: 60px;
                    font-size: 18px;
                    line-height: 32px;
                    margin: 0 auto;
                }
            }

            .services {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 32px;
                margin: 80px 0 70px;
            }

            .basic {
                margin-bottom: 220px;
            }
        }

        &__leading {
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            img {
                width: 650px;
                height: 480px;
            }

            .card {
                justify-content: center;
                margin-left: 140px;

                &__separator {
                    margin: 28px 0 32px;
                }

                &__text {
                    height: 120px;
                    margin: 0 0 40px;
                    font-size: 18px;
                }
            }


        }
    }
}
</style>