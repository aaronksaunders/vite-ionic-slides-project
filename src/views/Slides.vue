<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Swiper - Slides</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- header on page -->
      <div style="padding-left: 10px">
        <h1>Swiperjs Slides</h1>
      </div>

      <!-- slides created by loopong through slideData -->
      <swiper :pagination="{ clickable: true }" @swiper="onSwiperInstance">
        <template v-for="s in slideData" :key="s.id">
          <swiper-slide>
            <!-- put IonCard inside of the swiper-slide element -->
            <ion-card>
              <ion-card-content>
                <!-- using name from data for slide title -->
                <div>Slide Name {{ s.name }}</div>
                <ion-button @click="removeSlide(s.id)">DELETE SLIDE</ion-button>
              </ion-card-content>
            </ion-card>
          </swiper-slide>
        </template>
      </swiper>
      <div style="padding-left: 10px">
        <ion-button @click="addSlide">ADD SLIDE</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  IonContent,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";

export default defineComponent({
  name: "Slides",
  components: {
    IonHeader,
    IonPage,
    IonButton,
    IonContent,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    Swiper,
    SwiperSlide,
  },
  setup() {
    // data used to draw slides
    const slideData = ref<any>([{ id: "1", name: "initial slide" }]);

    // reference to swiper
    const swiperRef = ref<any>(null);

    // used to get an instance of the swiper object after it is
    // initialized
    const onSwiperInstance = (v: any) => {
      console.log("onSwiperInstance", v);
      swiperRef.value = v;
    };

    // adds a slide to the list by updating the data that
    // the slides are derived from
    const addSlide = () => {
      slideData.value = [
        { id: new Date().getTime() + "", name: new Date() + "" },
        ...slideData.value,
      ];
    };

    // remove a slide from the list by filtering the data that
    // the slides are derived from
    const removeSlide = (slideId: any) => {
      let newData = slideData.value.filter((s: any) => s.id !== slideId);
      slideData.value = newData;
    };

    return {
      slideData,
      addSlide,
      onSwiperInstance,
      removeSlide,
    };
  },
});
</script>

<style>
ion-card {
  height: 90%;
}
.swiper-slide {
  padding: 12px;
  text-align: center;
  font-size: 28px;
  background: #fff;
}
.swiper-container {
  width: 100%;
  height: 80%;
}
</style>
