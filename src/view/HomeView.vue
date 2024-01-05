<template>
	<div class="home">
		<the-header />
		<div class="home__content">
			<section class="home__introdution">
				<base-card
					title="Virtual healthcare for you"
					text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone"
				>
					<template #button>
						<base-button label="Consult today" customStyle="primary" />
					</template>
				</base-card>
				<img src="../assets/trafalgar-header-illustration-1.png" />
			</section>
			<section class="home__services">
				<base-card
					title="Our Services"
					hasSeparator
					text="We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
				/>
				<our-services />
				<base-button label="Learn more" customStyle="basic" />
			</section>
			<section class="home__leading">
				<img src="../assets/trafalgar-illustration sec02 1.png" />
				<base-card
					title="Leading healthcare providers"
					text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver"
					hasSeparator
				>
					<template #button>
						<base-button label="Learn more" customStyle="basic" />
					</template>
				</base-card>
			</section>
			<section class="home__download">
				<base-card
					title="Download our mobile apps"
					text="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
					hasSeparator
				>
					<template #button>
						<base-button label="Download" customStyle="basic" hasIcon />
					</template>
				</base-card>
				<img src="../assets/trafalgar-illustration sec03 1.png" />
			</section>
			<section class="home__carousel">
				<the-carousel />
			</section>
			<section class="home__article">
				<the-article />
				<base-button label="View all" customStyle="basic"></base-button>
			</section>
		</div>
		<the-footer />
	</div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BaseCard from "@/components/BaseCard.vue";
import OurServices from "@/components/OurServices.vue";
import BaseButton from "@/components/BaseButton.vue";
import TheCarousel from "@/components/TheCarousel.vue";
import TheArticle from "@/components/TheArticle.vue";

export default {
	components: {
		TheHeader,
		TheFooter,
		BaseCard,
		OurServices,
		BaseButton,
		TheCarousel,
		TheArticle,
	},
};
</script>

<style lang="scss">
body {
	margin: 0 auto;
	padding: 0;
	color: #7d7987;

	.home {
		font-family: "Mulish", sans-serif;

		@media (width <= 740px) {
			padding: 4px;
		}

		&__content {
			margin: 0 auto;
			max-width: 1024px;
		}

		.header {
			@media (width <= 740px) {
				margin: 0 20px;

				&__button {
					display: none;
				}

				&__routes {
					display: none;
				}
			}
		}

		&__introdution {
			display: grid;
			grid-template-columns: repeat(2, 1fr);

			img {
				width: 100%;
				height: auto;
			}

			.card {
				max-width: 448px;

				&__title {
					font-size: 48px;
				}

				&__text {
					margin: 25px 0 45px;
				}
			}
			@media (width <= 991px) {
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				text-align: center;

				img {
					display: none;
				}

				.card {
					max-width: 100%;
					align-items: center;
					text-align: center;

					&__title {
						max-width: 100%;
						height: auto;
						font-size: 40px;
						line-height: 56px;
					}

					&__text {
						font-size: 18px;
						width: 100%;
						height: auto;
					}
				}
			}
		}

		&__services {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 32px;

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
					width: 950px;
					height: 60px;
				}
			}

			.basic {
				margin-bottom: 220px;
			}

			@media (width <= 991px) {
				.services {
					&__items {
						display: flex;
						justify-content: center;
						flex-direction: column;
						margin: 0 auto;
						max-width: 480px;
					}
				}

				.card {
					display: flex;
					justify-content: center;
					text-align: center;

					&__title {
						width: 100%;
						height: auto;
					}

					&__text {
						width: 100%;
						height: auto;
					}
				}

				.basic {
					margin-bottom: 120px;
				}
			}
		}

		&__leading {
			display: grid;
			grid-template-columns: repeat(2, 1fr);

			img {
				width: 100%;
				height: auto;
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

			@media (width <= 991px) {
				display: flex;

				img {
					display: none;
				}

				.card {
					margin: 0;
					align-items: center;
					text-align: center;

					&__title {
						width: 100%;
						height: auto;
					}

					&__text {
						width: 100%;
						height: auto;
					}
				}
			}
		}

		&__download {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin: 260px 0 0;

			img {
				width: 100%;
				height: auto;
			}

			.card {
				max-width: 420px;

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

				button {
					img {
						width: 12px;
						margin-left: 12px;
					}
				}
			}

			.basic {
				margin: 40px 0 0;
			}

			@media (width <= 991px) {
				display: flex;
				margin: 150px 0 0;

				img {
					display: none;
				}

				.card {
					max-width: 100%;
					align-items: center;
					text-align: center;

					&__title {
						width: 100%;
						height: auto;
					}

					&__text {
						width: 100%;
						height: auto;
					}
				}
			}
		}

		&__carousel {
			margin-top: 260px;

			@media (width <= 991px) {
				margin-top: 120px;
				text-align: center;
				.carousel {
					&__content {
						display: flex;
						flex-direction: column;
					}

					&__avatar {
						display: flex;
						flex-direction: column;
						margin: 0 auto;
						text-align: left;
					}

					&__description {
						margin: 40px auto;
					}

					&__actions {
						img {
							margin: 0 auto;
						}
					}
				}
			}
		}

		&__article {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 68px;

			@media (width <= 991px) {
				.article {
					&__header {
						text-align: center;
					}

					&__items {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}
}
</style>
