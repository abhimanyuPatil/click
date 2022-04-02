<template>
	<div
		v-if="!isMobile()"
		class="border-b border-[#DEDEDE] pb-3 bg-white dark:bg-darkBg"
	>
		<div class="container md:container md:mx-auto flex flex-col gap-2 mx-auto">
			<div class="flex items-center justify-between mt-4">
				<div class="flex items-center">
					<a @click="() => router.push('/home')">
						<img
							v-if="localTheme === 'dark'"
							src="../../../resources/logo/Cllct-Logo-White.svg"
							alt=""
							width="78"
							height="48"
							class="cursor-pointer"
						/>
						<img
							v-if="localTheme === 'light'"
							src="../../../resources/logo-icon.svg"
							alt=""
							width="78"
							height="48"
							class="cursor-pointer"
						/>
					</a>
				</div>
				<div class="mobmenu-icon md:hidden text-black cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="{2}"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</div>
				<div
					class="flex items-center justify-between w-100 h-11 rounded-md border-[#9B9B9B] dark:border-darkBorder dark:bg-cardBg border md:flex p-4 gap-7"
				>
					<div class="flex basis-3/5 items-center w-100 gap-3 h-11">
						<div class="flex items-center ml-4">
							<img
								src="../../../resources/search-icon.svg"
								alt=""
								width="20"
								height="20"
							/>
						</div>
						<div class="relative w-9/12">
							<input
								id="dropdown"
								type="text"
								placeholder="Search topic"
								@change="query = $event.target.value"
								class="w-full h-[50px] border-none outline-none bg-[transparent] text-[#2A2A2A] text-aileron"
							/>
							<TransitionRoot
								:show="isOpen"
								enter="transition-opacity duration-75"
								enter-from="opacity-0"
								enter-to="opacity-100"
								leave="transition-opacity duration-150"
								leave-from="opacity-100"
								leave-to="opacity-0"
							>
								<div
									v-if="isOpen"
									class="absolute w-full bg-white rounded z-10 px-3 shadow-md mt-2"
								>
									<p
										class="font-poppins text-black my-2 cursor-pointer"
										v-for="person in filteredPeople"
										:key="person.id"
									>
										{{ person.name }}
									</p>
								</div>
							</TransitionRoot>
						</div>
					</div>
					<div
						class="hidden md:flex items-center gap-3 h-full border-l border-[#9B9B9B] dark:border-darkBorder mr-3 pl-3"
					>
						<div
							:class="checkSearchType('all')"
							@click="toggleSearchType('all')"
						>
							All
						</div>
						<div
							:class="checkSearchType('collections')"
							@click="toggleSearchType('collections')"
						>
							Collections
						</div>
						<div
							:class="checkSearchType('project')"
							@click="toggleSearchType('project')"
						>
							Project
						</div>
					</div>
				</div>
				<div class="flex items-center gap-7 hidden md:flex">
					<div
						class="relative font-aileron flex items-center justify-center rounded-md dark:bg-dropdownBg hover:bg-grey dark:hover:bg-[#6317A7] cursor-pointer fill-white w-10 h-10 group transition ease-out duration-200 border"
					>
						<img
							src="../../../public/assets/icon/equalizer.svg"
							alt=""
							width="20"
							height="20"
						/>
					</div>
					<div
						class="relative font-aileron flex items-center justify-center rounded-md dark:bg-dropdownBg hover:bg-grey dark:hover:bg-[#6317A7] cursor-pointer fill-white w-10 h-10 group transition ease-out duration-200 border"
					>
						<img
							src="../../../public/assets/icon/spinner4.svg"
							alt=""
							width="20"
							height="20"
						/>
					</div>
					<div
						v-if="showControls"
						class="flex justify-center items-center absolute font-aileron w-4 h-4 text-center text-white bg-gray-700 bg-opacity-75 rounded-full -right-3 -top-0 ring-white ring-1 text-xs"
					>
						<p>S</p>
					</div>
					<!--Categories Popup Content End-->
					<div
						class="relative transform transition hover:scale-105 duration-300 ease-in-out"
					>
						<button
							class="font-aileron text-md uppercase text-center w-10 h-9 font-semibold text-black rounded-md bg-[#FBBB0B]"
						>
							A
						</button>
						<div
							class="absolute cursor-pointer w-2 h-2 text-center text-white bg-red-700 rounded-full -right-0.5 -top-0 ring-white ring-1"
						></div>
					</div>
					<div
						class="relative transform transition hover:scale-105 duration-300 ease-in-out"
					>
						<button
							class="font-aileron text-md uppercase text-center w-10 h-9 font-semibold text-black rounded-md bg-[#FBBB0B]"
						>
							S
						</button>
						<div
							class="absolute cursor-pointer w-2 h-2 text-center text-white bg-red-700 rounded-full -right-0.5 -top-0 ring-white ring-1"
						></div>
					</div>

					<!-- <button
						v-if="!isLoggedIn"
						@click="() => router.push('/auth')"
						class="font-aileron w-24 h-9 px-2 bg-primary uppercase text-xs text-white text-center justify-center font-bold rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
					>
						Login
					</button> -->
					<Popover class="relative" v-slot="{ open }">
						<PopoverButton
							:class="[
								open
									? 'text-gray-900 dark:text-white'
									: 'text-gray-500 dark:text-white',
								'px-3 py-1 group bg-white dark:bg-transparent dark:text-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
							]"
						>
							<div class="flex items-center gap-4">
								<div
									class="flex items-center justify-center rounded-full bg-[#E1E1E1] fill-white w-11 h-11"
								>
									<img src="../../../resources/user-icon.svg" alt="" />
								</div>
								<h3
									class="text-[#5E5C5C] dark:text-white text-sm font-semibold font-aileron"
								>
									John Doe
								</h3>
							</div>
						</PopoverButton>
						<transition
							enter-active-class="transition ease-out duration-200"
							enter-from-class="opacity-0 translate-y-1"
							enter-to-class="opacity-100 translate-y-0"
							leave-active-class="transition ease-in duration-150"
							leave-from-class="opacity-100 translate-y-0"
							leave-to-class="opacity-0 translate-y-1"
						>
							<PopoverPanel
								class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-100 max-w-md sm:px-0"
							>
								<!--====================================================================
                        NAV PROFILE VIEW START
                        =====================================================================-->
								<div
									class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
									v-if="isProfileScreen === 'nav'"
								>
									<div
										class="relative bg-white dark:bg-cardBg px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
									>
										<img src="../../../resources/user-icon.svg" alt="" />
										<p class="font-aileron text-black dark:text-white text-xs">
											John Dess
										</p>
										<p class="font-aileron text-black dark:text-white text-xs">
											Mumbai
										</p>
									</div>
									<div
										class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
									>
										<div class="ml-4 pr-4">
											<p
												@click="toggleProfile('profileView')"
												class="font-aileron text-base font-medium text-gray-900 dark:text-white"
											>
												Profile
											</p>
										</div>
									</div>
									<div
										class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
									>
										<div class="ml-4 pr-4">
											<p
												class="font-aileron text-base font-medium text-gray-900 dark:text-white"
											>
												Subscription
											</p>
										</div>
									</div>
									<div
										class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
									>
										<div class="ml-4 pr-4">
											<p
												class="font-aileron text-base font-medium text-gray-900 dark:text-white"
											>
												Payment
											</p>
										</div>
									</div>
									<div
										class="relative grid gap-6 bg-white dark:bg-cardBg px-2 py-2 sm:gap-3 sm:p-3"
									>
										<div class="ml-4 pr-4">
											<p
												class="font-aileron text-base font-medium text-gray-900 dark:text-white"
											>
												Langugae
											</p>
										</div>
									</div>
									<div
										class="relative grid gap-6 bg-white dark:bg-cardBg dark:text-white px-2 py-2 sm:gap-3 sm:p-3"
									>
										<div class="ml-4 pr-4">
											<p
												class="font-aileron text-base font-medium text-gray-900"
											>
												Settings
											</p>
										</div>
									</div>
								</div>

								<!--====================================================================
                        NAV PROFILE VIEW END
                        =====================================================================--><!--====================================================================PROFILE VIEW START=====================================================================-->
								<div
									class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white dark:bg-cardBg w-[250px]"
									v-if="isProfileScreen === 'profileView'"
								>
									<div
										class="profile-nav-back flex justify-between items-center p-2 text-center border-b dark:border-darkBorder"
									>
										<p @click="toggleProfile('nav')">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 flex-0 fill-black dark:fill-white cursor-pointer"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M10 19l-7-7m0 0l7-7m-7 7h18"
												/>
											</svg>
										</p>
										<h5
											class="m-0 flex-1 font-aileron text-black dark:text-white"
										>
											Profile
										</h5>
									</div>
									<div class="profile-menu-content-wrap">
										<div
											class="relative bg-white dark:bg-cardBg px-2 py-2 sm:gap-2 sm:p-4 flex flex-col justify-center items-center text-center"
										>
											<img src="../../../resources/user-icon.svg" alt="" />
											<p
												class="text-black dark:text-white text-xs font-aileron"
											>
												John Dess
											</p>
											<p
												class="text-black dark:text-white text-xs font-aileron"
											>
												Mumbai
											</p>
										</div>
										<div class="edit-profile-btn text-center">
											<button
												class="font-aileron inline-block lg:mx-0 bg-[#707070] text-white font-bold rounded-full py-3 px-4 lg:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-xs"
											>
												Edit Profile
											</button>
										</div>
										<div class="proile-details p-3">
											<div
												class="profile-details-wrap p-4 bg-[#EFEFEF] dark:bg-cardBg rounded-md"
											>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														Email
													</h5>
													<p
														class="font-aileron m-0 text-xs text-black dark:text-white"
													>
														johndoe0007 @gmail.com
													</p>
												</div>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														Name
													</h5>
													<p class="font-aileron m-0 text-xs">John Doe</p>
												</div>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														User Name
													</h5>
													<p class="font-aileron m-0 text-xs">Qrsedwert</p>
												</div>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														Gender
													</h5>
													<p class="font-aileron m-0 text-xs">Male</p>
												</div>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														About Me
													</h5>
													<p class="font-aileron m-0 text-xs">
														Loren Ispusm dssadg adgsadgsagsg
													</p>
												</div>
												<div class="profile-details-item mb-3">
													<h5 class="font-aileron text-[#7630B4] text-sm mb-1">
														Location
													</h5>
													<p class="font-aileron m-0 text-xs">Mumbai</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!--====================================================================
                        PROFILE VIEW END
                        =====================================================================-->
							</PopoverPanel>
						</transition>
					</Popover>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {
	Popover,
	PopoverButton,
	PopoverPanel,
	TransitionRoot,
	Listbox,
	ListboxLabel,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
	Switch,
	SwitchGroup,
	SwitchLabel,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { mapActions, mapState } from "vuex";
import ViewDropdown from "../ViewLayoutDropdowns/Flex.vue";
import MobileSearch from "../Responsive/MobileSearch.vue";
const categories = [
	"All",
	"Location",
	"Sites",
	"Books",
	"Movies",
	"Songs",
	"News",
];
const types = ["All", "Projects", "Collections"];
import {
	IonPage,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButtons,
	IonIcon,
} from "@ionic/vue";
const people = [
	{ id: 1, name: "Wade Cooper" },
	{ id: 2, name: "Arlene Mccoy" },
	{ id: 3, name: "Devon Webb" },
	{ id: 4, name: "Tom Cook" },
	{ id: 5, name: "Tanya Fox" },
	{ id: 6, name: "Hellen Schmidt" },
];
export default defineComponent({
	name: "HeaderContainerUserPanel",
	data() {
		const selectedType = ref(types[0]);
		const enabled = ref(false);

		return {
			isProfileScreen: "nav",
			searchType: "all",
			selectedCategory: categories[0],
			categories,
			selectedType,
			types,
			isNavActive: false,
			showControls: false,
			localTheme: "light",
			enabled,
		};
	},
	methods: {
		toggleProfile(state: "nav" | "profileView") {
			this.isProfileScreen = state;
		},
		toggleSearchType(type: string) {
			this.searchType = type;
		},
		checkSearchType(type: string) {
			if (type === this.searchType) {
				return "font-aileron h-6 pt-0.5 px-2 text-xs font-bold text w-auto bg-[#6317A7] rounded-md text-center  text-white cursor-pointer border-r-1";
			} else {
				return "font-aileron text-xs h-6 w-auto px-2 pt-0.5 font-bold text text-black dark:text-darkMuted cursor-pointer border-r-1";
			}
		},
		setSelectedCategory(category: string) {
			this.selectedCategory = category;
		},
		selectedClass(category: string) {
			if (category === this.selectedCategory) {
				return "w-full font-aileron text-xs px-3 py-2 text-center justify-center font-bold text-[#fff] flex cursor-pointer bg-primary";
			} else {
				return "w-full font-aileron text-xs px-3 py-2 text-center justify-center font-bold text-[#373636] dark:text-white flex cursor-pointer hover:bg-primary hover:text-[#fff]";
			}
		},
		toggleControls() {
			this.showControls = !this.showControls;
		},
		changeTheme() {
			if (this.localTheme === "light") {
				this.localTheme = "dark";
				document.documentElement.classList.add("dark");
			} else {
				this.localTheme = "light";
				document.documentElement.classList.remove("dark");
			}
			this.toggleTheme();
		},
		...mapActions("layout", {
			changeLayout: "changeLayout",
			changeZoom: "changeZoom",
			changeSort: "changeSort",
			toggleTheme: "toggleTheme",
		}),
		isMobile() {
			if (
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				)
			) {
				return true;
			} else {
				return false;
			}
		},
	},
	computed: mapState({
		isLoggedIn: (state: any) => state.user.isLoggedIn,
		layout: (state: any) => state.layout.layout,
		zoom: (state: any) => state.layout.zoom,
		sort: (state: any) => state.layout.sort,
		theme: (state: any) => state.layout.theme,
	}),
	props: { title: String },
	components: {
		Popover,
		PopoverButton,
		PopoverPanel,
		ViewDropdown,
		TransitionRoot,
		CheckIcon,
		SelectorIcon,
		Listbox,
		ListboxLabel,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonPage,
		IonButtons,
		IonIcon,
		MobileSearch,
		Switch,
		SwitchGroup,
		SwitchLabel,
	},
	setup() {
		const router = useRouter();
		let isOpen = ref(false);
		let selected = ref(people[0]);
		let query = ref("");
		let filteredPeople = computed(() =>
			query.value === ""
				? people
				: people.filter((person) =>
						person.name
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.value.toLowerCase().replace(/\s+/g, ""))
				  )
		);
		return { router, selected, query, filteredPeople, isOpen };
	},
	mounted() {
		this.localTheme = this.theme;
		if (!this.isMobile()) {
			let input = <HTMLInputElement>document?.getElementById("dropdown");
			input.addEventListener("focusin", () => {
				this.isOpen = true;
			});
			input.addEventListener("blur", () => {
				this.isOpen = false;
			});
		}
		document.addEventListener("keydown", (e) => {
			if (e.altKey) this.toggleControls();
		});
		document.addEventListener("keyup", (e) => {
			if (e.key === "Alt") this.toggleControls();
		});
	},
});
</script>
