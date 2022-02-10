<template>
  <ion-page>
    
    <ion-content :fullscreen="true">
      <HeaderContainer title="Cllct" />      
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
 import { IonPage, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
 import HeaderContainer from '@/components/Layouts/HeaderContainer.vue';
 import ExploreContainer from '@/components/ExploreContainer.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: { HeaderContainer, ExploreContainer, IonContent, IonPage }
});
</script>
