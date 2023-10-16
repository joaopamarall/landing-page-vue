<template>
    <div class="home">
        <the-header />
        <div class="home__content">
            <section class="home__introdution">
                <base-card title="Virtual healthcare for you"
                    text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone">
                    <template #button>
                        <base-button label="Consult today" customStyle="primary" />
                    </template>
                </base-card>
                <img src="../assets/images/trafalgar-header-illustration-1.png">
            </section>
            <section class="home__services">
                <base-card title="Our Services" hasSeparator
                    text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health" />
                <our-services />
                <base-button label="Learn more" customStyle="basic" />
            </section>
            <section class="home__leading">
                <img src="../assets/images/trafalgar-illustration sec02 1.png">
                <base-card title="Leading healthcare providers"
                    text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
                    hasSeparator>
                    <template #button>
                        <base-button label="Learn more" customStyle="basic" />
                    </template>
                </base-card>
            </section>
            <section class="home__download">
                <base-card title="Download our mobile apps"
                    text="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
                    hasSeparator>
                    <template #button>
                        <base-button label="Download" customStyle="basic" />
                    </template>
                </base-card>
                <img src="../assets/images/trafalgar-illustration sec03 1.png">
            </section>
            <section class="home__slider">
                <base-slider />
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
import BaseSlider from '@/components/BaseSlider.vue'

export default {
    components: {
        TheHeader,
        TheFooter,
        BaseCard,
        OurServices,
        BaseButton,
        BaseSlider
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
                width: 448px;

                &__title {
                    font-size: 48px;
                }

                &__text {
                    margin: 25px 0 45px;
                }
            }
        }

        &__services {
            display: flex;
            flex-direction: column;
            align-items: center;

            .card {
                align-items: center;

                &__title {
                    width: 220px;
                    height: 56px;
                    margin: 190px 0 0;
                }

                &__separator {
                    margin: 26px 0 34px;
                }

                &__text {
                    text-align: center;
                    width: 950px;
                    height: 60px;
                }
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
                margin-left: 140px;

                &__separator {
                    margin: 28px 0 32px;
                }

                &__text {
                    height: 120px;
                    margin: 0 0 40px;
                }
            }
        }

        &__download {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin: 260px 0 0;

            img {
                width: 664px;
                height: 436px;
            }

            .card {
                width: 420px;
                height: 376px;

                &__title {
                    width: 252px;
                    height: 96px;
                    line-height: 48px;
                }

                &__separator {
                    margin: 32px 0;
                }

                &__text {
                    width: 420px;
                    height: 120px;
                }
            }

            .basic {
                margin: 40px 0 0;
            }
        }
    }
}
</style>