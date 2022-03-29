<template>
	<ion-page>
		<ion-content :fullscreen="true">
			<HeaderContainer title="Cllct" />
			<!-- <HeroCard v-if="!isMinimal" /> -->
			<div class="flex md:hidden">
				<HeroSectionDropdown
					@onChange="changeZoom"
					:selected="zoom"
					:label="'Zoom'"
					:options="[
						{ label: '100%', value: '100' },
						{ label: '80%', value: '80' },
						{ label: '50%', value: '50' },
					]"
				/>
				<HeroSectionDropdown
					@onChange="changeSort"
					:selected="sort"
					:label="'Sort By'"
					:options="[
						{ label: 'Latest', value: 'latest' },
						{ label: 'Relevance', value: 'relevance' },
						{ label: 'Popular', value: 'popular' },
					]"
				/>
				<HeroSectionDropdown
					@onChange="changeLayout"
					:selected="layout"
					:label="'View'"
					:options="[
						{ label: 'List View', value: 'list' },
						{ label: 'Card View', value: 'card' },
						{ label: 'Grid View', value: 'grid' },
					]"
				/>
			</div>
			<GridView v-if="layout.value === 'card'" :cards="cardsItems" />
			<ListView v-if="layout.value === 'list'" :cards="cardsItems" />
			<DetailView v-if="layout.value === 'grid'" :cards="cardsItems" />
			<Footer />
			<TransitionRoot appear :show="isOpen" as="template">
				<Dialog as="div" @close="closeModal">
					<div class="fixed inset-0 z-10 overflow-y-auto">
						<div class="min-h-screen px-4 text-center">
							<TransitionChild
								as="template"
								enter="duration-300 ease-out"
								enter-from="opacity-0"
								enter-to="opacity-100"
								leave="duration-200 ease-in"
								leave-from="opacity-100"
								leave-to="opacity-30"
							>
								<DialogOverlay
									class="fixed inset-0 bg-black opacity-30 pointer-events-none"
								/>
							</TransitionChild>

							<span
								class="inline-block h-screen align-middle"
								aria-hidden="true"
							>
								&#8203;
							</span>

							<TransitionChild
								as="template"
								enter="duration-300 ease-out"
								enter-from="opacity-0 scale-95"
								enter-to="opacity-100 scale-100"
								leave="duration-200 ease-in"
								leave-from="opacity-100 scale-100"
								leave-to="opacity-0 scale-95"
							>
								<div
									class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
								>
									<DialogTitle
										as="h3"
										class="text-lg font-bold leading-6 text-gray-900 font-poppins"
									>
										Please select your view preference
									</DialogTitle>
									<div class="w-full max-w-md mx-auto">
										<RadioGroup v-model="selectedView">
											<RadioGroupLabel class="sr-only"
												>Server size</RadioGroupLabel
											>
											<div class="space-y-2">
												<RadioGroupOption
													as="template"
													v-for="view in views"
													:key="view.name"
													:value="view"
													v-slot="{ active, checked }"
													@click="setSelectedView(view)"
												>
													<div
														:class="[
															active
																? 'ring-1 ring-offset-1 ring-offset-[#ED4E94] ring-white ring-opacity-60'
																: '',
															checked
																? 'bg-pink bg-opacity-80 text-white '
																: 'bg-white ',
														]"
														class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
													>
														<div
															class="flex items-center justify-between w-full"
														>
															<div class="flex items-center">
																<div class="text-sm">
																	<RadioGroupLabel
																		as="p"
																		:class="
																			checked ? 'text-white' : 'text-gray-900'
																		"
																		class="font-bold font-poppins"
																	>
																		{{ view.name }}
																	</RadioGroupLabel>
																	<RadioGroupDescription
																		as="span"
																		:class="
																			checked ? 'text-sky-100' : 'text-gray-500'
																		"
																		class="inline font-poppins"
																	>
																		<span> {{ view.desc }}</span>
																	</RadioGroupDescription>
																</div>
															</div>
															<div
																v-show="checked"
																class="flex-shrink-0 text-white"
															>
																<svg
																	class="w-6 h-6"
																	viewBox="0 0 24 24"
																	fill="none"
																>
																	<circle
																		cx="12"
																		cy="12"
																		r="12"
																		fill="#fff"
																		fill-opacity="0.2"
																	/>
																	<path
																		d="M7 13l3 3 7-7"
																		stroke="#fff"
																		stroke-width="1.5"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	/>
																</svg>
															</div>
														</div>
													</div>
												</RadioGroupOption>
											</div>
										</RadioGroup>
									</div>
									<div class="mt-4">
										<button
											type="button"
											class="inline-flex bg-primary justify-center px-5 py-3 text-sm font-bold text-blue-900 text-[#fff] font-poppins border border-transparent rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
											@click="selectView"
										>
											Confirm
										</button>
									</div>
								</div>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</TransitionRoot>
		</ion-content>
	</ion-page>
</template>

<script>
import DetailView from "@/components/Cards/GridLayoutCard.vue";
import GridView from "@/components/Cards/CardLayoutCard.vue";
import HeroCard from "@/components/Hero-Card.vue";
import Footer from "@/components/Layouts/Footer.vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import LikesBox from "@/components/UI/Likes.vue";
import ListView from "@/components/Cards/ListLayoutCard.vue";
import ViewsBox from "@/components/UI/Views.vue";
import { IonContent, IonPage } from "@ionic/vue";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import { ref } from "vue";
import {
	TransitionRoot,
	TransitionChild,
	Dialog,
	DialogOverlay,
	DialogTitle,
	RadioGroup,
	RadioGroupLabel,
	RadioGroupDescription,
	RadioGroupOption,
} from "@headlessui/vue";
import HeroSectionDropdown from "../components/ViewLayoutDropdowns/Responsive.vue";
const views = [
	{
		name: "Normal",
		value: "normal",
		desc: "Normal View with Hero Section",
	},
	{
		name: "Minimal View",
		value: "minimal",
		desc: "Minimal View without Hero Section",
	},
];
export default defineComponent({
	name: "Home",
	created() {
		this.$Progress.start();
	},
	setup() {
		const view = sessionStorage.getItem("view");
		let isOpen = ref(false);
		if (!view) {
			isOpen.value = true;
		}
		let selectedView = ref(views[0]);
		return {
			isOpen,
			closeModal() {
				isOpen.value = false;
			},
			openModal() {
				isOpen.value = true;
			},
			selectedView,
			views,
		};
	},
	methods: {
		selectView(view) {
			sessionStorage.setItem("view", view);
			if (view === "minimal") {
				// set isminimal in store
				this.setMinimalView();
			}
			this.closeModal();
		},
		...mapActions("layout", {
			setMinimalView: "setMinimalView",
			changeLayout: "changeLayout",
			changeZoom: "changeZoom",
			changeSort: "changeSort",
		}),
	},
	components: {
		HeaderContainer,
		HeroCard,
		IonPage,
		IonContent,
		Footer,
		LikesBox,
		ViewsBox,
		DetailView,
		GridView,
		ListView,
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogOverlay,
		DialogTitle,
		RadioGroup,
		RadioGroupLabel,
		RadioGroupDescription,
		RadioGroupOption,
		HeroSectionDropdown,
	},
	data() {
		return {
			selectedView: "normal",
			cardsItems: [
				{
					image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: [
						"Design",
						"Creative",
						"Graphics",
						"Painting",
						"Arts",
						"Painting",
						"Arts",
						"Painting",
						"Arts",
					],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-2.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Creative", "Fiction"],
					height: true,
					owner: "Alex",
					isGroup: true,
					category: "project",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Physiology", "Scientific", "Fiction"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-4.jpg"),
					height: true,
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: [
						"Physiology",
						"Scientific",
						"Fiction",
						"Physiology",
						"Scientific",
						"Fiction",
						"Physiology",
						"Scientific",
						"Fiction",
					],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: [
						"Games",
						"Painting",
						"Arts",
						"Painting",
						"Arts",
						"Painting",
						"Arts",
					],
					owner: "Alex",
					isGroup: true,
					category: "project",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
					height: true,
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Arts", "Physiology", "Fiction"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Arts", "Physiology"],
					owner: "Alex",
					isGroup: true,
					category: "project",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
					height: true,

					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Creative", "Games", "Fiction"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-4.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Scientific", "Fiction"],
					owner: "James",
					height: true,
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Creative", "Graphics"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
					height: true,
					from: "from web design Ledger ",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					title: "Lufthnas home page concept for UI Designs",
					tags: ["Design", "Creative", "Graphics"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-2.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Physiology", "Scientific", "Fiction"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Games", "Painting", "Arts"],
					owner: "James",
					isGroup: false,
					category: "book",
					height: true,
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Creative", "Games"],
					owner: "Alex",
					isGroup: true,
					category: "project",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
				{
					image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
					height: true,
					from: "from web design Ledger ",
					title: "Lufthnas home page concept for UI Designs",
					description:
						"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
					tags: ["Design", "Scientific", "Fiction"],
					owner: "James",
					isGroup: false,
					category: "book",
					likes: 125145,
					views: 1245811212,
					rating: 3.5,
					timesRated: 2544125,
				},
			],
		};
	},
	computed: mapState({
		layout: (state) => state.layout.layout,
		isMinimal: (state) => state.layout.isMinimal,
		zoom: (state) => state.layout.zoom,
		sort: (state) => state.layout.sort,
		theme: (state) => state.layout.theme,
	}),
});
</script>
