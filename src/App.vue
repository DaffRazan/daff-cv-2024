<template>
  <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  </head>

  <div id="app" class="
      container
      mx-auto
      bg-green-800
      leading-normal
      tracking-normal
      md:px-32
      px-6
    ">
    <nav class="
        flex
        items-center
        justify-between
        flex-wrap
        pt-6
        w-full
        z-10
        nav-scroll
      ">
      <div class="flex items-center flex-shrink-0 mr-6">
        <router-link tag="li" to="/">
          <a class="
              text-white
              no-underline
              hover:no-underline
              md:text-4xl
              text-2xl
              font-bold
            " href="">Daff<span class="text-green-500">Raz.</span></a>
        </router-link>
      </div>

      <div class="block lg:hidden">
        <button @click="isOpen = !isOpen" id="nav-toggle" class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-purple-300
            border-green-500
            hover:text-white
            hover:border-white
          ">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            <path fill-rule="evenodd" v-if="isOpen"
              d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z" />
          </svg>
        </button>
      </div>

      <div :class="isOpen ? 'block' : 'hidden'" class="
          mx-auto
          w-full
          flex-grow
          lg:flex
          lg:items-center
          lg:w-auto
          pt-6
          lg:pt-0
          items-center
          text-green-500
          border-green-500
          text-center
          bg-transparent
        " id="nav-content">
        <ul class="
            list-reset
            lg:flex
            justify-center
            md:justify-end
            flex-1
            items-center
          ">
          <router-link tag="li" to="/" exact-active-class="exact-active"><a class="
                md:pr-5
                md:text-3xl
                font-bold
                md:inline-block
                block
                py-2
                px-4
                no-underline
                text-white
                hover:bg-green-500
                hover:rounded-lg
              ">Home</a>
          </router-link>
          <router-link tag="li" to="/projects" exact-active-class="exact-active"><a class="
                md:pr-5
                md:text-3xl
                font-bold
                md:inline-block
                block
                py-2
                px-4
                no-underline
                text-white
                hover:bg-green-500
                hover:rounded-lg
              ">Projects</a>
          </router-link>
          <router-link tag="li" to="/contact" exact-active-class="exact-active"><a class="
                md:pr-5
                md:text-3xl
                font-bold
                md:inline-block
                block
                py-2
                px-4
                no-underline
                text-white
                hover:bg-green-500
                hover:rounded-lg
              ">Contact</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view />

    <div id="footer" class="md:py-10 py-5">
      <p class="text-center text-white text-sm md:text-xl">
        Made with ❤️ by Daff<span class="text-green-500">Raz</span> in 2024
      </p>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import $ from "jquery";

export default {
  name: "app",
  mounted() {
    // custom script
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(".nav-scroll").addClass(
          "p-5 sticky top-0 rounded-xl bg-gray-800 animate__fadeIn animate__animated"
        );
      } else {
        $(".nav-scroll").removeClass(
          "p-5 sticky top-0 rounded-xl bg-gray-800 animate__fadeIn animate__animated"
        );
      }
    });
  },
  created() {
    AOS.init();
  },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
};
</script>
