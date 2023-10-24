<template>
  <div class="center">
    <div class="center_tmp">
      <p>name: {{ product.name }}</p>
      <p>price: {{ formattedPrice }}</p>
      <h3 v-if="available">Available</h3>
      <h3 v-else>Out of stock</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "product",
        price: 99.99,
        available: "",
      },
    };
  },
  computed: {
    formattedPrice: function () {
      return `$ ${this.product.price}`;
    },
  },
  props: {
    available: Boolean,
  },
};
</script>

<style lang="sass" scoped>
.center
    display: flex
    flex-direction: column
    align-items: center
    padding-bottom: 100px

    &_tmp
        padding: 20px 25px
        border: 1px solid #CDA274
        border-radius: 30px
        text-align: center
        & h3
            color: #CDA274
            padding-top: 15px
</style>
