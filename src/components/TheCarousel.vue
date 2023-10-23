<template>
    <div class="carousel">
        <div class="carousel--wrapper">
            <div class="carousel__header">
                <h1>{{ currentItem.title }}</h1>
                <hr class="separator">
            </div>
            <div class="carousel__content">
                <div class="carousel__avatar">
                    <img :src="currentItem.icon">
                    <div class="carousel__person">
                        <h3>{{ currentItem.name }}</h3>
                        <div>{{ currentItem.profession }}</div>
                    </div>
                </div>
                <div class="carousel__description">
                    {{ currentItem.description }}
                </div>
            </div>
        </div>
        <div class="carousel__actions">
            <img src="../assets/left-btn.svg" @click="backItem">
            <span v-for="(item, index) in items" :key="index" class="bolinha"
                :class="{ active: index === currentItemIndex, inactive: index !== currentItemIndex }">
            </span>
            <img src="../assets/right-btn.svg" @click="nextItem">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentItemIndex: 0,
            items: [
                {
                    title: 'What our customer are saying',
                    icon: require('@/assets/image1.png'),
                    description: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”',
                    name: 'Edward Newgate',
                    profession: 'Founder Circle'
                },
                {
                    title: 'Testimonial from a Satisfied User',
                    icon: require('@/assets/image1.png'),
                    description: '“The service is incredibly efficient, and the support is top-notch.”',
                    name: 'Alice Johnson',
                    profession: 'Marketing Manager',
                },
                {
                    title: 'Impressions of Our Service',
                    icon: require('@/assets/image1.png'),
                    description: '“The app has improved our workflow and made communication with clients seamless.”',
                    name: 'John Smith',
                    profession: 'Software Developer',
                },
                {
                    title: 'Feedback from Our Customers',
                    icon: require('@/assets/image1.png'),
                    description: '“Our business has seen remarkable growth with the use of this platform.”',
                    name: 'Sarah Davis',
                    profession: 'CEO',
                },
            ]
        }
    },
    computed: {
        currentItem() {
            return this.items[this.currentItemIndex];
        }
    },
    methods: {
        backItem() {
            if (this.currentItemIndex > 0) {
                this.currentItemIndex--;
            }
        },
        nextItem() {
            if (this.currentItemIndex < this.items.length - 1) {
                this.currentItemIndex++;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.carousel {
    width: 100%;
    height: auto;
    color: white;

    &--wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right, #5A98F2 0%, #67C3F3 100%);
        border-radius: 24px;
    }

    h1 {
        font-size: 36px;
        margin: 64px 0 0;
    }

    h3 {
        font-size: 22px;
    }

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    &__avatar {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 80px 120px;

        img {
            border: 4px solid #ffffff;
            border-radius: 50%;
        }
    }

    &__person {
        font-size: 18px;
        margin-left: 28px;
    }

    &__description {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 19px;
        line-height: 30px;
        height: auto;
        margin: 12px 102px 0 0;
    }

    &__actions {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;

        .bolinha {
            background-color: #5B9BF3;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            margin: 0 18px;
            opacity: 0.5;

            &.active {
                opacity: 1;
            }
        }

        img {
            width: 28px;
            margin: 0 88px;
        }

        img:hover {
            cursor: pointer;
        }
    }
}

.separator {
    width: 56px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    margin: 25px 0 68px;
}
</style>