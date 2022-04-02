<template>
	<ion-page>
		<ion-content>
			<HeaderContainerUserPanel title="Cllct" />
			<div class="flex flex-wrap bg-white w-full h-[88.5vh]">
				<div class="w-3/12" aria-label="Sidebar">
					<div
						class="overflow-y-auto py-4 px-3 bg-[#8e5bbc] dark:bg-gray-800 h-[88.5vh]"
					>
						<ul class="space-y-2">
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/dial-pad.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="ml-3">Dashboard</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/list.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="flex-1 ml-3 whitespace-nowrap">Cards</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/popup.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="flex-1 ml-3 whitespace-nowrap">Groups</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/user.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="flex-1 ml-3 whitespace-nowrap">About</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/message.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="flex-1 ml-3 whitespace-nowrap">Message</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white dark:hover:bg-gray-700"
								>
									<img
										src="../../public/assets/icon/log-out.svg"
										alt=""
										width="20"
										height="20"
									/>
									<span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="w-9/12">
					<div class="p-4 text-gray-500 w-full">
						<div class="max-w-md px-2 py-16 sm:px-0">
							<TabGroup>
								<TabList class="flex p-1 space-x-1 rounded-xl">
									<Tab
										v-for="category in Object.keys(categories)"
										as="template"
										:key="category"
										v-slot="{ selected }"
									>
										<button
											:class="[
												'w-full py-2.5 text-md leading-5 font-bold rounded-lg',
												'focus:outline-none ring-offset-blue-400 ring-white ring-opacity-60',
												selected
													? 'bg-[#e1b4fe] text-white shadow '
													: 'text-[#515053] hover:bg-[#e1b4fe]hover:text-white',
											]"
										>
											{{ category }}
										</button>
									</Tab>
								</TabList>

								<TabPanels class="mt-2">
									<TabPanel
										v-for="(posts, idx) in Object.values(categories)"
										:key="idx"
										:class="[
											'bg-white rounded-xl p-3',
											'focus:outline-none ring-white ring-opacity-60',
										]"
									>
										<ul>
											<li
												v-for="post in posts"
												:key="post.id"
												class="relative p-3 rounded-md hover:bg-coolGray-100"
											>
												<h3
													class="text-md font-medium leading-5 text-[#515053] pb-5"
												>
													{{ post.title }}
												</h3>
												<p class="text-[#8e5bbc]">Name :</p>
												<p class="pb-5 text-[#707070]">{{ post.name }}</p>
												<p class="text-[#8e5bbc]">Username :</p>
												<p class="pb-5 text-[#707070]">
													{{ post.username }}
												</p>
												<p class="text-[#8e5bbc]">Email :</p>
												<p class="pb-5 text-[#707070]">
													{{ post.email }}
												</p>
											</li>
										</ul>
									</TabPanel>
								</TabPanels>
							</TabGroup>
						</div>
					</div>
				</div>
			</div>

			<Footer />
			<!-- <MobileTabs /> -->
		</ion-content>
	</ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import HeaderContainerUserPanel from "@/components/Layouts/HeaderContainerUserPanel.vue";
import Footer from "@/components/Layouts/Footer.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import AppInput from "@/components/UI/Input.vue";
import RegisterComponent from "@/components/Auth/Register.vue";
import LoginComponent from "@/components/Auth/Login.vue";
import OtpLogin from "@/components/Auth/OtpLogin.vue";
import { mapActions } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
export default defineComponent({
	name: "UserPanel",
	components: {
		HeaderContainerUserPanel,
		ArrowLeftIcon,
		AppInput,
		IonPage,
		IonContent,
		Footer,
		RegisterComponent,
		LoginComponent,
		OtpLogin,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
	},
	data() {
		return {
			authType: "login",
		};
	},
	methods: {
		toggleAuth(state: string) {
			this.authType = state;
		},
		checkAuthType(state: string) {
			if (state === this.authType) {
				return "bg-primary text-white";
			} else return "border border-solid border-primary text-primary";
		},
		keyPress(event: KeyboardEvent, index: any) {
			let input = <HTMLInputElement>document.getElementById(index);
			if (event.key === "Backspace") {
				input?.setAttribute("value", "");
				if (index !== 1) {
					let prevIndex: any = index - 1;
					document.getElementById(prevIndex)?.focus();
				}
			} else {
				if (index === 5 && input.value !== "") {
					return true;
				} else if (event.keyCode > 47 && event.keyCode < 58) {
					input?.setAttribute("value", event.key);
					if (index !== 5) {
						let nextindex: any = index + 1;
						document.getElementById(nextindex)?.focus();
						event.preventDefault();
					}
				} else if (event.keyCode > 64 && event.keyCode < 91) {
					input?.setAttribute("value", String.fromCharCode(event.keyCode));
					if (index !== 5) {
						let nextindex: any = index + 1;
						document.getElementById(nextindex)?.focus();
						event.preventDefault();
					}
				}
			}
		},
		...mapActions(["login"]),
	},
	setup() {
		const router = useRouter();
		const categories = ref({
			About: [
				{
					id: 1,
					title: "Personal Information",
					name: "John Dess",
					username: "johnDess2502",
					email: "johndess@random.com",
				},
			],
			Cards: [
				{
					id: 1,
					title: "Personal Information",
					name: "John Dess",
					username: "johnDess2502",
					email: "johndess@random.com",
				},
			],
			Groups: [
				{
					id: 1,
					title: "Personal Information",
					name: "John Dess",
					username: "johnDess2502",
					email: "johndess@random.com",
				},
			],
		});

		return { router, categories };
	},
});
</script>
