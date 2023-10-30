<template>
  <div class="top">
    <section class="banner">
      <div class="banner__intro">
        <h2>Articles & News</h2>
        <div class="banner__intro_link">
          <a href="index.html">Home</a>
          <p>/</p>
          <a href="blog.html">Blog</a>
        </div>
      </div>
    </section>
    <section class="post center">
      <h2>Latest Post</h2>
      <div class="post__card">
        <img src="../assets/img/post.png" alt="KLatest Post" />
        <div class="post__card_content">
          <div class="post__card_text">
            <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.<br />
              <br />
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
          </div>
          <div class="blog__product_content">
            <p>26 December, 2022</p>
            <a class="blog__product_svg" href="project.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <sectoin class="blog__site center">
      <h2>Articles & News</h2>
      <div id="app" class="blog__product">
        <article
          class="blog__product_card"
          v-for="item in card"
          :key="item.img"
        >
          <div class="blog__product_imgcontent">
            <img :src="item.img" alt="" />
            <p class="blog__product_tag">{{ item.tag }}</p>
          </div>
          <div class="blog__product_title">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="blog__product_content">
            <p>{{ item.date }}</p>
            <a class="blog__product_svg" href="details.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
              >
                <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                <path
                  d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </sectoin>
    <PaginationComponent />
  </div>
</template>

<script>
import PaginationComponent from "./PaginationComponent.vue";

export default {
  data() {
    return {
      card: [
        {
          img: require("../assets/img/blog_1.png"),
          tag: "Kitchan Design",
          title: "Let’s Get Solution For Building Construction  Work",
          date: "26 December,2022",
        },
        {
          img: require("../assets/img/blog_2.png"),
          tag: "Living Design",
          title: "Low Cost Latest Invented Interior Designing  Ideas",
          date: "22 December,2022",
        },
        {
          img: require("../assets/img/blog_3.png"),
          tag: "Interior Design",
          title: "Best For Any Office &  Business Interior  Solution",
          date: "25 December,2022",
        },
        {
          img: require("../assets/img/blog_4.png"),
          tag: "Kitchen Planning",
          title: "Let’s Get Solution For Building Construction  Work",
          date: "26 December,2022",
        },
        {
          img: require("../assets/img/blog_5.png"),
          tag: "Bedroom Design",
          title: "Low Cost Latest Invented Interior Designing Ideas",
          date: "22 December,2022",
        },
        {
          img: require("../assets/img/blog_6.png"),
          tag: "Interior Design",
          title: "Best For Any Office &  Business Interior  Solution",
          date: "25 December,2022",
        },
      ],
    };
  },

  methods: {},
  components: { PaginationComponent },
};
</script>

<style lang="sass" scoped></style>
