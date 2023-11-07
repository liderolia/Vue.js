<template>
  <HeaderComponent />
  <HomeComponent />
  <BlogComponent />
  <BlogDetailsComponent />
  <ProjectComponent />
  <ProjectDetailsComponent />
  <FooterComponent />
  <NotFoundComponent />
  <!-- <ProductDetails :available="false" /> -->
  <!-- <ProductDetails :available="true" /> -->
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import BlogDetailsComponent from "./components/BlogDetailsComponent.vue";
import ProjectComponent from "./components/ProjectComponent.vue";
import ProjectDetailsComponent from "./components/ProjectDetailsComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import NotFoundComponent from "./components/NotFoundComponent.vue";
// import ProductDetails from "./components/ProductDetails.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    BlogDetailsComponent,
    ProjectComponent,
    ProjectDetailsComponent,
    FooterComponent,
    NotFoundComponent,
    // ProductDetails,
  },
};
</script>

<style lang="sass"></style>
