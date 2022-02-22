
 <template>
   <ion-page>
    <ion-content :fullscreen="true">
        <HeaderContainer title="Cllct" />
        <HeroCard />

        <div class="portfolio-normal-grid py-[4rem]">
            <div class="container mx-auto">
                <div class="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:md:grid-cols-3 gap-4">
                    <div class="portfolio-box shadow-md rounded mb-5 hover:scale-105 duration-300 ease-in-out" v-for="item in 15" :key="item" >
                        <div class="portfolio-image">
                            <img :src="generateLink(item)" class="w-full">
                        </div>
                        <div class="portfolio-content">
                            <div class="portfolio-title flex items-center py-4 px-3">
                                <div class="p-[10px] rounded mr-2" :style="getColor()"></div>
                                <h4 class="text-[14px] font-sem text-gray-600 m-0">from web design Ledger</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </ion-content>
   </ion-page>
</template>


<script lang="ts">
import { defineComponent } from "vue";
 import { IonPage, IonContent } from '@ionic/vue';
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import Footer from "@/components/Layouts/Footer.vue";
import HeroCard from "@/components/Hero-Card.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "HomeNormalGrid",
  components: { HeaderContainer, HeroCard, IonPage, IonContent },
  methods: {
      getColor(){
       return {background:'#'+(Math.random()*0xFFFFFF<<0).toString(16)};
      },
      generateLink(item:any){
          return require('../../resources/home-page/portfolios/Portfolio-'+item+'.jpg');
      }
  }
});
</script>
