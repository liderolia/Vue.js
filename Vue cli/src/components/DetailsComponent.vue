<template>
  <div class="top">
    <section class="banner__details"></section>
    <section id="app" class="details center">
      <div>
        <div class="sidebar">
          <h3>Tags</h3>
          <nav class="sidebar__button">
            <button
              class="sidebar__button_style"
              @click="sortArticle(item.id)"
              v-for="item in buttoms"
              :key="item.id"
            >
              {{ item.tag }}
            </button>
          </nav>
        </div>

        <div
          class="details__content"
          v-for="item in featuredArticle"
          :key="item.id"
        >
          <h2>{{ item.article_title }}</h2>
          <div class="details__content_basic">
            <img :src="item.article_basic_img" alt="id" />
          </div>
          <div class="details__content_data">
            <p>{{ item.date_article }}</p>
            <div class="details__content_links">
              <a href="blog.html">Interior</a>
              <p>/</p>
              <a href="index.html">Home</a>
              <p>/</p>
              <a href="#">Decore</a>
            </div>
          </div>
          <p v-for="i in item.article_text">{{ i }}</p>
          <div class="details__content_quote">
            <h4>”</h4>
            <div class="details__content_quote_text">
              <p v-for="i in item.article_quote">{{ i }}</p>
            </div>
          </div>
          <h2>{{ item.article_subtitle }}</h2>
          <p v-for="i in item.article_text2">{{ i }}</p>
          <ol>
            <li v-for="i in item.article_list">{{ i }}</li>
          </ol>
          <div class="details__content_article">
            <img :src="item.article_img" alt="id" />
          </div>
          <p v-for="i in item.article_text3">{{ i }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: "Kitchen",
          article_title: "Let’s Get Solution for Building Construction Work",
          article_basic_img: require("../assets/img/article_basic_Kitchen.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Kitchen.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Bedroom",
          article_title: "Minimal Look Bedrooms",
          article_basic_img: require("../assets/img/article_basic_Bedroom.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 4 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 5 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Bedroom.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Building",
          article_title: "Let’s Get Solution for Building Construction Work",
          article_basic_img: require("../assets/img/article_basic_Building.jpeg"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Building.jpeg"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Architecture",
          article_title:
            "Let’s Get Solution for Architecture Construction Work",
          article_basic_img: require("../assets/img/article_basic_Architecture.jpeg"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],

          article_img: require("../assets/img/article_Architecture.jpg"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Planning",
          article_title: "Kitchen Planning",
          article_basic_img: require("../assets/img/article_basic_Kitchen.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Kitchen.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Living",
          article_title: "Low Cost Latest Invented Interior Designing Ideas",
          article_basic_img: require("../assets/img/article_basic_Kitchen.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Kitchen.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
        {
          id: "Interior",
          article_title: "Best For Any Office & Business Interior Solution",
          article_basic_img: require("../assets/img/article_basic_Kitchen.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Kitchen.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
      ],

      buttoms: [
        { id: "Kitchen", tag: "Kitchen" },
        { id: "Bedroom", tag: "Bedroom" },
        { id: "Building", tag: "Building" },
        { id: "Architecture", tag: "Architecture" },
        { id: "Planning", tag: "Kitchen Planning" },
        { id: "Living", tag: "Living" },
        { id: "Interior", tag: "Interior" },
      ],

      featuredArticle: [
        {
          id: "Kitchen",
          article_title: "Let’s Get Solution for Building Construction Work",
          article_basic_img: require("../assets/img/article_basic_Kitchen.png"),
          date_article: "26 December, 2022",
          article_text: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
            "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          ],
          article_quote: [
            "The details are not the details.",
            "They make the design.",
          ],
          article_subtitle: "Design sprints are great",
          article_text2: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_list: [
            "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 2 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
            "Contrary 3 to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
          article_img: require("../assets/img/article_Kitchen.png"),
          article_text3: [
            "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
          ],
        },
      ],
    };
  },

  methods: {
    sortArticle(id) {
      this.featuredArticle = this.articles.filter((el) => el.id === id);
      // this.$refs.myInput.focus();
    },
  },
};
</script>

<style lang="sass" scoped></style>
