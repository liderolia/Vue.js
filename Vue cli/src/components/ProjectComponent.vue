<template>
  <div class="top">
    <BannerComponent :info="bannerInfo" />
    <section id="app" class="categories center">
      <nav class="categories__button">
        <button
          class="categories__button_style"
          @click="getProject(project.tag)"
          v-for="project in buttoms"
          :key="project.tag"
        >
          {{ project.tag }}
        </button>
      </nav>
    </section>
    <sectoin id="app" class="project center">
      <div class="project__card_column">
        <article
          class="project__card"
          v-for="project in projectTemp"
          :key="project.id"
        >
          <img :src="project.img" @dblclick="favourite" alt="tag" />
          <div class="project__card_favorites">
            <svg
              @click="favourite"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="35"
              viewBox="0 0 36 35"
              fill="#292F36"
            >
              <g filter="url(#filter0_d_993_156)">
                <path
                  d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                  fill="#FFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_993_156"
                  x="0.186424"
                  y="0.431396"
                  width="35.6271"
                  height="34.3619"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_993_156"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_993_156"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div class="project__card_content">
            <div>
              <h3>{{ project.title }}</h3>
              <p>{{ project.text }}</p>
            </div>
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
        </article>
      </div>
    </sectoin>
    <PaginationComponent />
  </div>
</template>

<script>
import BannerComponent from "./BannerComponent.vue";
import PaginationComponent from "./PaginationComponent.vue";
import imgProject001 from "../assets/img/project01.png";
import imgProject002 from "../assets/img/project02.png";
import imgProject003 from "../assets/img/project03.png";
import imgProject004 from "../assets/img/project04.png";
import imgProject005 from "../assets/img/project05.png";
import imgProject006 from "../assets/img/project06.png";
import imgProject007 from "../assets/img/project07.png";
import imgProject008 from "../assets/img/project08.png";
import imgProject009 from "../assets/img/project09.jpg";
import imgProject010 from "../assets/img/project10.jpg";
import imgProject011 from "../assets/img/project11.jpg";
import imgProject012 from "../assets/img/project12.jpg";
import imgProject013 from "../assets/img/article_basic_Kitchen.png";
import imgProject014 from "../assets/img/article_Kitchen.png";
import imgProject015 from "../assets/img/blog_6.png";
import imgProject016 from "../assets/img/post.png";
import imgProject017 from "../assets/img/blog_2.png";
import imgProject018 from "../assets/img/blog_5.png";
import imgProject019 from "../assets/img/article_basic_Architecture.jpeg";
import imgProject020 from "../assets/img/product_4.png";

export default {
  components: { BannerComponent, PaginationComponent },
  data() {
    const projects = [
      {
        id: 1,
        tag: "Bed Room",
        img: imgProject001,
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 2,
        tag: "Bed Room",
        img: imgProject002,
        title: "Classic Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 3,
        tag: "Bed Room",
        img: imgProject003,
        title: "Minimal Bedroom table",
        text: "Decor / Artchitecture",
      },
      {
        id: 4,
        tag: "Bed Room",
        img: imgProject004,
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 5,
        tag: "Bed Room",
        img: imgProject005,
        title: "Minimal Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 6,
        tag: "Bed Room",
        img: imgProject006,
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 7,
        tag: "Bed Room",
        img: imgProject007,
        title: "System Bedroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 8,
        tag: "Bed Room",
        img: imgProject008,
        title: "Modern Bedroom",
        text: "Decor / Artchitecture",
      },

      {
        id: 9,
        tag: "Bathroom",
        img: imgProject009,
        title: "Modern Bathroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 10,
        tag: "Bathroom",
        img: imgProject010,
        title: "Modern Bathroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 11,
        tag: "Bathroom",
        img: imgProject011,
        title: "Modern Bathroom",
        text: "Decor / Artchitecture",
      },
      {
        id: 12,
        tag: "Bathroom",
        img: imgProject012,
        title: "Modern Bathroom",
        text: "Decor / Artchitecture",
      },

      {
        id: 13,
        tag: "Kitchan",
        img: imgProject013,
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 14,
        tag: "Kitchan",
        img: imgProject014,
        title: "Minimal Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 15,
        tag: "Kitchan",
        img: imgProject015,
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 16,
        tag: "Kitchan",
        img: imgProject016,
        title: "System Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 17,
        tag: "Kitchan",
        img: imgProject017,
        title: "Modern Kitchan",
        text: "Decor / Artchitecture",
      },
      {
        id: 18,
        tag: "Living Area",
        img: imgProject018,
        title: "Modern Living Area",
        text: "Decor / Artchitecture",
      },
      {
        id: 19,
        tag: "Living Area",
        img: imgProject019,
        title: "System Living Area",
        text: "Decor / Artchitecture",
      },
      {
        id: 20,
        tag: "Living Area",
        img: imgProject020,
        title: "Modern Living Area",
        text: "Decor / Artchitecture",
      },
    ];
    return {
      projects: projects,
      buttoms: [
        { tag: "Bathroom" },
        { tag: "Bed Room" },
        { tag: "Kitchan" },
        { tag: "Living Area" },
      ],

      projectTemp: [
        {
          id: 1,
          tag: "Bed Room",
          img: imgProject001,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          tag: "Bed Room",
          img: imgProject002,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          tag: "Bed Room",
          img: imgProject003,
          title: "System Table",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          tag: "Bed Room",
          img: imgProject004,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          tag: "Bed Room",
          img: imgProject005,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          tag: "Bed Room",
          img: imgProject006,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          tag: "Bed Room",
          img: imgProject007,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 8,
          tag: "Bed Room",
          img: imgProject008,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
      ],

      bannerInfo: {
        img: require("../assets/img/project_background.png"),
        title: "Our Project",
        url1: "index.html",
        url2: "project.html",
        link1: "Home",
        link2: "Project",
      },
    };
  },

  methods: {
    getProject(tag) {
      this.projectTemp = this.projects.filter((item) => item.tag === tag);
    },

    favourite(event) {
      const element = event.target;
      const parent = element.parentElement;
      const path = parent.getElementsByTagName("path");
      if (path[0].style.fill === "") {
        path[0].style.fill = "#FFA928";
      } else {
        path[0].style.fill = "";
      }
    },
  },
};
</script>

<style lang="sass" scoped></style>
