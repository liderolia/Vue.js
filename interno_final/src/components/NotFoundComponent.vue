<template>
  <div>
    <!-- <HeaderComponent /> -->
    <div class="notfound center">
      <div class="notfound__content">
        <h1>404</h1>
        <h3>We are sorry, but the page you requested was not found</h3>
        <button class="notfound__content_button">
          <router-link class="button_link" :to="link.url"
            >Back To Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </button>
        <div class="notfound__img"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import HeaderComponent from "./HeaderComponent.vue";
export default {
  data() {
    return {
      link: {
        name: "Home",
        url: "/",
      },
    };
  },
  //   components: { HeaderComponent },
};
</script>

<style lang="sass" scoped></style>
