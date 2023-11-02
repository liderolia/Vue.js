<template>
  <div class="top">
    <section class="banner__project"></section>
    <section class="projectdetails center">
      <div class="projectdetails__content">
        <h2>{{ title }}</h2>
        <p v-for="i in text">{{ i }}</p>
      </div>
    </section>

    <swiper
      :zoom="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="slider"
    >
      <swiper-slide class="slider__count center">
        <div class="swiper-zoom-container">
          <img :src="img1" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide class="slider__count">
        <div class="swiper-zoom-container">
          <img :src="img2" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide class="slider__count">
        <div class="swiper-zoom-container">
          <img :src="img3" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Zoom, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";

import img1 from "../assets/img/slider01.png";
import img2 from "../assets/img/article_Bedroom.png";
import img3 from "../assets/img/article_basic_Bedroom.png";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Zoom, Pagination],
    };
  },
  data() {
    return {
      img1: img1,
      img2: img2,
      img3: img3,
    };
  },
  computed: {
    ...mapState(["title", "text"]),
  },
};
</script>

<style lang="sass" scoped></style>
