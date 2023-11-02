<template>
  <div class="top">
    <section
      class="banner"
      v-bind:style="{ 'background-image': 'url(' + info.img + ')' }"
    >
      <div class="banner__intro">
        <h2>{{ info.title }}</h2>
        <div class="banner__intro_link">
          <a :href="info.url1">{{ info.link1 }}</a>
          <p>/</p>
          <a :href="info.url2">{{ info.link2 }}</a>
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
