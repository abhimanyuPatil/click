<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderContainer title="Cllct" />
      <HeroCard />

      <div class="portfolio-normal-grid py-[4rem] bg-white">
        <GridView v-if="gridView" />
        <ListView v-if="listView" />
        <DetailView v-if="detailView" />
      </div>
      <!-- <Footer /> -->
      <Footer />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage, IonContent } from "@ionic/vue";
import HeaderContainer from "@/components/Layouts/HeaderContainer.vue";
import Footer from "@/components/Layouts/Footer.vue";
import HeroCard from "@/components/Hero-Card.vue";
import GridView from "@/components/GridView.vue";
import DetailView from "@/components/DetailView.vue";
import ListView from "@/components/ListView.vue";
import { ArrowLeftIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "HomeNormalGrid",
  components: {
    HeaderContainer,
    HeroCard,
    IonPage,
    IonContent,
    Footer,
    GridView,
    ListView,
    DetailView,
  },
  data() {
    return {
      gridView: false,
      listView: false,
      detailView: true,
    };
  },
  methods: {
    getColor() {
      return {
        background: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
      };
    },
    generateLink(item: any) {
      return require("../../resources/home-page/portfolios/Portfolio-" +
        item +
        ".jpg");
    },
  },
});
</script>
