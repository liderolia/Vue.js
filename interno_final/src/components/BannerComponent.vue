<template>
  <div class="top">
    <section
      class="banner"
      v-bind:style="{ 'background-image': 'url(' + info.img + ')' }"
    >
      <div class="banner__intro">
        <h2>{{ info.title }}</h2>
        <div class="banner__intro_link">
          <router-link :to="info.url1">{{ info.link1 }}</router-link>
          <p>/</p>
          <router-link :to="info.url2">{{ info.link2 }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>

<style lang="sass" scoped></style>
