<template>
  <HeaderComponent />
  <HomeComponent />
  <BlogComponent />
  <DetailsComponent />
  <ProjectComponent />
  <FooterComponent />
  <!-- <ProductDetails :available="false" /> -->
  <!-- <ProductDetails :available="true" /> -->
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import DetailsComponent from "./components/DetailsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    DetailsComponent,
    ProjectComponent,
    FooterComponent,
    ProductDetails,
  },
};
</script>

<style lang="sass"></style>
