
 <template>
   <ion-page>
    <ion-content :fullscreen="true">
        <HeaderContainer title="Cllct" />
        <HeroCard />

        <div class="portfolio-normal-grid py-[4rem]">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:md:grid-cols-3 gap-4">
                    <div class="portfolio-box shadow-md rounded">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex align-items-center py-3 px-2">
                                <div class="p-[10px] bg-[#EA5E5D] rounded mr-2"></div>
                                <h4 class="text-[14px] font-sem text-gray-600 m-0">from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-box">
                        <div class="portfolio-image">
                            <img src="../../resources/home-page/portfolios/Portfolio-1.jpg">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex">
                                <span class="color-badge"></span>
                                <h4>from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ion-content>
   </ion-page>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import HeroCard from "@/components/Hero-Card.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer, HeroCard },
  methods: {
  },
});
</script>
