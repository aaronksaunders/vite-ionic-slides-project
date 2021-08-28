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
        <swiper ref="swiperRef2" @swiper="onSwiperInstance">
          <swiper-slide v-for="s in slideData" :key="s.id">
            <ion-card>
              <ion-card-content>Slide Name: {{ s.name }}</ion-card-content>
              <div style="padding-top: 10px">
                <ion-button @click="removeSlide(s.id)">
                  DELETE SLIDE
                </ion-button>
              </div>
            </ion-card>
          </swiper-slide>
        </swiper>
      </div>
      <div style="padding-left: 10px">
        <ion-button @click="addSlide(null)">ADD SLIDE</ion-button>
      </div>
      <div style="padding-left: 10px; padding-top: 10px">
        SLIDE COUNT {{ swiperRef?.slides?.length }}
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
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
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

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
    const slideData = ref<any>([
      { id: "1", name: "Initial Slides" },
      { id: "2", name: "Initial Slide Two" },
    ]);

    const swiperRef = ref<any>(null);

    // used to get an instance of the swiper object after
    //  it is initialized
    const onSwiperInstance = (v: any) => {
      console.log("onSwiperInstance", v);
      swiperRef.value = v;
    };

    onMounted(() => {
      setTimeout(() => {
        swiperRef.value.update();
      }, 1);
    });

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
      removeSlide,
      onSwiperInstance,
      swiperRef,
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
