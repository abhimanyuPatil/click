
 <template>
  <HeaderContainer title="Cllct" />
  <HeroCard />

  <div class="portfolio-normal-grid">
    <div class="container mx-auto">
        <div class="flex flex-wrap">
            <div class="w-1/5 xs:w-1/2">
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
  </div>  


</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import HeroCard from "@/components/Hero-Card.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";
import AppInput from "@/components/Input.vue";
export default defineComponent({
  name: "AuthView",
  components: { HeaderContainer, HeroCard },
  methods: {
  },
});
</script>
