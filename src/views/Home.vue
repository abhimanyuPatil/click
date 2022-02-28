<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <HeaderContainer title="Cllct" />
      <HeroCard />
      <GridView v-if="layout.value==='card'" :cards="cardsItems" />
      <ListView v-if="layout.value==='list'" :cards="cardsItems" />
      <DetailView v-if="layout.value==='grid'" :cards="cardsItems" />
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
import LikesBox from "@/components/Likes.vue";
import ViewsBox from "@/components/Views.vue";
import GridView from "@/components/GridView.vue";
import DetailView from "@/components/DetailView.vue";
import ListView from "@/components/ListView.vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default defineComponent({
  name: "HomeRegularGrid",
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
  },
  data() {
    return {
      detailView: true,
      gridView: false,
      listView: false,
      cardsItems: [
        {
          image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Design",
            "Creative",
            "Graphics",
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
          tags: [
            "Design",
            "Creative",
            "Fiction",
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
          image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
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
          image: require("../../resources/home-page/portfolios/Portfolio-4.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
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
          tags: [
            "Games",
            "Painting",
            "Arts",
          ],
          owner: "Alex",
          isGroup: true,
          category: "project",
        },
        {
          image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Arts",
            "Physiology",
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
          tags: [
            "Design",
            "Arts",
            "Physiology",
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
          image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Creative",
            "Games",
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
          image: require("../../resources/home-page/portfolios/Portfolio-4.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Design",
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
          tags: [
            "Design",
            "Creative",
            "Graphics",
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
          image: require("../../resources/home-page/portfolios/Portfolio-1.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Design",
            "Creative",
            "Graphics",
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
          tags: [
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
          image: require("../../resources/home-page/portfolios/Portfolio-3.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Games",
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
          image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Design",
            "Creative",
            "Games",
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
          image: require("../../resources/home-page/portfolios/Portfolio-5.jpg"),
          from: "from web design Ledger ",
          title: "Lufthnas home page concept for UI Designs",
          tags: [
            "Design",
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
      ],
    };
  },
  computed: mapState({
    layout: (state: any) => state.layout.layout,
  }),
});
</script>
